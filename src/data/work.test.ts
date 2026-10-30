import { describe, expect, it } from 'vitest';
import { es } from '../i18n/es';
import { SAMPLE_REACH_BY_WEEK, WORK_STEPS } from './work';

describe('cómo trabajamos', () => {
  it('seis pasos, y solo los dos últimos se repiten cada mes', () => {
    expect(WORK_STEPS.map(({ id }) => id)).toEqual([
      'diagnosis',
      'strategy',
      'production',
      'publishing',
      'measurement',
      'adjustment',
    ]);
    expect(WORK_STEPS.map(({ monthly }) => monthly)).toEqual([false, false, false, false, true, true]);
  });

  it('el gráfico de ejemplo tiene una barra por etiqueta de semana, dentro de 0–100%', () => {
    expect(SAMPLE_REACH_BY_WEEK).toHaveLength(es.work.reportSample.weekLabels.length);
    for (const height of SAMPLE_REACH_BY_WEEK) {
      expect(height).toBeGreaterThan(0);
      expect(height).toBeLessThanOrEqual(100);
    }
  });
});
