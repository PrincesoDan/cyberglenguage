import { describe, expect, it } from 'vitest';
import { INDIVIDUAL_SERVICES, MAIN_SERVICES, SERVICE_IDS } from './services';
import { es } from '../i18n/es';
import { en } from '../i18n/en';

describe('servicios', () => {
  it('el orden del brief: redes, anuncios, comunidad y, aparte, producción', () => {
    expect(MAIN_SERVICES).toEqual(['redes', 'anuncios', 'comunidad']);
    expect(INDIVIDUAL_SERVICES).toEqual(['produccion']);
    expect([...MAIN_SERVICES, ...INDIVIDUAL_SERVICES]).toEqual([...SERVICE_IDS]);
  });

  it('usa los nombres cara al cliente del brief de marca §05', () => {
    expect(es.services.items.redes.name).toBe('Manejo integral de redes sociales');
    expect(en.services.items.anuncios.name).toBe('Social Media Ads');
    expect(es.services.items.comunidad.name).toBe('Atención a tu comunidad');
    expect(en.services.items.produccion.name).toBe('Content Production');
  });

  it('no usa palabras prohibidas por el brief de marca §04', () => {
    const text = JSON.stringify([es.services, en.services]).toLowerCase();
    for (const word of ['funnel', 'engagement', 'leads', 'growth', 'viral']) {
      expect(text).not.toContain(word);
    }
  });
});
