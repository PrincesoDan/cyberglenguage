import type { Copy } from './types';

/**
 * Copy en español. Casi todo el texto sale del brief
 * (`info/Briefs_ Auctela Advisory.md`); cada bloque indica su sección de origen.
 * El brief autoriza explícitamente reemplazar el nombre de trabajo "Auctela"
 * ("CÓMO USAR ESTE DOCUMENTO"): la marca definitiva es CyberLanguage.
 * Donde el brief solo entrega el nombre de un ítem, la bajada se deriva de otra
 * sección del mismo documento y queda marcada con TODO.
 */
export const es: Copy = {
  brand: {
    name: 'CyberLanguage',
    descriptor: 'Consultoría de visibilidad en IA · GEO / AEO',
  },

  nav: {
    problem: 'El problema',
    method: 'Cómo trabajamos',
    services: 'Servicios',
    contact: 'Contacto',
    scheduleCta: 'Agenda una llamada',
    languageSwitchLabel: 'Cambiar idioma a inglés',
  },

  hero: {
    // §01 — Descriptor de marca, dentro de la píldora del hero.
    badge: 'Consultoría de visibilidad en IA · GEO / AEO',
    // Línea 1: entrada a la acción del formulario. Línea 2: tagline versión ES del brief §01.
    titleLine1: 'Pega tu URL.',
    titleLine2: 'Que la IA te recomiende.',
    // §01 — Propuesta de valor de una línea.
    valueProp:
      'Tus clientes ya no le piden recomendaciones a un amigo — se las piden a la IA. Hacemos que, cuando pregunten por lo que tú ofreces, la IA te recomiende a ti.',
    secondaryCta: 'Agenda una llamada',
  },

  audit: {
    cardLabel: 'cyberlanguage · auditoría-geo',

    fields: {
      url: {
        label: 'URL de tu sitio',
        placeholder: 'ej. tusitio.com',
        error: 'Escribe una dirección válida, por ejemplo tusitio.com',
      },
      email: {
        label: 'Email',
        placeholder: 'nombre@empresa.com',
        error: 'Escribe un email válido',
      },
      organization: {
        label: 'Organización',
        placeholder: 'Nombre de tu empresa',
        error: 'Escribe el nombre de tu organización',
      },
    },

    submit: 'Analizar mi sitio',

    // §4.4 y §8 — Consentimiento explícito y enlace a política de privacidad.
    consent: 'Acepto que se use mi email para enviarme el reporte.',
    privacyLink: 'Política de privacidad',

    analyzingTitle: 'Analizando tu sitio',
    // §5.2 — Proceso visible, textos literales del brief.
    steps: [
      'Revisando tu página principal…',
      'Buscando datos estructurados…',
      'Evaluando si tu contenido es citable…',
    ],
    demoNotice:
      'Demo de interfaz: este resultado es de ejemplo y no corresponde a un análisis real de tu sitio.',
    scoreLabel: 'Puntaje GEO',
    // §5.3 — Teaser bloqueado.
    teaser: 'Encontramos 3 problemas críticos y 7 oportunidades.',
    lockedTitle: 'El detalle está bloqueado',
    lockedBody:
      'La auditoría completa, con los hallazgos y las recomendaciones priorizadas, aún no está conectada. Mientras tanto, conversémoslo en una llamada.',
    reset: 'Analizar otro sitio',
  },

  problem: {
    eyebrow: 'El problema',
    title: 'La recomendación cambió de manos.',
    // §01 — Posicionamiento.
    positioning:
      'CyberLanguage es una consultoría que ayuda a marcas a aparecer y ser citadas dentro de asistentes de IA (ChatGPT, Claude, Perplexity, Gemini) mediante GEO y AEO. La IA es la herramienta y el canal; el producto es el criterio experto. No somos un software: somos asesoría.',
    // §01 — Mensajes clave 1 y 2.
    messages: [
      {
        title: 'La mejor recomendación ya no viene de un amigo, viene de la IA.',
        body: 'Tú siempre supiste que una recomendación de confianza vende más que cualquier campaña. Hoy esa recomendación la da ChatGPT — y le habla directo a tu cliente en el momento en que está decidiendo.',
      },
      {
        title: 'Que la IA te nombre es la nueva mejor ubicación.',
        body: 'No llegas cuando el cliente ya eligió; llegas dentro de la pregunta, cuando todavía está decidiendo a quién elegir. Ahí es donde se gana o se pierde la reserva.',
      },
    ],
  },

  method: {
    eyebrow: 'Cómo trabajamos',
    title: 'Tres pasos, sin humo.',
    // §06 — El brief entrega los tres pasos como EJEMPLO ("ej. Auditar → Optimizar → Medir citas").
    // TODO: confirmar con la consultora los nombres y las bajadas definitivas de la metodología.
    steps: [
      {
        title: 'Auditar',
        // Derivado de §4.1 y §6.1 del brief de desarrollo.
        body: 'Revisamos tu sitio completo: SEO técnico, estructura de contenido y señales GEO. El resultado es un puntaje de 0 a 100 con sub-puntajes por categoría.',
      },
      {
        title: 'Optimizar',
        // Derivado de §01, mensaje clave 3.
        body: 'Trabajamos contenido, reputación y datos estructurados para enseñarle a la IA por qué eres la respuesta correcta. Hecho por expertos, no por un plugin.',
      },
      {
        title: 'Medir citas',
        // Derivado de §06 (servicios) y §10 (el brief marca la verificación en vivo como v2).
        body: 'Seguimos si los asistentes de IA te están nombrando y ajustamos el trabajo según lo que muestren los resultados.',
      },
    ],
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Qué recibes.',
    // §06 — Los cuatro nombres son del brief. Las bajadas se derivan de §4.1 y §6.1
    // del brief de desarrollo. TODO: reemplazar por el copy final de la consultora.
    items: [
      {
        title: 'Auditoría de visibilidad IA',
        body: 'Puntaje de 0 a 100 con sub-puntajes por categoría y recomendaciones priorizadas, en lenguaje claro y sin jerga.',
      },
      {
        title: 'Contenido',
        body: 'Contenido claro y citable: formato de preguntas y respuestas, densidad factual y señales de autoría y autoridad (E-E-A-T).',
      },
      {
        title: 'Datos estructurados',
        body: 'Schema.org, HTML semántico, sitemap, robots.txt y archivo llms.txt: los cimientos para que la IA te encuentre y te entienda.',
      },
      {
        title: 'Seguimiento de citas',
        body: 'Revisamos si los asistentes de IA ya te están citando y cómo evoluciona esa presencia en el tiempo.',
      },
    ],
  },

  // §01 — Mensaje clave 3.
  strategy: {
    title: 'No es una herramienta, es estrategia.',
    body: 'Que la IA te recomiende no es suerte ni un truco que instalas. Es contenido, reputación y datos estructurados que le enseñan a la IA por qué eres la respuesta correcta — hecho por expertos, no por un plugin.',
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Conversemos sobre tu visibilidad en IA.',
    body: 'Media hora para revisar tu caso y decirte, sin vueltas, qué se puede hacer.',
    cta: 'Agenda una llamada',
    // Se muestra mientras SCHEDULING_URL siga vacío (ver src/config.ts).
    schedulingPending: 'Enlace de agenda pendiente de configurar.',
  },

  footer: {
    descriptor: 'Consultoría de visibilidad en IA · GEO / AEO',
    rights: 'Todos los derechos reservados.',
  },
};
