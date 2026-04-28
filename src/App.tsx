import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import {
  advantages,
  company,
  priceOptions,
  services,
  testimonials,
} from "./data";
import { ContactPage } from "./components/ContactPage";
import { FloatingHeader } from "./components/FloatingHeader";
import { Hero } from "./components/Hero";
import { SectionHeader } from "./components/SectionHeader";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
} as const;

const smoothEase = [0.22, 1, 0.36, 1] as const;

function App() {
  const isContactPage = window.location.pathname.replace(/\/$/, "") === "/contacto";

  return (
    <main>
      <FloatingHeader />

      <div className="parallax">
        {isContactPage ? (
          <ContactPage />
        ) : (
          <>
        <Hero />

        <section className="intro-band parallax__group parallax__group--intro">
          <div className="parallax__layer parallax__layer--back band-back" aria-hidden="true" />
          <div className="intro-band__inner parallax__content">
            <span>{company.tagline}</span>
            <p>
              Um serviço pensado para casas reais: limpezas regulares, profundas ou pontuais,
              com contacto simples, rápido e direto antes da marcação.
            </p>
          </div>
        </section>

        <section className="section parallax__group parallax__group--services" id="servicos">
          <div className="parallax__layer parallax__layer--deep soft-depth" aria-hidden="true" />
          <div className="section__inner parallax__content">
            <SectionHeader
              eyebrow="Serviços"
              title="Limpeza com método e sensibilidade"
              description="Escolha o apoio certo para a sua rotina, mudança ou momento em que precisa da casa pronta sem complicações."
            />
            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article className="service-card" key={service.title} {...fadeIn} transition={{ delay: index * 0.06, duration: 0.5, ease: smoothEase }}>
                    <Icon aria-hidden="true" size={25} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section price-section parallax__group parallax__group--prices" id="precos">
          <div className="parallax__layer parallax__layer--back price-back" aria-hidden="true" />
          <div className="section__inner parallax__content">
            <SectionHeader
              eyebrow="Preços"
              title="Serviços com preço simples"
              description="Escolha o tipo de limpeza pretendido. Depois do contacto, a SofiaBrilha confirma a disponibilidade e combina o melhor dia."
            />
            <div className="price-grid">
              {priceOptions.map((option) => (
                <motion.article
                  className={`price-card ${option.featured ? "price-card--featured" : ""}`}
                  key={option.title}
                  {...fadeIn}
                >
                  {option.featured ? <span className="popular">Mais pedido</span> : null}
                  <h3>{option.title}</h3>
                  <strong>{option.price}</strong>
                  <p>{option.detail}</p>
                  <ul>
                    {option.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section split-section parallax__group parallax__group--advantages">
          <div className="parallax__layer parallax__layer--deep advantage-depth" aria-hidden="true" />
          <motion.div className="parallax__content" {...fadeIn}>
            <SectionHeader
              align="left"
              eyebrow="Vantagens"
              title="Porque escolher a SofiaBrilha"
              description="A experiência foi desenhada para ser tão limpa como o resultado: contacto fácil, serviço cuidado e expectativas bem alinhadas."
            />
          </motion.div>
          <div className="advantage-list parallax__content">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <motion.article className="advantage-item" key={advantage.title} {...fadeIn}>
                  <Icon aria-hidden="true" size={22} />
                  <div>
                    <h3>{advantage.title}</h3>
                    <p>{advantage.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section testimonial-section parallax__group parallax__group--testimonials">
          <div className="parallax__layer parallax__layer--fore quote-fore" aria-hidden="true" />
          <div className="section__inner parallax__content">
            <SectionHeader
              eyebrow="Testemunhos"
              title="Clientes que respiraram fundo ao chegar a casa"
              description="Opiniões fictícias mas realistas, pensadas para refletir o tipo de confiança que a marca quer transmitir."
            />
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => {
                const Rating = testimonial.rating;
                return (
                  <motion.article className="testimonial-card" key={testimonial.name} {...fadeIn}>
                    <Quote aria-hidden="true" size={24} />
                    <p>{testimonial.quote}</p>
                    <div className="rating" aria-label="Cinco estrelas">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Rating aria-hidden="true" fill="currentColor" key={index} size={15} />
                      ))}
                    </div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <footer className="parallax__group parallax__group--footer">
          <div className="footer__inner parallax__content">
            <img src="/sofiabrilha-logo.png" alt="" aria-hidden="true" />
            <span>© {new Date().getFullYear()} {company.name}. Limpeza de casas.</span>
          </div>
        </footer>
          </>
        )}
      </div>
    </main>
  );
}

export default App;
