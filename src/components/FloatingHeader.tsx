import { useState } from "react";
import { Grid2x2PlusIcon, MenuIcon, XIcon } from "lucide-react";
import { company } from "../data";

const links = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Preços", href: "/#precos" },
  { label: "Contacto", href: "/contacto" },
];

export function FloatingHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className="floating-header">
        <nav className="floating-nav" aria-label="Navegação principal">
          <a className="floating-brand" href="/" aria-label="SofiaBrilha início">
            <Grid2x2PlusIcon aria-hidden="true" size={20} />
            <span>{company.name}</span>
          </a>

          <div className="floating-links">
            {links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="floating-actions">
            <a className="floating-cta" href="/contacto">
              Contactar
            </a>
            <button
              aria-expanded={open}
              aria-label="Abrir menu"
              className="floating-menu-button"
              onClick={() => setOpen(true)}
              type="button"
            >
              <MenuIcon aria-hidden="true" size={18} />
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-sheet ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="mobile-sheet__scrim" onClick={closeMenu} type="button" tabIndex={open ? 0 : -1}>
          <span className="sr-only">Fechar menu</span>
        </button>
        <aside className="mobile-sheet__panel" aria-label="Menu mobile">
          <div className="mobile-sheet__top">
            <a className="floating-brand" href="/" onClick={closeMenu}>
              <Grid2x2PlusIcon aria-hidden="true" size={20} />
              <span>{company.name}</span>
            </a>
            <button aria-label="Fechar menu" className="floating-menu-button" onClick={closeMenu} type="button">
              <XIcon aria-hidden="true" size={18} />
            </button>
          </div>

          <div className="mobile-sheet__links">
            {links.map((link) => (
              <a href={link.href} key={link.label} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-sheet__footer">
            <a className="mobile-secondary" href={`tel:+${company.whatsappNumber}`}>
              Ligar
            </a>
            <a className="floating-cta" href="/contacto" onClick={closeMenu}>
              Contactar
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
