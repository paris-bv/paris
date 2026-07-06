export default function Footer() {
  const year = 2026;
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <span className="brand-mark">P</span>
            <span className="brand-text">
              Paris<span className="brand-accent"> BV</span>
            </span>
          </a>
          <p>Logistieke diensten en verkeersregelaars. Snel, veilig en altijd op tijd.</p>
        </div>
        <div className="footer-col">
          <h4>Diensten</h4>
          <a href="#diensten">Koeriersdiensten</a>
          <a href="#diensten">Transport</a>
          <a href="#diensten">Verkeersregelaars</a>
        </div>
        <div className="footer-col">
          <h4>Bedrijf</h4>
          <a href="#over">Over ons</a>
          <a href="#waarom">Waarom Paris</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:info@paris-bv.nl">info@paris-bv.nl</a>
          <a href="tel:+31649450245">06 49 45 02 45</a>
          <span className="muted">KvK 42084367</span>
          <span className="muted">BTW NL005473456B31</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} Paris BV. Alle rechten voorbehouden.</span>
        <span className="muted">
          Logistiek · Koerier · Transport · Verkeersregelaars
        </span>
      </div>
    </footer>
  );
}
