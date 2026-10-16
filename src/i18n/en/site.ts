import type { CtaCopy, FooterCopy, NavCopy, NotFoundCopy, SiteCopy, WhatsAppCopy } from '../types';
import type { RoutePage } from '../../routes';

/** Global copy. Buttons and messages: web brief, "Textos de botones y mensajes". */
export const site: SiteCopy = {
  brandName: 'Cyber Positioning',
  geoBrandName: 'CyberLanguage',
  geoSeal: 'CyberLanguage · by Cyber Positioning',
  hours: 'Monday to Friday, 9:00 a.m. – 5:00 p.m. (Puerto Rico time)',
  pendingLabel: 'Pending',
};

export const nav: NavCopy = {
  primaryLabel: 'Main navigation',
  pages: {
    home: 'Home',
    services: 'Services',
    work: 'Our work',
    about: 'About',
    geo: 'GEO',
    contact: 'Contact',
  },
  scheduleCta: 'Book a call',
  languageSwitchLabel: 'Ver esta página en español',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
};

export const cta: CtaCopy = {
  schedule: 'Book a 30-min call',
  whatsapp: 'Message us on WhatsApp',
  call: 'Call us',
  schedulingPending: 'Scheduling link not configured yet',
};

export const whatsapp: WhatsAppCopy = {
  genericMessage: "Hi, I found Cyber Positioning online and I'd like some info.",
  serviceMessage: "Hi, I found Cyber Positioning online and I'd like info about {service}.",
  conjunction: ' and ',
  fabLabel: 'Message us on WhatsApp',
};

export const footer: FooterCopy = {
  tagline: 'You focus on your passion. We make sure the world sees it.',
  pagesTitle: 'Pages',
  contactTitle: 'Contact',
  geoNote: "CyberLanguage is Cyber Positioning's AI visibility (GEO) practice.",
  privacy: 'Privacy policy',
  rights: 'All rights reserved.',
};

export const meta: Record<RoutePage, string> = {
  home: 'Cyber Positioning — Digital marketing for local businesses',
  services: 'Services — Cyber Positioning',
  work: 'Our work — Cyber Positioning',
  about: 'About — Cyber Positioning',
  contact: 'Contact — Cyber Positioning',
  links: 'Cyber Positioning — Links',
  geo: 'CyberLanguage — AI visibility by Cyber Positioning',
  privacy: 'Privacy policy — Cyber Positioning',
  notFound: 'Page not found — Cyber Positioning',
};

export const notFound: NotFoundCopy = {
  title: "This page doesn't exist.",
  body: 'The link may be mistyped, or the page may have moved.',
  cta: 'Back to services',
};
