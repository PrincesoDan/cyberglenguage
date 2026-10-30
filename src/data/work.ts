import type { Language } from '../i18n/language';
import type { WorkStepId } from '../i18n/types';

export interface ResultCase {
  image: string;
  client: string;
  challenge: Record<Language, string>;
  whatWeDid: Record<Language, string>;
  result: Record<Language, string>;
}

/** Casos de resultados: fase 2. Mientras esté vacío, el bloque no se muestra. */
export const RESULTS: readonly ResultCase[] = [];

export interface WorkStep {
  id: WorkStepId;
  /** Los pasos mensuales llevan la etiqueta "Cada mes" en vez de número: son el ciclo que se repite. */
  monthly: boolean;
}

/** Proceso de "Cómo trabajamos", en orden. El texto vive en i18n (`work.steps`). */
export const WORK_STEPS: readonly WorkStep[] = [
  { id: 'diagnosis', monthly: false },
  { id: 'strategy', monthly: false },
  { id: 'production', monthly: false },
  { id: 'publishing', monthly: false },
  { id: 'measurement', monthly: true },
  { id: 'adjustment', monthly: true },
];

/**
 * Alcance semanal del reporte de ejemplo, en % del alto del gráfico. Datos
 * ilustrativos de la propuesta; la última semana es la que se resalta.
 */
export const SAMPLE_REACH_BY_WEEK: readonly number[] = [48, 62, 55, 92];
