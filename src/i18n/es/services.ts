import type { ServicesCopy } from '../types';

/** Brief de marca §05 (nombres) y §06 "Servicios" (textos). Sin precios (brief web). */
export const services: ServicesCopy = {
  eyebrow: 'Servicios',
  title: 'Elige por dónde empezar.',
  intro: 'Todo lo que hacemos tiene un mismo objetivo: que más personas conozcan tu negocio y lo elijan.',
  recommended: 'Recomendado',
  individualTitle: 'Servicios individuales',
  benefitsLabel: 'Qué incluye',
  conditionsLabel: 'Condiciones',
  wantThis: 'Quiero este servicio',
  addOn: {
    title: '¿Sin tiempo para responder mensajes?',
    body: 'Añade Atención a tu comunidad y no pierdas ni una consulta.',
    cta: '+ Atención a tu comunidad',
  },
  items: {
    redes: {
      name: 'Manejo integral de redes sociales',
      summary: 'Nos encargamos de tus redes de principio a fin, para que tú no tengas que pensar en ellas.',
      benefits: [
        'Estrategia y calendario de contenido cada mes',
        'Fotos, videos y diseños creados para tu negocio',
        'Publicación constante en Facebook e Instagram',
        'Reporte mensual en lenguaje claro',
        'Ajustes continuos según lo que da resultados',
      ],
      conditions:
        'Comenzamos con un periodo inicial de 3 meses, el tiempo real que toman las redes en dar resultados. Otras plataformas, como TikTok, se acuerdan según tu negocio.',
    },
    anuncios: {
      name: 'Anuncios en redes sociales',
      summary: 'Ponemos tu negocio frente a nuevos clientes en tu zona, con anuncios que se miden y se ajustan.',
      benefits: [
        'Anuncios diseñados para tu objetivo: visitas, mensajes o reservas',
        'Público definido por zona, edad e intereses',
        'Seguimiento y ajustes durante la campaña',
        'Reporte de cuánto costó cada resultado',
      ],
      conditions: 'Cotizamos según tu objetivo, el contenido y la duración de la campaña.',
    },
    comunidad: {
      name: 'Atención a tu comunidad',
      summary: 'Una persona dedicada a responder comentarios y mensajes en nombre de tu negocio.',
      benefits: [
        'Respuestas rápidas con el tono de tu marca',
        'Mensajes organizados para que no se pierda ninguna consulta',
        'Clientes que se sienten atendidos y regresan',
      ],
      conditions: 'Disponible como complemento del Manejo integral de redes sociales.',
    },
    produccion: {
      name: 'Producción de contenido',
      summary: '¿Solo necesitas fotos, videos o diseños? Los producimos por proyecto.',
      benefits: [
        'Sesiones de fotografía y video en tu negocio',
        'Diseño gráfico para redes, menús, promociones y más',
        'Archivos listos para usar donde los necesites',
      ],
      conditions: null,
    },
  },
  closing: {
    title: '¿No sabes cuál elegir?',
    body: 'Cuéntanos de tu negocio en una llamada de 30 minutos y te recomendamos por dónde empezar.',
  },
};
