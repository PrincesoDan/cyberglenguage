import type { CtaCopy, FooterCopy, NavCopy, NotFoundCopy, SiteCopy, WhatsAppCopy } from '../types';
import type { RoutePage } from '../../routes';

/** Textos globales. Botones y mensajes: brief web, "Textos de botones y mensajes". */
export const site: SiteCopy = {
  brandName: 'Cyber Positioning',
  geoBrandName: 'CyberLanguage',
  geoSeal: 'CyberLanguage · por Cyber Positioning',
  hours: 'Lunes a viernes, 9:00 a.m. – 5:00 p.m. (hora de Puerto Rico)',
  pendingLabel: 'Pendiente',
};

export const nav: NavCopy = {
  primaryLabel: 'Navegación principal',
  pages: {
    home: 'Inicio',
    services: 'Servicios',
    work: 'Nuestro trabajo',
    about: 'Nosotros',
    geo: 'GEO',
    contact: 'Contacto',
  },
  scheduleCta: 'Agendar',
  languageSwitchLabel: 'View this page in English',
  menuOpen: 'Abrir menú',
  menuClose: 'Cerrar menú',
};

export const cta: CtaCopy = {
  schedule: 'Agenda una llamada de 30 min',
  whatsapp: 'Escríbenos por WhatsApp',
  call: 'Llámanos',
  schedulingPending: 'Enlace de agenda pendiente de configurar',
};

export const whatsapp: WhatsAppCopy = {
  genericMessage: 'Hola, vengo de la web de Cyber Positioning y quiero información.',
  serviceMessage: 'Hola, vengo de la web de Cyber Positioning y quiero información sobre {service}.',
  conjunction: ' y ',
  fabLabel: 'Escríbenos por WhatsApp',
};

export const footer: FooterCopy = {
  tagline: 'Tú enfócate en tu pasión. Nosotros hacemos que el mundo la vea.',
  pagesTitle: 'Páginas',
  contactTitle: 'Contacto',
  geoNote: 'CyberLanguage es la línea de visibilidad en IA (GEO) de Cyber Positioning.',
  privacy: 'Política de privacidad',
  rights: 'Todos los derechos reservados.',
};

export const meta: Record<RoutePage, string> = {
  home: 'Cyber Positioning — Marketing digital para negocios locales',
  services: 'Servicios — Cyber Positioning',
  work: 'Nuestro trabajo — Cyber Positioning',
  about: 'Nosotros — Cyber Positioning',
  contact: 'Contacto — Cyber Positioning',
  links: 'Cyber Positioning — Links',
  geo: 'CyberLanguage — Visibilidad en IA por Cyber Positioning',
  privacy: 'Política de privacidad — Cyber Positioning',
  notFound: 'Página no encontrada — Cyber Positioning',
};

export const notFound: NotFoundCopy = {
  title: 'Esta página no existe.',
  body: 'Puede que el enlace esté mal escrito o que la página se haya movido.',
  cta: 'Volver a servicios',
};
