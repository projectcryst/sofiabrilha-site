export function getGreeting(date = new Date()) {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "Bom dia";
  }

  if (hour >= 12 && hour < 20) {
    return "Boa tarde";
  }

  return "Boa noite";
}

export function buildWhatsAppUrl({
  phone,
  name,
  service,
  email,
  message,
  acceptsPromotions,
}: {
  phone: string;
  name: string;
  service: string;
  email: string;
  message?: string;
  acceptsPromotions: boolean;
}) {
  const baseMessage = `${getGreeting()}, chamo-me ${name.trim()}. Tenho interesse no serviço de ${service} da SofiaBrilha. Gostaria de saber a disponibilidade e combinar qual o melhor dia para realizar este serviço. Obrigado/a.`;
  const emailLine = `\n\nO meu email é ${email.trim()}.`;
  const customLine = message?.trim() ? `\nMensagem: ${message.trim()}` : "";
  const promotionsLine = acceptsPromotions
    ? "\nAceito receber promoções e novidades da SofiaBrilha."
    : "";
  const whatsappMessage = `${baseMessage}${emailLine}${customLine}${promotionsLine}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
