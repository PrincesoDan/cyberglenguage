/** Bloque de mensaje con titular y desarrollo. */
export interface CopyBlock {
  title: string;
  body: string;
}

/** Etiqueta, placeholder y mensaje de error de un campo del formulario. */
export interface FieldCopy {
  label: string;
  placeholder: string;
  error: string;
}

/**
 * Forma del copy del sitio. `es.ts` y `en.ts` implementan esta interfaz,
 * de modo que agregar una clave obliga a traducirla en ambos idiomas.
 */
export interface Copy {
  brand: {
    name: string;
    descriptor: string;
  };
  nav: {
    problem: string;
    method: string;
    services: string;
    contact: string;
    scheduleCta: string;
    languageSwitchLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    valueProp: string;
    secondaryCta: string;
  };
  audit: {
    cardLabel: string;
    fields: {
      url: FieldCopy;
      email: FieldCopy;
      organization: FieldCopy;
    };
    submit: string;
    consent: string;
    privacyLink: string;
    analyzingTitle: string;
    steps: string[];
    demoNotice: string;
    scoreLabel: string;
    teaser: string;
    lockedTitle: string;
    lockedBody: string;
    reset: string;
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
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    schedulingPending: string;
  };
  footer: {
    descriptor: string;
    rights: string;
  };
}
