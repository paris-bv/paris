# Paris BV — website

Marketingwebsite voor **Paris BV** — logistieke diensten (koerier & transport) en
verkeersregelaars. Gebouwd met **Next.js (App Router)** en TypeScript, klaar om te
deployen op **Vercel**.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deployen op Vercel

1. Push deze map naar een GitHub-repository.
2. Ga naar [vercel.com](https://vercel.com) → **Add New… → Project** → importeer de repo.
3. Vercel herkent Next.js automatisch. Klik **Deploy**. Klaar.

Of via de CLI:

```bash
npm i -g vercel
vercel
```

## Structuur

```
app/
  layout.tsx      # <html>, fonts, metadata/SEO
  page.tsx        # zet alle secties samen
  globals.css     # alle styling
components/
  Header.tsx      # navigatie + mobiel menu
  Hero.tsx        # hero met call-to-action
  Trust.tsx       # trust-balk
  Diensten.tsx    # koerier / transport / verkeersregelaars
  About.tsx       # over ons + statistieken
  Waarom.tsx      # waarom Paris BV
  Werkwijze.tsx   # 4 stappen
  Contact.tsx     # contactformulier
  Footer.tsx      # footer
  Reveal.tsx      # scroll-animaties
```

## Nog aanpassen (placeholders)

Vervang de voorbeeldgegevens door de echte gegevens van Paris BV:

- **E-mail** `info@parisbv.nl` — in `components/Contact.tsx` en `components/Footer.tsx`
- **Telefoon** `+31 6 00 00 00 00` — idem
- **KvK-nummer** `00000000` — in `components/Footer.tsx`
- **Statistieken** (500+ ritten, 98% op tijd, enz.) — in `components/About.tsx`

## Contactformulier (SMTP)

Het formulier verstuurt via **SMTP** (nodemailer) naar `CONTACT_TO`. De logica staat in
`app/api/contact/route.ts`; het formulier POST't ernaartoe vanuit `components/Contact.tsx`.

### Environment variables instellen

Zet in **Vercel → Project → Settings → Environment Variables** (en lokaal in `.env.local`):

| Variabele     | Verplicht | Voorbeeld / uitleg |
|---------------|-----------|--------------------|
| `SMTP_HOST`   | ja        | `smtp.jouwprovider.nl` |
| `SMTP_PORT`   | nee       | `587` (STARTTLS) of `465` (SSL). Standaard `587` |
| `SMTP_SECURE` | nee       | Leeg = automatisch (`true` bij 465). Of expliciet `true`/`false` |
| `SMTP_USER`   | ja        | Inlognaam mailaccount, bv. `info@paris-bv.nl` |
| `SMTP_PASS`   | ja        | Wachtwoord of app-wachtwoord |
| `SMTP_FROM`   | nee       | Afzender, bv. `"Paris BV website <info@paris-bv.nl>"` |
| `CONTACT_TO`  | nee       | Ontvanger. Standaard `info@paris-bv.nl` |

Zie `.env.example` voor een kant-en-klaar sjabloon.

> Let op: bij Gmail/Microsoft heb je vaak een **app-wachtwoord** nodig (niet je gewone
> wachtwoord). En `SMTP_FROM` moet meestal hetzelfde domein zijn als `SMTP_USER`,
> anders weigert de provider de mail.

Na het toevoegen/wijzigen van variabelen in Vercel: **opnieuw deployen** zodat ze
worden opgepikt.

### Lokaal testen

```bash
cp .env.example .env.local   # vul je echte SMTP-gegevens in
npm run dev
```
