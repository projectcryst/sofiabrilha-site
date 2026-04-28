import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Sparkles } from "lucide-react";
import { company } from "../data";

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["limpa", "brilhante", "fresca", "leve", "cuidada"],
    [],
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTitleNumber((current) => (current === titles.length - 1 ? 0 : current + 1));
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="hero hero--animated parallax__group parallax__group--hero" id="inicio">
      <div className="parallax__layer parallax__layer--deep hero-depth" aria-hidden="true" />
      <div className="parallax__layer parallax__layer--back hero-back" aria-hidden="true" />
      <div className="parallax__layer parallax__layer--fore hero-fore" aria-hidden="true" />

      <div className="hero-animated__inner parallax__content">
        <a className="hero-animated__pill" href="#precos">
          <Sparkles aria-hidden="true" size={16} />
          Ver serviços e preços
          <MoveRight aria-hidden="true" size={16} />
        </a>

        <div className="hero-animated__copy">
          <h1>
            <span>SofiaBrilha deixa a sua casa</span>
            <span className="hero-animated__word">
              {titles.map((title, index) => (
                <motion.span
                  animate={
                    titleNumber === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: titleNumber > index ? -150 : 150 }
                  }
                  className="hero-animated__word-item"
                  initial={{ opacity: 0, y: -100 }}
                  key={title}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p>
            Limpeza de casas simples, cuidada e direta. Escolha o serviço, envie a
            mensagem pelo WhatsApp e combine a melhor data sem rodeios.
          </p>
        </div>

        <div className="hero-animated__actions">
          <a className="secondary-action" href={`tel:+${company.whatsappNumber}`}>
            Ligar agora
            <PhoneCall aria-hidden="true" size={18} />
          </a>
          <a className="primary-action" href="/contacto">
            Contactar no WhatsApp
            <MoveRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
