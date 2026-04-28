import {
  BadgeCheck,
  CalendarCheck,
  Clock3,
  Home,
  KeyRound,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const company = {
  name: "SofiaBrilha",
  tagline: "A sua casa limpa, o seu dia mais leve.",
  serviceLine: "Limpeza de casas",
  phoneDisplay: "+351 916 237 005",
  whatsappNumber: "351916237005",
  email: "sofiarodrigues453@gmail.com",
  facebook: "SofiaBrilha",
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Limpeza regular",
    description: "Rotina semanal ou quinzenal para manter a casa impecável, fresca e organizada.",
    icon: Home,
  },
  {
    title: "Limpeza profunda",
    description: "Intervenção detalhada em cozinhas, casas de banho, pavimentos e zonas difíceis.",
    icon: Sparkles,
  },
  {
    title: "Pré ou pós-mudança",
    description: "Preparação da casa antes de entrar ou limpeza completa depois de sair.",
    icon: KeyRound,
  },
  {
    title: "Manutenção pontual",
    description: "Apoio flexível para visitas, épocas especiais ou quando a agenda aperta.",
    icon: SprayCan,
  },
];

export const priceOptions = [
  {
    title: "Limpeza normal",
    price: "8,50€",
    detail: "Serviço de limpeza regular para manutenção da casa",
    items: ["Preço por hora", "Ideal para rotina semanal ou quinzenal", "Data combinada por WhatsApp"],
  },
  {
    title: "Limpezas grandes",
    price: "9€",
    detail: "Limpeza mais completa para casas que precisam de maior atenção",
    items: ["Preço por hora", "Indicado para limpezas profundas", "Duração ajustada ao espaço"],
    featured: true,
  },
  {
    title: "Tetos e paredes",
    price: "10€",
    detail: "Limpeza específica de tetos e paredes",
    items: ["Preço por hora", "Para zonas altas ou mais delicadas", "Serviço combinado previamente"],
  },
];

export const advantages = [
  {
    title: "Cuidado de confiança",
    description: "Serviço próximo, discreto e feito com atenção ao que cada casa precisa.",
    icon: ShieldCheck,
  },
  {
    title: "Marcação simples",
    description: "Pedido direto por WhatsApp com mensagem pronta e resposta rápida.",
    icon: CalendarCheck,
  },
  {
    title: "Detalhe visível",
    description: "Acabamentos limpos, aromas frescos e pequenas zonas que fazem diferença.",
    icon: BadgeCheck,
  },
  {
    title: "Pontualidade",
    description: "Horários combinados com clareza para encaixar melhor na rotina.",
    icon: Clock3,
  },
];

export const testimonials = [
  {
    name: "Marta Silva",
    location: "Odivelas",
    quote:
      "A casa ficou mesmo leve. A Sofia teve muito cuidado com os detalhes da cozinha e deixou tudo impecável.",
    rating: Star,
  },
  {
    name: "João Pereira",
    location: "Lisboa",
    quote:
      "Contratei para uma limpeza pós-mudança e correu lindamente. Pontual, organizada e muito profissional.",
    rating: Star,
  },
  {
    name: "Inês Carvalho",
    location: "Loures",
    quote:
      "Já marquei limpeza regular. O contacto por WhatsApp é prático e o serviço transmite confiança.",
    rating: Star,
  },
];

export const serviceOptions = [
  "Limpeza normal",
  "Limpezas grandes",
  "Limpeza de tetos e paredes",
  "Pedido personalizado",
];

export const heroStats = [
  { value: "24h", label: "resposta habitual" },
  { value: "1 min", label: "contacto direto" },
  { value: "4+", label: "tipos de serviço" },
];

export const ambience = [
  { label: "Fresco", icon: Waves },
  { label: "Discreto", icon: ShieldCheck },
  { label: "Detalhado", icon: Sparkles },
];
