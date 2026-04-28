import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { company, serviceOptions } from "../data";
import { buildWhatsAppUrl, isValidEmail } from "../utils";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
  promotions: boolean;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
  promotions: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    service: false,
  });

  const errors = useMemo(
    () => ({
      firstName: form.firstName.trim().length < 2,
      lastName: form.lastName.trim().length < 2,
      email: !isValidEmail(form.email),
      service: form.service.length === 0,
    }),
    [form.email, form.firstName, form.lastName, form.service],
  );

  const isReady = !errors.firstName && !errors.lastName && !errors.email && !errors.service;

  function showError(field: keyof typeof errors) {
    return (submitted || touched[field]) && errors[field];
  }

  function updateField<Value extends string | boolean>(field: keyof FormState, value: Value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!isReady) {
      return;
    }

    window.location.href = buildWhatsAppUrl({
      phone: company.whatsappNumber,
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      service: form.service,
      message: form.message,
      acceptsPromotions: form.promotions,
    });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-grid">
        <label className="field">
          <span>Nome</span>
          <input
            autoComplete="given-name"
            className={showError("firstName") ? "is-invalid" : ""}
            name="firstName"
            onBlur={() => setTouched((current) => ({ ...current, firstName: true }))}
            onChange={(event) => updateField("firstName", event.target.value)}
            placeholder="Nome"
            type="text"
            value={form.firstName}
          />
          {showError("firstName") ? <small>Indique o seu nome.</small> : null}
        </label>

        <label className="field">
          <span>Apelido</span>
          <input
            autoComplete="family-name"
            className={showError("lastName") ? "is-invalid" : ""}
            name="lastName"
            onBlur={() => setTouched((current) => ({ ...current, lastName: true }))}
            onChange={(event) => updateField("lastName", event.target.value)}
            placeholder="Apelido"
            type="text"
            value={form.lastName}
          />
          {showError("lastName") ? <small>Indique o seu apelido.</small> : null}
        </label>
      </div>

      <div className="field-grid">
        <label className="field">
          <span>Email</span>
          <input
            autoComplete="email"
            className={showError("email") ? "is-invalid" : ""}
            name="email"
            onBlur={() => setTouched((current) => ({ ...current, email: true }))}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="email@exemplo.pt"
            type="email"
            value={form.email}
          />
          {showError("email") ? <small>Use um email válido.</small> : null}
        </label>

        <label className="field">
          <span>Serviço</span>
          <select
            className={showError("service") ? "is-invalid" : ""}
            name="service"
            onBlur={() => setTouched((current) => ({ ...current, service: true }))}
            onChange={(event) => updateField("service", event.target.value)}
            value={form.service}
          >
            <option value="">Escolha o serviço</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {showError("service") ? <small>Escolha um serviço.</small> : null}
        </label>
      </div>

      <label className="field">
        <span>Mensagem</span>
        <textarea
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Ex.: Gostava de combinar uma limpeza para a próxima semana."
          rows={4}
          value={form.message}
        />
      </label>

      <label className="checkbox-row">
        <input
          checked={form.promotions}
          name="promotions"
          onChange={(event) => updateField("promotions", event.target.checked)}
          type="checkbox"
        />
        <span>
          <Check aria-hidden="true" size={16} />
          Aceito receber promoções e novidades.
        </span>
      </label>

      <button className="whatsapp-button" disabled={!isReady} type="submit">
        <MessageCircle aria-hidden="true" size={20} />
        Contactar por WhatsApp
        <ArrowRight aria-hidden="true" size={18} />
      </button>

      <p className="form-note">
        O botão fica ativo quando os campos obrigatórios estiverem preenchidos.
      </p>
    </form>
  );
}
