import { describe, expect, it } from 'vitest';
import { circularOffset, wrapIndex } from './carousel';

describe('circularOffset', () => {
  it('el activo queda en 0', () => {
    expect(circularOffset(1, 1, 3)).toBe(0);
  });

  it('con tres miembros, uno queda arriba y otro abajo del activo', () => {
    expect([0, 1, 2].map((index) => circularOffset(index, 0, 3))).toEqual([0, 1, -1]);
    expect([0, 1, 2].map((index) => circularOffset(index, 2, 3))).toEqual([1, -1, 0]);
  });

  it('con largo par, el opuesto va abajo', () => {
    expect([0, 1, 2, 3].map((index) => circularOffset(index, 0, 4))).toEqual([0, 1, 2, -1]);
  });

  it('con un solo miembro no hay desplazamiento', () => {
    expect(circularOffset(0, 0, 1)).toBe(0);
  });
});

describe('wrapIndex', () => {
  it('da la vuelta en ambos extremos', () => {
    expect(wrapIndex(3, 3)).toBe(0);
    expect(wrapIndex(-1, 3)).toBe(2);
    expect(wrapIndex(1, 3)).toBe(1);
  });
});
