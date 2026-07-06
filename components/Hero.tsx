export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">Logistiek &amp; Verkeersregelaars</span>
          <h1>
            Uw lading en verkeer
            <br />
            <span className="grad">in vertrouwde handen</span>
          </h1>
          <p className="lead">
            Paris BV verzorgt betrouwbare koeriers- en transportdiensten en levert
            gecertificeerde verkeersregelaars. Snel, veilig en altijd op tijd — door
            heel Nederland.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Vraag een offerte aan
            </a>
            <a href="#diensten" className="btn btn-ghost">
              Bekijk onze diensten
            </a>
          </div>
          <div className="hero-badges">
            <div className="badge">
              <strong>24/7</strong>
              <span>Bereikbaar</span>
            </div>
            <div className="badge">
              <strong>NL</strong>
              <span>Landelijke dekking</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card card-1">
            <span className="ic">🚚</span>
            <div>
              <strong>Transport onderweg</strong>
              <small>Rotterdam → Utrecht</small>
            </div>
            <span className="pulse"></span>
          </div>
          <div className="visual-card card-2">
            <span className="ic">🦺</span>
            <div>
              <strong>Verkeersregelaar</strong>
              <small>Ingezet &amp; gecertificeerd</small>
            </div>
          </div>
          <div className="visual-card card-3">
            <span className="ic">📦</span>
            <div>
              <strong>Koerier bezorgd</strong>
              <small>Op tijd afgeleverd</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
