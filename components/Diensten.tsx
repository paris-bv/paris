const diensten = [
  {
    icon: "📦",
    title: "Koeriersdiensten",
    text: "Spoed- en dagkoerier voor pakketten en documenten. Rechtstreeks van deur tot deur, met track & trace en gegarandeerde levertijden.",
    items: [
      "Spoedleveringen & same-day",
      "Documenten en waardevolle zendingen",
      "Vaste ritten & contractvervoer",
    ],
    featured: false,
  },
  {
    icon: "🚚",
    title: "Transport",
    text: "Betrouwbaar transport van klein tot groot. Wij verzorgen uw logistiek efficiënt en op tijd, afgestemd op uw planning.",
    items: [
      "Nationaal wegtransport",
      "Pallet- en stukgoedvervoer",
      "Op- en overslag op afspraak",
    ],
    featured: false,
  },
  {
    icon: "🦺",
    title: "Verkeersregelaars",
    text: "Gecertificeerde verkeersregelaars voor werkzaamheden, wegafzettingen en evenementen. Veiligheid en doorstroming staan voorop.",
    items: [
      "Evenementen & wegwerkzaamheden",
      "Gecertificeerd & verzekerd personeel",
      "Snel inzetbaar, ook op korte termijn",
    ],
    featured: true,
  },
];

export default function Diensten() {
  return (
    <section className="section" id="diensten">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Onze diensten</span>
          <h2>Alles op het gebied van logistiek en verkeer</h2>
          <p>
            Van een spoedpakket tot het veilig regelen van verkeer bij uw werk of
            evenement — Paris BV regelt het.
          </p>
        </div>

        <div className="cards">
          {diensten.map((d) => (
            <article
              key={d.title}
              className={`card reveal${d.featured ? " card-featured" : ""}`}
            >
              <div className="card-icon">{d.icon}</div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              <ul className="tick">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
