import type { AboutCopy } from '../types';

/**
 * Brief de marca §06 "Nosotros". La historia es la plantilla del brief: el
 * hueco que solo puede llenar el equipo queda entre corchetes y se ve como
 * pendiente. "[número]" ya se sabe: son tres socios.
 */
export const about: AboutCopy = {
  eyebrow: 'Nosotros',
  title: 'Detrás de cada publicación hay un equipo que entiende tu negocio.',
  storyTitle: 'Nuestra historia',
  story:
    'Cyber Positioning nació porque [razón real: lo que vieron en los negocios a su alrededor]. Somos tres socios con experiencia en estrategia digital, producción visual y operaciones, y trabajamos con una idea simple: el dueño de un negocio debería estar en su negocio, no frente a un calendario de publicaciones.',
  missionTitle: 'Misión',
  mission: 'Que los negocios locales tengan la presencia digital que su trabajo merece, sin sacrificar su tiempo.',
  teamTitle: 'El equipo',
  bios: { gabriela: null, carlo: null, dianelle: null },
  details: { gabriela: null, carlo: null, dianelle: null },
  bioPending: 'Bio pendiente de entrega.',
  detailsLabel: 'Más detalles profesionales',
  detailsPending: 'Detalle profesional pendiente de entrega.',
  closing: {
    title: 'Hablemos de tu negocio.',
    body: 'Agenda una llamada de 30 minutos con nosotros o llámanos directo.',
  },
};
