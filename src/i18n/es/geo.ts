import type { GeoCopy } from '../types';

/**
 * Copy de la línea GEO (CyberLanguage), trasladado tal cual desde la landing
 * anterior (`src/i18n/es.ts` en 55a7e4e). Los TODO de metodología y servicios
 * siguen vigentes.
 */
export const geo: GeoCopy = {
  hero: {
    // §01 — Descriptor de marca, dentro de la píldora del hero.
    badge: 'Consultoría de visibilidad en IA · GEO / AEO',
    // Línea 1: derivada de la propuesta de valor (el formulario de URL salió del sitio). Línea 2: tagline ES del brief §01.
    titleLine1: 'Tus clientes le preguntan a la IA.',
    titleLine2: 'Que la IA te recomiende.',
    // §01 — Propuesta de valor de una línea.
    valueProp:
      'Tus clientes ya no le piden recomendaciones a un amigo — se las piden a la IA. Hacemos que, cuando pregunten por lo que tú ofreces, la IA te recomiende a ti.',
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

  closing: {
    eyebrow: 'Contacto',
    title: 'Conversemos sobre tu visibilidad en IA.',
    body: 'Media hora para revisar tu caso y decirte, sin vueltas, qué se puede hacer.',
    // Se muestra mientras SCHEDULING_URL siga vacío (ver src/config.ts).
  },
};
