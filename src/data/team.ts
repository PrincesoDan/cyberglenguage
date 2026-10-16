export type TeamMemberId = 'gabriela' | 'carlo' | 'dianelle';

export interface TeamMember {
  id: TeamMemberId;
  name: string;
  role: 'CMO' | 'CCO' | 'COO';
  /** Foto profesional (la entrega Gabriela). null = avatar con iniciales. */
  photo: string | null;
}

/** Socios (brief web, "Datos clave"; actualizado por el mail del 2026-10-16). */
export const TEAM: readonly TeamMember[] = [
  { id: 'gabriela', name: 'Gabriela Fonseca', role: 'CMO', photo: null },
  { id: 'carlo', name: 'Carlo Fonseca', role: 'CCO', photo: null },
  { id: 'dianelle', name: 'Dianelle Flores', role: 'COO', photo: null },
];
