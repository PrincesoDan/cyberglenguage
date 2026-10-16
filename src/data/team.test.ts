import { describe, expect, it } from 'vitest';
import { TEAM } from './team';

describe('equipo', () => {
  it('nombres y cargos según el brief web, "Datos clave"', () => {
    expect(TEAM.map(({ name, role }) => [name, role])).toEqual([
      ['Gabriela Fonseca', 'CMO'],
      ['Carlo Fonseca', 'CCO'],
      ['Dianelle Flores', 'COO'],
    ]);
  });
});
