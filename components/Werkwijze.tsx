const steps = [
  { n: "1", title: "Aanvraag", text: "U neemt contact op met uw wens of transportvraag." },
  { n: "2", title: "Offerte", text: "U ontvangt snel een heldere offerte op maat." },
  { n: "3", title: "Inzet", text: "Wij plannen en voeren de opdracht vakkundig uit." },
  { n: "4", title: "Afronding", text: "Nette oplevering en terugkoppeling. Klaar." },
];

export default function Werkwijze() {
  return (
    <section className="section section-alt" id="werkwijze">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Werkwijze</span>
          <h2>In vier stappen geregeld</h2>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step reveal" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
