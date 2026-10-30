import type { WorkCopy } from '../types';

/**
 * "Nuestro trabajo" según la propuesta "Cómo trabajamos" del equipo
 * (2026-10-30): todavía no hay casos pasados, así que la página muestra el
 * cómo — proceso y formato del reporte — hasta que lleguen resultados.
 */
export const work: WorkCopy = {
  eyebrow: 'Cómo trabajamos',
  title: 'Lo que hacemos, a la vista.',
  lead: 'Estrategia, contenido y números claros. Le mostramos cada paso y lo que recibe en cada uno, sin promesas infladas.',
  processTitle: 'De la primera llamada al reporte del mes',
  processBody:
    'Seis pasos. Los dos últimos se repiten cada mes para que el contenido mejore con datos, no con corazonadas.',
  monthlyTag: 'Cada mes',
  deliverableLabel: 'Qué recibe',
  steps: {
    diagnosis: {
      title: 'Diagnóstico',
      body: 'Revisamos sus redes actuales, lo que vende, su competencia y quién le compra.',
      deliverable: 'un diagnóstico con lo que funciona, lo que no y por dónde empezar.',
    },
    strategy: {
      title: 'Estrategia',
      body: 'Definimos qué quiere lograr (más ventas, más clientes, más visibilidad), de qué vamos a hablar y con qué tono.',
      deliverable: 'un plan de contenido que usted aprueba antes de producir nada.',
    },
    production: {
      title: 'Producción',
      body: 'Diseñamos las piezas, escribimos los textos y coordinamos sesiones de fotos y video.',
      deliverable: 'un calendario con las piezas listas para su aprobación.',
    },
    publishing: {
      title: 'Publicación',
      body: 'Publicamos en los días y horarios acordados y atendemos comentarios y mensajes de sus clientes.',
      deliverable: 'sus redes activas sin que tenga que pensar en ellas.',
    },
    measurement: {
      title: 'Medición',
      body: 'Revisamos qué publicaciones atrajeron gente, cuáles generaron mensajes o ventas y cuáles no.',
      deliverable: 'un reporte mensual en lenguaje claro, sin tecnicismos.',
    },
    adjustment: {
      title: 'Ajuste',
      body: 'Usamos esos datos para decidir qué repetir y qué cambiar el mes siguiente.',
      deliverable: 'una reunión de revisión y el plan del próximo mes.',
    },
  },
  reportTitle: 'Qué recibe cada mes',
  reportBody: 'Un reporte de una página, en español claro.',
  reportIncludes: [
    'Qué publicamos y cómo le fue a cada pieza',
    'Cuánta gente lo vio, le escribió o hizo clic',
    'Qué aprendimos y qué cambia el próximo mes',
  ],
  reportSample: {
    heading: 'Marca Ejemplo · Reporte de marzo',
    badge: 'Datos ilustrativos',
    metrics: [
      { label: 'Alcance', value: '18,400', change: '+22% vs. febrero' },
      { label: 'Interacciones', value: '1,250', change: '+15%' },
      { label: 'Seguidores nuevos', value: '+310', change: '+9%' },
      { label: 'Mensajes', value: '86', change: '+31%' },
    ],
    chartLabel: 'Alcance por semana, datos ilustrativos',
    weekLabels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    bestTitle: 'Lo que mejor funcionó',
    best: ['Reel detrás de cámaras (sem 4)', 'Carrusel de preguntas frecuentes'],
    nextTitle: 'Próximo mes',
    next: ['2 reels más por semana', 'Responder mensajes en menos de 2 h'],
    footnote: 'Ejemplo con datos ilustrativos. No corresponde a un cliente real.',
  },
  resultsTitle: 'Resultados',
  resultsBody: 'Casos reales: el reto, lo que hicimos y lo que cambió.',
  challengeLabel: 'El reto',
  whatWeDidLabel: 'Lo que hicimos',
  resultLabel: 'El resultado',
  closingTitle: '¿Cómo se vería esto en su marca?',
  closingBody: 'Cuéntenos de su negocio y le decimos por dónde empezaríamos.',
};
