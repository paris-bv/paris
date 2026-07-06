const features = [
  {
    icon: "⚡",
    title: "Snel & flexibel",
    text: "Ook op korte termijn geregeld. Wij schakelen snel en denken met uw planning mee.",
  },
  {
    icon: "🛡️",
    title: "Veilig & gecertificeerd",
    text: "Gekwalificeerd personeel en volledige verzekering. Veiligheid staat altijd voorop.",
  },
  {
    icon: "🕐",
    title: "Altijd op tijd",
    text: "Afspraak is afspraak. Wij leveren en zetten in binnen de afgesproken tijd.",
  },
  {
    icon: "📞",
    title: "Persoonlijk contact",
    text: "Korte lijnen en een vast aanspreekpunt. U weet altijd waar u aan toe bent.",
  },
];

export default function Waarom() {
  return (
    <section className="section" id="waarom">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Waarom Paris BV</span>
          <h2>Waarom klanten voor ons kiezen</h2>
        </div>
        <div className="features">
          {features.map((f) => (
            <div className="feature reveal" key={f.title}>
              <div className="feature-ic">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
