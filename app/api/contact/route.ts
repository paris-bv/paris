import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer heeft de Node.js-runtime nodig (niet de Edge-runtime).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const naam = String(body.naam || "").trim();
  const email = String(body.email || "").trim();
  const telefoon = String(body.telefoon || "").trim();
  const dienst = String(body.dienst || "").trim();
  const bericht = String(body.bericht || "").trim();

  // Honeypot tegen spam: bots vullen dit verborgen veld in.
  if (String(body.website || "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!naam || !email) {
    return NextResponse.json(
      { error: "Vul uw naam en e-mailadres in." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Vul een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || "info@paris-bv.nl";
  const from =
    process.env.SMTP_FROM || `"Paris BV website" <${user ?? "no-reply@paris-bv.nl"}>`;

  if (!host || !user || !pass) {
    console.error("SMTP-configuratie ontbreekt (SMTP_HOST / SMTP_USER / SMTP_PASS).");
    return NextResponse.json(
      { error: "De e-mailservice is nog niet geconfigureerd." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    // secure = true bij poort 465, anders STARTTLS op 587.
    secure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : port === 465,
    auth: { user, pass },
  });

  const lines = [
    `Naam: ${naam}`,
    `E-mail: ${email}`,
    telefoon ? `Telefoon: ${telefoon}` : null,
    dienst ? `Dienst: ${dienst}` : null,
    "",
    "Bericht:",
    bericht || "(geen bericht)",
  ].filter(Boolean);

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#10233f;line-height:1.6">
      <h2 style="margin:0 0 12px">Nieuwe aanvraag via de website</h2>
      <p><strong>Naam:</strong> ${escapeHtml(naam)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      ${telefoon ? `<p><strong>Telefoon:</strong> ${escapeHtml(telefoon)}</p>` : ""}
      ${dienst ? `<p><strong>Dienst:</strong> ${escapeHtml(dienst)}</p>` : ""}
      <p><strong>Bericht:</strong><br>${escapeHtml(bericht || "(geen bericht)").replace(/\n/g, "<br>")}</p>
    </div>`;

  // Bevestigingsmail naar de klant.
  const bevestigingTekst = [
    `Beste ${naam},`,
    "",
    "Bedankt voor uw aanvraag bij Paris BV. Wij hebben deze in goede orde ontvangen",
    "en nemen zo snel mogelijk contact met u op.",
    "",
    "Uw gegevens:",
    ...lines,
    "",
    "Met vriendelijke groet,",
    "Paris BV",
    "info@paris-bv.nl · 06 49 45 02 45",
  ].join("\n");

  const bevestigingHtml = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#10233f;line-height:1.6">
      <p>Beste ${escapeHtml(naam)},</p>
      <p>
        Bedankt voor uw aanvraag bij <strong>Paris BV</strong>. Wij hebben deze in goede
        orde ontvangen en nemen zo snel mogelijk contact met u op.
      </p>
      <p style="margin:18px 0 6px"><strong>Een kopie van uw aanvraag:</strong></p>
      <div style="background:#f5f7fb;border:1px solid #e6ebf3;border-radius:12px;padding:14px 16px">
        ${telefoon ? `<p style="margin:0 0 4px"><strong>Telefoon:</strong> ${escapeHtml(telefoon)}</p>` : ""}
        ${dienst ? `<p style="margin:0 0 4px"><strong>Dienst:</strong> ${escapeHtml(dienst)}</p>` : ""}
        <p style="margin:0"><strong>Bericht:</strong><br>${escapeHtml(bericht || "(geen bericht)").replace(/\n/g, "<br>")}</p>
      </div>
      <p style="margin-top:18px">
        Met vriendelijke groet,<br>
        <strong>Paris BV</strong><br>
        <a href="mailto:info@paris-bv.nl">info@paris-bv.nl</a> · 06 49 45 02 45
      </p>
    </div>`;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Website-aanvraag${dienst ? ` — ${dienst}` : ""} — ${naam}`,
      text: lines.join("\n"),
      html,
    });

    // Bevestiging naar de klant. Mislukt dit, dan is de aanvraag zelf al binnen,
    // dus we laten het formulier niet falen — we loggen alleen.
    try {
      await transporter.sendMail({
        from,
        to: email,
        replyTo: to,
        subject: "Bevestiging van uw aanvraag — Paris BV",
        text: bevestigingTekst,
        html: bevestigingHtml,
      });
    } catch (confirmErr) {
      console.error("Bevestigingsmail naar klant mislukt:", confirmErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Versturen mislukt:", err);
    return NextResponse.json(
      { error: "Versturen mislukt. Probeer het later opnieuw of bel ons." },
      { status: 502 }
    );
  }
}
