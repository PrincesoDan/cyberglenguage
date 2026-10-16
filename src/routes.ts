import { LANGUAGES } from './i18n/language';
import type { Language } from './i18n/language';

export type PageId = 'home' | 'services' | 'work' | 'about' | 'contact' | 'links' | 'geo' | 'privacy';
export type RoutePage = PageId | 'notFound';
export type NavPageId = Extract<PageId, 'home' | 'services' | 'work' | 'about' | 'geo' | 'contact'>;

export interface ResolvedRoute {
  page: RoutePage;
  language: Language;
}

/**
 * Fuente única de las URLs del sitio (spec §3). El idioma sale de la URL, no
 * del navegador: así un link compartido abre siempre en el idioma en que se
 * compartió.
 */
const PATHS: Record<PageId, Record<Language, string>> = {
  home: { es: '/', en: '/en' },
  services: { es: '/servicios', en: '/en/services' },
  work: { es: '/nuestro-trabajo', en: '/en/our-work' },
  about: { es: '/nosotros', en: '/en/about' },
  contact: { es: '/contacto', en: '/en/contact' },
  links: { es: '/links', en: '/en/links' },
  geo: { es: '/geo', en: '/en/geo' },
  privacy: { es: '/privacidad', en: '/en/privacy' },
};

const PAGE_IDS = Object.keys(PATHS) as PageId[];

/** Orden del menú principal (brief web, "Elementos globales", más GEO). */
export const NAV_PAGES: readonly NavPageId[] = ['home', 'services', 'work', 'about', 'geo', 'contact'];

/** Las URLs se escriben a mano en tarjetas e Instagram: mayúsculas y barras finales no deben dar 404. */
export function normalizePath(pathname: string): string {
  return pathname.toLowerCase().replace(/\/+$/, '') || '/';
}

function languageOfPath(path: string): Language {
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'es';
}

export function resolveRoute(pathname: string): ResolvedRoute {
  const path = normalizePath(pathname).replace(/\/{2,}/g, '/');
  for (const page of PAGE_IDS) {
    for (const language of LANGUAGES) {
      if (PATHS[page][language] === path) return { page, language };
    }
  }
  return { page: 'notFound', language: languageOfPath(path) };
}

export function pathFor(page: PageId, language: Language): string {
  return PATHS[page][language];
}

/**
 * Destino del switch ES/EN. Las anclas son las mismas en ambos idiomas, así
 * que el hash se conserva. Un 404 no tiene equivalente: va al inicio.
 */
export function alternateHref(route: ResolvedRoute, hash: string): string {
  const target: Language = route.language === 'es' ? 'en' : 'es';
  if (route.page === 'notFound') return pathFor('home', target);
  return `${pathFor(route.page, target)}${hash}`;
}
