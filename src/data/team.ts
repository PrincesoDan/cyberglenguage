export type TeamMemberId = 'gabriela' | 'carlo' | 'dianelle';

export interface TeamMember {
  id: TeamMemberId;
  name: string;
  role: 'CMO' | 'CCO' | 'COO';
  /** Foto profesional (la entrega Gabriela). null = avatar con iniciales. */
  photo: string | null;
  /** Perfil de LinkedIn (el equipo decidió no mostrar Instagram personal). null = pendiente. */
  linkedin: string | null;
}

/** Socios (brief web, "Datos clave"; actualizado por el mail del 2026-10-16). Links del 2026-10-30. */
export const TEAM: readonly TeamMember[] = [
  {
    id: 'gabriela',
    name: 'Gabriela Fonseca',
    role: 'CMO',
    photo: '/team/gabriela.webp',
    // La "í" del slug va codificada: así el href es ASCII y no depende de cómo lo normalice cada navegador.
    linkedin: 'https://www.linkedin.com/in/gabriela-fonseca-rodr%C3%ADguez-ba0923211/',
  },
  {
    id: 'carlo',
    name: 'Carlo Fonseca',
    role: 'CCO',
    photo: '/team/carlo.webp',
    linkedin: 'https://www.linkedin.com/in/carlo-alejandro-fonseca-rodriguez-758309319/',
  },
  {
    id: 'dianelle',
    name: 'Dianelle Flores',
    role: 'COO',
    photo: '/team/dianelle.webp',
    linkedin: 'https://www.linkedin.com/in/dianelle-flores-maldonado-224414220/',
  },
];

/** Foto grupal de los tres socios, para la historia en Nosotros. */
export const TEAM_PHOTO = '/team/team.webp';
