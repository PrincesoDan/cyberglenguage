import { describe, expect, it } from 'vitest';
import { alternateHref, normalizePath, pathFor, resolveRoute } from './routes';
import type { PageId } from './routes';

const ALL_PAGES: PageId[] = ['home', 'services', 'work', 'about', 'contact', 'links', 'geo', 'privacy'];

describe('resolveRoute', () => {
  it('resuelve cada página en ambos idiomas', () => {
    for (const page of ALL_PAGES) {
      expect(resolveRoute(pathFor(page, 'es'))).toEqual({ page, language: 'es' });
      expect(resolveRoute(pathFor(page, 'en'))).toEqual({ page, language: 'en' });
    }
  });

  it('ignora la barra final y las mayúsculas', () => {
    expect(resolveRoute('/servicios/')).toEqual({ page: 'services', language: 'es' });
    expect(resolveRoute('/Servicios')).toEqual({ page: 'services', language: 'es' });
    expect(resolveRoute('/en/')).toEqual({ page: 'home', language: 'en' });
    expect(resolveRoute('/EN/Services//')).toEqual({ page: 'services', language: 'en' });
  });

  it('una ruta desconocida es 404 en el idioma de su prefijo', () => {
    expect(resolveRoute('/nada')).toEqual({ page: 'notFound', language: 'es' });
    expect(resolveRoute('/en/nothing')).toEqual({ page: 'notFound', language: 'en' });
  });

  it('un prefijo que solo empieza con "en" no es inglés', () => {
    expect(resolveRoute('/english')).toEqual({ page: 'notFound', language: 'es' });
  });

  it('una ruta de un idioma con el prefijo del otro es 404', () => {
    expect(resolveRoute('/en/servicios')).toEqual({ page: 'notFound', language: 'en' });
  });
});

describe('normalizePath', () => {
  it('deja "/" para la raíz y para cadenas vacías', () => {
    expect(normalizePath('/')).toBe('/');
    expect(normalizePath('')).toBe('/');
    expect(normalizePath('///')).toBe('/');
  });
});

describe('pathFor', () => {
  it('no repite ningún path', () => {
    const paths = ALL_PAGES.flatMap((page) => [pathFor(page, 'es'), pathFor(page, 'en')]);
    expect(new Set(paths).size).toBe(paths.length);
  });
});

describe('alternateHref', () => {
  it('lleva a la misma página en el otro idioma y conserva el hash', () => {
    expect(alternateHref({ page: 'services', language: 'es' }, '#anuncios')).toBe('/en/services#anuncios');
    expect(alternateHref({ page: 'home', language: 'en' }, '')).toBe('/');
  });

  it('desde un 404 lleva al inicio del otro idioma, sin hash', () => {
    expect(alternateHref({ page: 'notFound', language: 'es' }, '#x')).toBe('/en');
    expect(alternateHref({ page: 'notFound', language: 'en' }, '')).toBe('/');
  });
});
