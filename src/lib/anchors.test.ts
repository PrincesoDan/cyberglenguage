import { describe, expect, it } from 'vitest';
import { serviceFromHash } from './anchors';

const IDS = ['redes', 'anuncios'] as const;

describe('serviceFromHash', () => {
  it('reconoce un id válido, con o sin #', () => {
    expect(serviceFromHash('#redes', IDS)).toBe('redes');
    expect(serviceFromHash('anuncios', IDS)).toBe('anuncios');
  });

  it('devuelve null para vacío o desconocido', () => {
    expect(serviceFromHash('', IDS)).toBeNull();
    expect(serviceFromHash('#nada', IDS)).toBeNull();
  });

  it('no revienta con un hash mal codificado', () => {
    expect(serviceFromHash('#%E0%A4%A', IDS)).toBeNull();
  });
});
