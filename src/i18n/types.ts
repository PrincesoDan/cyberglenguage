/** Bloque de mensaje con titular y desarrollo. */
export interface CopyBlock {
  title: string;
  body: string;
}

/**
 * Una sección de la política de privacidad.
 *
 * `summary` es la versión en lenguaje simple y `body` el detalle. El brief §3
 * exige lenguaje claro y sin jerga: la política cumple igual, pero se puede
 * leer sin ser abogado.
 */
export interface PolicySection {
  title: string;
  summary: string;
  body: string[];
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
    /** Consentimiento para entregar el reporte: obligatorio, sin él no hay envío. */
    consent: string;
    /**
     * Consentimiento separado para la secuencia de emails (Ley 21.719: cada
     * finalidad necesita el suyo). Opcional y desmarcado por defecto.
     */
    marketingConsent: string;
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
    privacy: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Fecha de última actualización, ya formateada en el idioma. */
    lastUpdated: string;
    /** Aviso de que falta constituir la sociedad / definir el responsable. */
    controllerPending: string;
    /** Aviso de que falta el buzón para ejercer derechos (config.CONTACT_EMAIL). */
    contactPending: string;
    /** Nota de que la versión en español es la que prevalece. */
    languageNote: string;
    sections: PolicySection[];
    backToSite: string;
  };
}
