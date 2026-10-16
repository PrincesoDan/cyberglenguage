import type { ServiceId } from '../data/services';
import type { NavPageId, RoutePage } from '../routes';

/** Bloque de mensaje con titular y desarrollo. */
export interface CopyBlock {
  title: string;
  body: string;
}

/**
 * Una sección de la política de privacidad. `summary` es la versión en
 * lenguaje simple y `body` el detalle (voz de marca: clara, sin jerga).
 */
export interface PolicySection {
  title: string;
  summary: string;
  body: string[];
}

export interface SiteCopy {
  brandName: string;
  geoBrandName: string;
  /** "CyberLanguage · por Cyber Positioning" (spec §6, GEO). */
  geoSeal: string;
  hours: string;
  /** Prefijo de los avisos de dato pendiente. */
  pendingLabel: string;
}

export interface NavCopy {
  primaryLabel: string;
  pages: Record<NavPageId, string>;
  scheduleCta: string;
  /** Texto accesible del switch, en el idioma de destino. */
  languageSwitchLabel: string;
  menuOpen: string;
  menuClose: string;
}

export interface CtaCopy {
  schedule: string;
  whatsapp: string;
  call: string;
  schedulingPending: string;
}

export interface WhatsAppCopy {
  genericMessage: string;
  /** Plantilla con `{service}`. */
  serviceMessage: string;
  /** " y " / " and ", para unir dos servicios. */
  conjunction: string;
  fabLabel: string;
}

export interface FooterCopy {
  tagline: string;
  pagesTitle: string;
  contactTitle: string;
  geoNote: string;
  privacy: string;
  rights: string;
}

export interface NotFoundCopy {
  title: string;
  body: string;
  cta: string;
}

export interface GeoCopy {
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    valueProp: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    positioning: string;
    messages: CopyBlock[];
  };
  method: {
    eyebrow: string;
    title: string;
    steps: CopyBlock[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: CopyBlock[];
  };
  strategy: CopyBlock;
  closing: {
    eyebrow: string;
    title: string;
    body: string;
  };
}

export interface PrivacyCopy {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  controllerPending: string;
  contactPending: string;
  languageNote: string;
  sections: PolicySection[];
  backToSite: string;
}

export interface ServiceCopy {
  name: string;
  /** Descripción corta: texto del "recuadro hover" del brief de marca. */
  summary: string;
  benefits: string[];
  conditions: string | null;
}

export interface ServicesCopy {
  eyebrow: string;
  title: string;
  intro: string;
  recommended: string;
  individualTitle: string;
  benefitsLabel: string;
  conditionsLabel: string;
  wantThis: string;
  addOn: {
    title: string;
    body: string;
    cta: string;
  };
  items: Record<ServiceId, ServiceCopy>;
  closing: {
    title: string;
    body: string;
  };
}

/**
 * Forma del copy del sitio. `es/index.ts` y `en/index.ts` la implementan, así
 * que agregar una clave obliga a traducirla en ambos idiomas.
 */
export interface Copy {
  site: SiteCopy;
  nav: NavCopy;
  cta: CtaCopy;
  whatsapp: WhatsAppCopy;
  footer: FooterCopy;
  /** <title> por página (spec §7). */
  meta: Record<RoutePage, string>;
  notFound: NotFoundCopy;
  services: ServicesCopy;
  geo: GeoCopy;
  privacy: PrivacyCopy;
}
