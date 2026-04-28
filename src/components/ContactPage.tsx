import { Facebook, Mail, Phone } from "lucide-react";
import { company } from "../data";
import { ContactForm } from "./ContactForm";

export function ContactPage() {
  return (
    <section className="contact-section contact-section--standalone parallax__group parallax__group--contact">
      <div className="parallax__layer parallax__layer--back contact-back" aria-hidden="true" />
      <div className="contact-panel contact-panel--compact parallax__content">
        <div className="contact-copy contact-copy--compact">
          <span className="contact-kicker">Contacto rápido</span>
          <h1>Fale com a SofiaBrilha</h1>
          <p>
            Preencha só o essencial. A mensagem abre pronta no WhatsApp para combinar o
            serviço e a melhor data.
          </p>

          <div className="contact-lines contact-lines--compact">
            <a href={`tel:+${company.whatsappNumber}`}>
              <Phone aria-hidden="true" size={17} />
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail aria-hidden="true" size={17} />
              {company.email}
            </a>
            <span>
              <Facebook aria-hidden="true" size={17} />
              {company.facebook}
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
