export default function About() {
  return (
    <section className="section section-alt" id="over">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <div className="stat-block">
            <div className="stat">
              <span className="stat-ic">🚚</span>
              <strong>Transport &amp; koerier</strong>
              <span>Van spoedpakket tot volle planning</span>
            </div>
            <div className="stat">
              <span className="stat-ic">🦺</span>
              <strong>Verkeersregelaars</strong>
              <span>Gecertificeerd en verzekerd</span>
            </div>
            <div className="stat">
              <span className="stat-ic">📍</span>
              <strong>Landelijk</strong>
              <span>Actief door heel Nederland</span>
            </div>
            <div className="stat">
              <span className="stat-ic">🕐</span>
              <strong>Flexibel</strong>
              <span>Ook op korte termijn inzetbaar</span>
            </div>
          </div>
        </div>
        <div className="about-text reveal">
          <span className="kicker">Over Paris BV</span>
          <h2>Een betrouwbare partner die met u meedenkt</h2>
          <p>
            Paris BV is gespecialiseerd in logistieke dienstverlening en het regelen
            van verkeer. Wij combineren de flexibiliteit van een koeriersdienst met de
            betrouwbaarheid van een ervaren transportpartner — en zorgen daarnaast
            voor veiligheid op straat met onze gecertificeerde verkeersregelaars.
          </p>
          <p>
            Of het nu gaat om een spoedzending, een volle transportplanning of het
            veilig begeleiden van verkeer bij een evenement: u kunt op ons rekenen.
            Korte lijnen, duidelijke afspraken en werk dat klopt.
          </p>
          <a href="#contact" className="btn btn-primary">
            Neem contact op
          </a>
        </div>
      </div>
    </section>
  );
}
