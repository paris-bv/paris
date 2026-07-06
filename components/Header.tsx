"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Paris BV home" onClick={close}>
          <span className="brand-mark">P</span>
          <span className="brand-text">
            Paris<span className="brand-accent"> BV</span>
          </span>
        </a>

        <nav
          className={`main-nav${open ? " open" : ""}`}
          aria-label="Hoofdmenu"
        >
          <a href="#diensten" onClick={close}>Diensten</a>
          <a href="#over" onClick={close}>Over ons</a>
          <a href="#waarom" onClick={close}>Waarom Paris</a>
          <a href="#werkwijze" onClick={close}>Werkwijze</a>
          <a href="#contact" className="nav-cta" onClick={close}>Contact</a>
        </nav>

        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Menu openen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
