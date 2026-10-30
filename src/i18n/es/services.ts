import type { ServicesCopy } from '../types';

/** Brief de marca §05 (nombres) y §06 "Servicios" (textos). Sin precios (brief web). */
export const services: ServicesCopy = {
  eyebrow: 'Servicios',
  title: 'Elija por dónde empezar.',
  intro: 'Todo lo que hacemos tiene un mismo objetivo: que más personas conozcan su negocio y lo elijan.',
  recommended: 'Recomendado',
  individualTitle: 'Servicios individuales',
  benefitsLabel: 'Qué incluye',
  conditionsLabel: 'Condiciones',
  wantThis: 'Quiero este servicio',
  addOn: {
    title: '¿Sin tiempo para responder mensajes?',
    body: 'Añada Atención a su comunidad y no pierda ni una consulta.',
    cta: '+ Atención a su comunidad',
  },
  items: {
    redes: {
      name: 'Manejo integral de redes sociales',
      summary: 'Nos encargamos de sus redes de principio a fin, para que usted no tenga que pensar en ellas.',
      benefits: [
        'Estrategia y calendario de contenido cada mes',
        'Fotos, videos y diseños creados para su negocio',
        'Publicación constante en Facebook e Instagram',
        'Reporte mensual en lenguaje claro',
        'Ajustes continuos según lo que da resultados',
      ],
      conditions:
        'Comenzamos con un periodo inicial de 3 meses, el tiempo real que toman las redes en dar resultados. Otras plataformas, como TikTok, se acuerdan según su negocio.',
    },
    anuncios: {
      name: 'Anuncios en redes sociales',
      summary: 'Ponemos su negocio frente a nuevos clientes en su zona, con anuncios que se miden y se ajustan.',
      benefits: [
        'Anuncios diseñados para su objetivo: visitas, mensajes o reservas',
        'Público definido por zona, edad e intereses',
        'Seguimiento y ajustes durante la campaña',
        'Reporte de cuánto costó cada resultado',
      ],
      conditions: 'Cotizamos según su objetivo, el contenido y la duración de la campaña.',
    },
    comunidad: {
      name: 'Atención a su comunidad',
      summary: 'Una persona dedicada a responder comentarios y mensajes en nombre de su negocio.',
      benefits: [
        'Respuestas rápidas con el tono de su marca',
        'Mensajes organizados para que no se pierda ninguna consulta',
        'Clientes que se sienten atendidos y regresan',
      ],
      conditions: 'Disponible como complemento del Manejo integral de redes sociales.',
    },
    produccion: {
      name: 'Producción de contenido',
      summary: '¿Solo necesita fotos, videos o diseños? Los producimos por proyecto.',
      benefits: [
        'Sesiones de fotografía y video en su negocio',
        'Diseño gráfico para redes, menús, promociones y más',
        'Archivos listos para usar donde los necesite',
      ],
      conditions: null,
    },
  },
  closing: {
    title: '¿No sabe cuál elegir?',
    body: 'Cuéntenos de su negocio en una llamada de 30 minutos y le recomendamos por dónde empezar.',
  },
};
