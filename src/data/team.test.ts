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

describe('fotos y perfiles', () => {
  it('cada socio tiene foto y LinkedIn con https', () => {
    for (const member of TEAM) {
      expect(member.photo).toMatch(/^\/team\/.+\.webp$/);
      expect(member.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\/[\x21-\x7e]+\/$/);
    }
  });
});
