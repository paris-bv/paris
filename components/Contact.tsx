"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [note, setNote] = useState<{ text: string; ok: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      naam: String(data.get("naam") || "").trim(),
      email: String(data.get("email") || "").trim(),
      telefoon: String(data.get("telefoon") || "").trim(),
      dienst: String(data.get("dienst") || "").trim(),
      bericht: String(data.get("bericht") || "").trim(),
      website: String(data.get("website") || ""), // honeypot
    };

    if (!payload.naam || !payload.email) {
      setNote({ text: "Vul uw naam en e-mailadres in.", ok: false });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setNote({ text: "Vul een geldig e-mailadres in.", ok: false });
      return;
    }

    setNote(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result?.error || "Er ging iets mis.");
      }
      setNote({
        text: "Bedankt! Uw aanvraag is ontvangen. Wij nemen snel contact met u op.",
        ok: true,
      });
      form.reset();
    } catch (err) {
      setNote({
        text:
          err instanceof Error
            ? err.message
            : "Versturen mislukt. Probeer het later opnieuw of bel ons.",
        ok: false,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="kicker">Contact</span>
          <h2>Vraag vrijblijvend een offerte aan</h2>
          <p>
            Vertel ons wat u nodig heeft. Wij reageren snel met een passend voorstel.
          </p>

          <ul className="contact-list">
            <li>
              <span className="ci">📧</span>
              <div>
                <strong>E-mail</strong>
                <a href="mailto:info@paris-bv.nl">info@paris-bv.nl</a>
              </div>
            </li>
            <li>
              <span className="ci">📱</span>
              <div>
                <strong>Telefoon</strong>
                <a href="tel:+31649450245">06 49 45 02 45</a>
              </div>
            </li>
            <li>
              <span className="ci">📍</span>
              <div>
                <strong>Werkgebied</strong>
                <span>Heel Nederland</span>
              </div>
            </li>
            <li>
              <span className="ci">🕐</span>
              <div>
                <strong>Bereikbaar</strong>
                <span>Ma – Zo, 24/7 op afspraak</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          {/* Honeypot tegen spam — verborgen voor mensen */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <div className="field">
            <label htmlFor="naam">Naam</label>
            <input type="text" id="naam" name="naam" required placeholder="Uw naam" />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="naam@bedrijf.nl"
              />
            </div>
            <div className="field">
              <label htmlFor="telefoon">Telefoon</label>
              <input
                type="tel"
                id="telefoon"
                name="telefoon"
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="dienst">Waar kunnen we mee helpen?</label>
            <select id="dienst" name="dienst" defaultValue="">
              <option value="" disabled>
                Kies een dienst…
              </option>
              <option>Koeriersdienst</option>
              <option>Transport</option>
              <option>Verkeersregelaars</option>
              <option>Anders / weet ik nog niet</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="bericht">Bericht</label>
            <textarea
              id="bericht"
              name="bericht"
              rows={4}
              placeholder="Vertel kort wat u nodig heeft…"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
            {sending ? "Versturen…" : "Verstuur aanvraag"}
          </button>
          {note && (
            <p className={`form-note ${note.ok ? "ok" : "err"}`} role="status">
              {note.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
