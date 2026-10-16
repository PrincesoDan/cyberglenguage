# Sitio Cyber Positioning + CyberLanguage — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir la landing de CyberLanguage en el sitio bilingüe multipágina de
Cyber Positioning. La línea GEO de CyberLanguage queda como página `/geo`, y
"Agendar" (Cal.com) es el CTA principal en todo el sitio.

**Architecture:** Se mantiene la SPA Vite + React. Una tabla de rutas pura
(`src/routes.ts`) resuelve página e idioma desde `pathname`, y `main.tsx`
inyecta ambos por contexto. Todo el texto vive en `src/i18n/{es,en}/`, tipado
contra `Copy`. Cada página es un componente en `src/pages/` que usa
`SiteLayout` (header + footer + WhatsApp flotante).

**Tech Stack:** React 19, TypeScript 5.8 (strict, `verbatimModuleSyntax`,
`erasableSyntaxOnly`), Vite 7, CSS plano con tokens y Vitest 3 (nuevo, solo
dev).

**Spec:** `docs/superpowers/specs/2026-10-16-cyberpositioning-site-design.md`

## Global Constraints

- **Git:** el usuario no autoriza commits ni cambios de rama por defecto
  (CLAUDE.md). Los pasos "Commit" y la creación de la rama
  `feat/cyberpositioning-site` se ejecutan **solo con autorización
  explícita**. Sin ella, se deja el árbol con los cambios sin stage.
- **Copy:** todo texto visible va en `src/i18n/es/*` y `src/i18n/en/*`, nunca
  dentro de un componente.
- **Voz:** según el brief de marca §04. Palabras prohibidas en la web: funnel,
  engagement, leads, growth, viral, "llevar tu marca al siguiente nivel".
- **Nombres de servicios:** Manejo integral de redes sociales / Full Social
  Media Management · Anuncios en redes sociales / Social Media Ads · Atención
  a tu comunidad / Community Care · Producción de contenido / Content
  Production.
- **Datos:** agenda `https://cal.com/princesodan/ulab-consulting`, WhatsApp
  `17879559917`, teléfono `+17879559917`, correo `admin@cyberpositioning.com`,
  horario "Lunes a viernes, 9:00 a.m. – 5:00 p.m. (hora de Puerto Rico)".
- **Sin datos inventados:** lo que falta se muestra como pendiente visible
  (`PendingNote` / `.pending`). No se ponen placeholders que parezcan reales.
- **Sin precios** en ninguna página.
- **Nada depende solo del hover;** todo es operable con teclado.
- **Móvil primero:** sin scroll horizontal de página a 375px.
- **TypeScript:** tipos explícitos en parámetros, nunca `any`, `import type`
  para tipos.
- **Comentarios:** explican el *por qué* y citan la sección del brief o del
  spec.
- **Verificación de cada tarea:** `npm run build` y `npm test` en verde.

## Review Focus

1. **Paths con mayúsculas, barra final o `/en/`:** `/Servicios`,
   `/servicios/` y `/en/` deben resolver a su página, no a 404. Lo cubren los
   tests de Task 2.
2. **Hash al cambiar de idioma:** el switch desde `/servicios#anuncios` debe
   llevar a `/en/services#anuncios` con ese plegable abierto. Lo cubren los
   tests de Task 2 (`alternateHref`) y Task 3 (`serviceFromHash`).
3. **Hash basura o mal codificado** (`#%E0%A4%A`, `#nada`): la página de
   Servicios no debe romperse ni abrir nada. Test en Task 3.
4. **Mensajes de WhatsApp con tildes, ñ, `&` o `+`:** deben llegar intactos
   (`encodeURIComponent`). Test en Task 3.
5. **Si el iframe de Cal.com no carga** (bloqueado, offline o rechazado):
   tiene que quedar un camino a la agenda. El enlace "Abrir la agenda en una
   pestaña nueva" se muestra siempre, no solo como fallback. Lo verifica el
   paso manual de Task 10.

## Desviaciones menores del spec (avisadas al usuario)

- **`AuditWidget.tsx/.css` y `src/lib/url.ts` se borran** en vez de quedar
  sin importar. Con `tsc -b`, todo lo que está en `src/` se compila y les
  exigiría mantener copy muerto. Siguen recuperables desde git (`55a7e4e`).
- **Hover en Servicios:** la descripción corta se ve siempre bajo el título y
  el hover solo agrega énfasis visual. Así se cumple "nada depende solo del
  hover" sin mostrar el mismo texto dos veces.

---

## File Structure

| Archivo | Responsabilidad |
|---|---|
| `src/i18n/language.ts` | Tipo `Language` y lista `LANGUAGES` |
| `src/routes.ts` | Tabla de rutas, `resolveRoute`, `pathFor`, `alternateHref` (puro) |
| `src/RouteContext.tsx` | Contexto con la ruta resuelta (`useRoute`) |
| `src/config.ts` | Datos de contacto y URLs |
| `src/lib/whatsapp.ts` | `fillServiceTemplate`, `buildWhatsAppUrl` |
| `src/lib/pending.ts` | `splitPendingMarkers` para los textos con `[pendiente]` |
| `src/lib/anchors.ts` | `serviceFromHash` |
| `src/data/services.ts` | `SERVICE_IDS`, grupos y orden |
| `src/data/team.ts` | Socios: id, nombre, cargo, foto |
| `src/data/work.ts` | Piezas de producción y casos (vacíos) |
| `src/i18n/types.ts` | Interfaz `Copy` completa |
| `src/i18n/{es,en}/index.ts` | Ensambla `Copy` por idioma |
| `src/i18n/{es,en}/{site,geo,privacy,services,home,work,about,contact,links}.ts` | Copy por área |
| `src/components/SiteLayout.tsx` | Header + main + Footer + WhatsAppFab |
| `src/components/Header.tsx/.css` | Nav, menú móvil, switch de idioma, CTA |
| `src/components/Footer.tsx/.css` | Footer del brief |
| `src/components/WhatsAppFab.tsx/.css` | Botón flotante |
| `src/components/ScheduleButton.tsx` | CTA de agenda (existente, ajustado) |
| `src/components/WhatsAppButton.tsx` | Botón con mensaje prellenado |
| `src/components/CallButton.tsx` | Botón `tel:` |
| `src/components/SocialIcons.tsx` | SVG de Instagram, Facebook y WhatsApp |
| `src/components/PendingNote.tsx` | Aviso y texto de dato pendiente |
| `src/components/PageIntro.tsx/.css` | Encabezado de página interior |
| `src/components/ClosingCta.tsx/.css` | Bloque final con Agendar + secundario |
| `src/components/ServiceAccordion.tsx/.css` | Plegable de un servicio |
| `src/components/GeoHero.tsx/.css` | Hero GEO (renombrado desde Hero) |
| `src/components/GeoServices.tsx/.css` | Servicios GEO (renombrado desde Services) |
| `src/components/{Problem,Method,StrategyBand}.tsx` | Secciones GEO existentes (leen `copy.geo.*`) |
| `src/pages/*Page.tsx/.css` | Una página por archivo |
| `public/brand/*` | Logos e iconos de CP optimizados |
| `public/qr/*` | QR de `/links` |
| `vercel.json` | Rewrite SPA y redirect de cyberlanguage.io |

---

### Task 1: Base del proyecto (ignorar temp, nombre, Vitest)

**Files:**
- Modify: `.gitignore`
- Modify: `package.json`
- Create: `src/lib/smoke.test.ts` (temporal, se borra en el paso 6)

**Interfaces:**
- Produces: script `npm test` (`vitest run`).

- [ ] **Step 1: Rama (solo con autorización)**

```bash
git switch -c feat/cyberpositioning-site
```

- [ ] **Step 2: Ignorar `temp/`**

Agregar al final de `.gitignore`:

```
# Material del cliente (briefs, zips). Fuente de trabajo, no se versiona.
temp/
```

Run: `git status --short`
Expected: `temp/` ya no aparece.

- [ ] **Step 3: Renombrar el paquete e instalar Vitest**

En `package.json`, cambiar `"name": "cyberlanguage-landing"` por
`"name": "cyberpositioning-site"` y agregar en `scripts`:

```json
"test": "vitest run"
```

Run: `npm install -D vitest@^3.2.4`
Expected: `vitest` aparece en `devDependencies`.

- [ ] **Step 4: Test de humo**

`src/lib/smoke.test.ts`:

```ts
import { describe, expect, it } from 'vitest';

describe('vitest', () => {
  it('corre', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 5: Correr**

Run: `npm test && npm run build`
Expected: 1 test PASS. El build termina sin errores.

- [ ] **Step 6: Borrar el test de humo**

```bash
rm src/lib/smoke.test.ts
```

- [ ] **Step 7: Commit (solo con autorización)**

```bash
git add .gitignore package.json package-lock.json
git commit -m "chore: ignore temp/, rename package and add vitest"
```

---

### Task 2: Tabla de rutas (TDD)

**Files:**
- Create: `src/i18n/language.ts`
- Create: `src/routes.ts`
- Test: `src/routes.test.ts`

**Interfaces:**
- Produces:
  - `type Language = 'es' | 'en'` y `LANGUAGES: readonly Language[]` (desde `src/i18n/language.ts`).
  - `type PageId = 'home' | 'services' | 'work' | 'about' | 'contact' | 'links' | 'geo' | 'privacy'`.
  - `type RoutePage = PageId | 'notFound'`.
  - `type NavPageId = Extract<PageId, 'home' | 'services' | 'work' | 'about' | 'geo' | 'contact'>`.
  - `NAV_PAGES: readonly NavPageId[]`.
  - `interface ResolvedRoute { page: RoutePage; language: Language }`.
  - `normalizePath(pathname: string): string`.
  - `resolveRoute(pathname: string): ResolvedRoute`.
  - `pathFor(page: PageId, language: Language): string`.
  - `alternateHref(route: ResolvedRoute, hash: string): string`.

- [ ] **Step 1: Escribir el test que falla**

`src/routes.test.ts`:

```ts
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
```

- [ ] **Step 2: Correr y ver que falla**

Run: `npm test`
Expected: FAIL con `Failed to resolve import "./routes"`.

- [ ] **Step 3: Implementar**

`src/i18n/language.ts`:

```ts
export type Language = 'es' | 'en';

export const LANGUAGES: readonly Language[] = ['es', 'en'];
```

`src/routes.ts`:

```ts
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
```

Nota: `/EN/Services//` → `normalizePath` → `/en/services`, porque quita
todas las barras finales. El `replace(/\/{2,}/g, '/')` cubre las barras
dobles internas.

- [ ] **Step 4: Correr y ver que pasa**

Run: `npm test`
Expected: todos PASS.

- [ ] **Step 5: Commit (solo con autorización)**

```bash
git add src/i18n/language.ts src/routes.ts src/routes.test.ts
git commit -m "feat(routing): add bilingual route table"
```

---

### Task 3: Helpers puros: WhatsApp, pendientes y anclas (TDD)

**Files:**
- Modify: `src/config.ts` (reemplazo completo)
- Create: `src/lib/whatsapp.ts`, `src/lib/pending.ts`, `src/lib/anchors.ts`
- Test: `src/lib/whatsapp.test.ts`, `src/lib/pending.test.ts`, `src/lib/anchors.test.ts`

**Interfaces:**
- Produces:
  - En `config.ts`: `SITE_URL`, `GEO_DOMAIN`, `SCHEDULING_URL`, `WHATSAPP_NUMBER`, `PHONE_TEL`, `PHONE_DISPLAY`, `CONTACT_EMAIL`, `SOCIAL: { instagram: string; facebook: string }` y `DATA_CONTROLLER`. Se elimina `PRIVACY_POLICY_URL`.
  - `fillServiceTemplate(template: string, services: readonly string[], conjunction: string): string`.
  - `buildWhatsAppUrl(message: string): string`.
  - `interface TextSegment { text: string; pending: boolean }` y `splitPendingMarkers(text: string): TextSegment[]`.
  - `serviceFromHash<T extends string>(hash: string, ids: readonly T[]): T | null`.

- [ ] **Step 1: Config**

Reemplazar `src/config.ts` completo:

```ts
/**
 * Datos de contacto y URLs del sitio (spec §4). Los valores salen del brief
 * web, "Datos clave"; la agenda es la de Cal.com que entregó el cliente.
 */

export const SITE_URL = 'https://cyberpositioning.com';

/** Dominio de la línea GEO. Redirige a /geo desde el host (vercel.json). */
export const GEO_DOMAIN = 'https://cyberlanguage.io';

/** Vacío = los CTA de agenda se deshabilitan (ScheduleButton). */
export const SCHEDULING_URL = 'https://cal.com/princesodan/ulab-consulting';

/** Formato wa.me: solo dígitos, con código de país. */
export const WHATSAPP_NUMBER = '17879559917';

export const PHONE_TEL = '+17879559917';
export const PHONE_DISPLAY = '+1 (787) 955-9917';

export const CONTACT_EMAIL = 'admin@cyberpositioning.com';

export const SOCIAL = {
  instagram: 'https://www.instagram.com/cyberpositioning/',
  facebook: 'https://www.facebook.com/profile.php?id=61594919531733',
} as const;

/**
 * TODO: razón social de Cyber Positioning para la política de privacidad.
 * Vacío = la política lo muestra como dato pendiente.
 */
export const DATA_CONTROLLER = '';
```

(Mientras `PRIVACY_POLICY_URL` siga importado por `AuditWidget`/`Footer`, el
build va a fallar. Se resuelve en Task 5. En esta tarea se verifica solo con
`npm test`.)

- [ ] **Step 2: Tests que fallan**

`src/lib/whatsapp.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl, fillServiceTemplate } from './whatsapp';

describe('fillServiceTemplate', () => {
  const template = 'Quiero información sobre {service}.';

  it('inserta un servicio', () => {
    expect(fillServiceTemplate(template, ['Anuncios en redes sociales'], ' y ')).toBe(
      'Quiero información sobre Anuncios en redes sociales.',
    );
  });

  it('une dos servicios con la conjunción del idioma', () => {
    expect(fillServiceTemplate(template, ['A', 'B'], ' y ')).toBe('Quiero información sobre A y B.');
    expect(fillServiceTemplate('Info about {service}.', ['A', 'B'], ' and ')).toBe('Info about A and B.');
  });
});

describe('buildWhatsAppUrl', () => {
  it('apunta al número del brief', () => {
    expect(buildWhatsAppUrl('Hola')).toBe('https://wa.me/17879559917?text=Hola');
  });

  it('codifica tildes, ñ, & y + sin perderlos', () => {
    const url = buildWhatsAppUrl('Diseño & fotos + video ¿sí?');
    const text = new URL(url).searchParams.get('text');
    expect(text).toBe('Diseño & fotos + video ¿sí?');
    expect(url).not.toContain(' ');
  });
});
```

`src/lib/pending.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { splitPendingMarkers } from './pending';

describe('splitPendingMarkers', () => {
  it('sin marcas devuelve un solo segmento normal', () => {
    expect(splitPendingMarkers('Hola mundo')).toEqual([{ text: 'Hola mundo', pending: false }]);
  });

  it('separa las marcas [..] como pendientes, sin corchetes', () => {
    expect(splitPendingMarkers('Nació porque [razón]. Somos [n] socios')).toEqual([
      { text: 'Nació porque ', pending: false },
      { text: 'razón', pending: true },
      { text: '. Somos ', pending: false },
      { text: 'n', pending: true },
      { text: ' socios', pending: false },
    ]);
  });

  it('una marca al inicio no deja segmentos vacíos', () => {
    expect(splitPendingMarkers('[x] fin')).toEqual([
      { text: 'x', pending: true },
      { text: ' fin', pending: false },
    ]);
  });

  it('un corchete sin cerrar queda como texto normal', () => {
    expect(splitPendingMarkers('abre [ y no cierra')).toEqual([{ text: 'abre [ y no cierra', pending: false }]);
  });
});
```

`src/lib/anchors.test.ts`:

```ts
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
```

- [ ] **Step 3: Correr y ver que fallan**

Run: `npm test`
Expected: FAIL por imports inexistentes.

- [ ] **Step 4: Implementar**

`src/lib/whatsapp.ts`:

```ts
import { WHATSAPP_NUMBER } from '../config';

/**
 * Inserta el o los servicios en la plantilla del mensaje prellenado (brief
 * web: "el mensaje incluye ese servicio"). Dos servicios cuando el cliente
 * suma Atención a tu comunidad desde un plegable.
 */
export function fillServiceTemplate(template: string, services: readonly string[], conjunction: string): string {
  return template.replace('{service}', services.join(conjunction));
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
```

`src/lib/pending.ts`:

```ts
export interface TextSegment {
  text: string;
  pending: boolean;
}

/**
 * Los textos plantilla del brief traen huecos como "[razón real]". En vez de
 * inventarlos, se muestran marcados como pendientes (spec §10).
 */
export function splitPendingMarkers(text: string): TextSegment[] {
  return text
    .split(/(\[[^\]]+\])/)
    .filter((part) => part.length > 0)
    .map((part) =>
      part.startsWith('[') && part.endsWith(']')
        ? { text: part.slice(1, -1), pending: true }
        : { text: part, pending: false },
    );
}
```

`src/lib/anchors.ts`:

```ts
/**
 * Los anuncios y mensajes enlazan a un servicio por ancla (brief web:
 * `#redes`, `#anuncios`…). Devuelve el id solo si es uno conocido; cualquier
 * hash raro se ignora en vez de romper la página.
 */
export function serviceFromHash<T extends string>(hash: string, ids: readonly T[]): T | null {
  let id: string;
  try {
    id = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return null;
  }
  return ids.find((candidate) => candidate === id) ?? null;
}
```

- [ ] **Step 5: Correr y ver que pasan**

Run: `npm test`
Expected: todos PASS.

- [ ] **Step 6: Commit (solo con autorización)**

```bash
git add src/config.ts src/lib/whatsapp.ts src/lib/pending.ts src/lib/anchors.ts src/lib/*.test.ts
git commit -m "feat(lib): add whatsapp, pending-marker and anchor helpers"
```

---

### Task 4: Marca, assets y hosting

**Files:**
- Modify: `src/styles/tokens.css:8-9,20,52`
- Modify: `src/components/BrandIcons.tsx` (constante `GOLD`)
- Create: `public/brand/*.png`, `public/brand/icons/*.png`, `public/og-image.png`, `public/qr/cyberpositioning-links.{png,svg}`
- Modify: `public/icon-32.png`, `public/icon-16.png`, `public/apple-touch-icon.png`
- Delete: `public/favicon.svg`
- Modify: `index.html`
- Create: `vercel.json`

**Interfaces:**
- Produces (rutas públicas que usan las tareas siguientes):
  - Logos: `/brand/logo-horizontal.png`, `/brand/logo-vertical.png`, `/brand/logo-mark.png`.
  - Iconos: `/brand/icons/servicios.png`, `/brand/icons/logros.png`, `/brand/icons/conocenos.png`, `/brand/icons/contacto.png`, `/brand/icons/faq.png`.
  - Imagen OG: `/og-image.png`.

- [ ] **Step 1: Tokens**

En `src/styles/tokens.css`:
- `--color-ink: #0f1a2b;` → `--color-ink: #11192a;` (línea 8).
- `--color-gold: #c6a15b;` → `--color-gold: #c0a365;` (línea 9).
- `--color-gold-hover: #b69454;` → `--color-gold-hover: #ad9054;` (línea 20).
- En la línea 52, `rgba(15, 26, 43,` → `rgba(17, 25, 42,`.

Agregar este comentario sobre la línea 8:
`/* Hex tomados de los logos de Cyber Positioning (temp/Logos CyberP.zip), que comparten paleta con CyberLanguage. */`

En `src/components/BrandIcons.tsx`, `const GOLD = '#c6a15b';` →
`const GOLD = '#c0a365';`.

Run: `grep -rn "0f1a2b\|c6a15b\|15, 26, 43" src/`
Expected: los aciertos que queden son solo valores `rgba(198, 161, 91, …)` en
CSS (el oro viejo en rgb). Reemplazarlos por `rgba(192, 163, 101, …)`:

```bash
grep -rl "198, 161, 91" src/ | xargs sed -i 's/198, 161, 91/192, 163, 101/g'
grep -rl "15, 26, 43" src/ | xargs sed -i 's/15, 26, 43/17, 25, 42/g'
```

- [ ] **Step 2: Extraer y optimizar assets (script de una vez, en el scratchpad)**

```bash
S=/tmp/claude-1000/-home-princesodan-proyects-cyberglenguage/3efa5228-38df-4056-966a-fcfb8f0214bf/scratchpad/assets
mkdir -p "$S"
for z in temp/*.zip; do d="$S/$(basename "$z" .zip | tr ' .' '__')"; mkdir -p "$d"; unzip -oq "$z" -d "$d"; done
mkdir -p public/brand/icons public/qr
python3 -I - "$S" "$PWD/public" <<'EOF'
import sys
from PIL import Image, ImageChops
src, pub = sys.argv[1], sys.argv[2]
INK = (17, 25, 42)

def trim(im, pad=24):
    """Recorta el fondo horneado (color de la esquina) dejando un margen."""
    im = im.convert('RGB')
    bg = Image.new('RGB', im.size, im.getpixel((0, 0)))
    diff = ImageChops.difference(im, bg).convert('L').point(lambda v: 255 if v > 24 else 0)
    l, t, r, b = diff.getbbox()
    return im.crop((max(l - pad, 0), max(t - pad, 0), min(r + pad, im.width), min(b + pad, im.height)))

def save(im, path, height=None, size=None):
    if height:
        im = im.resize((round(im.width * height / im.height), height), Image.LANCZOS)
    if size:
        im = im.resize((size, size), Image.LANCZOS)
    im.save(path, optimize=True)
    print(path, im.size)

logos = f'{src}/Logos_CyberP__'
save(trim(Image.open(f'{logos}/Logo horizontal.png')), f'{pub}/brand/logo-horizontal.png', height=96)
save(trim(Image.open(f'{logos}/Logo vertical.png')), f'{pub}/brand/logo-vertical.png', height=360)
save(trim(Image.open(f'{logos}/Logo.png')), f'{pub}/brand/logo-mark.png', height=240)

icons = f'{src}/cyber_Iconos_Branding_2026'
for name, out in [('Servicios', 'servicios'), ('Logros', 'logros'), ('Conocenos', 'conocenos'),
                  ('Contacto', 'contacto'), ('FAQ', 'faq')]:
    save(Image.open(f'{icons}/{name}.png').convert('RGB'), f'{pub}/brand/icons/{out}.png', size=320)

profile = Image.open(f'{src}/Perfil_Logo_de_Cyber_Positioning/1.png').convert('RGB')
save(profile, f'{pub}/icon-32.png', size=32)
save(profile, f'{pub}/icon-16.png', size=16)
save(profile, f'{pub}/apple-touch-icon.png', size=180)

og = Image.new('RGB', (1200, 630), INK)
logo = trim(Image.open(f'{logos}/Logo horizontal.png'))
logo = logo.resize((760, round(logo.height * 760 / logo.width)), Image.LANCZOS)
og.paste(logo, ((1200 - logo.width) // 2, (630 - logo.height) // 2))
og.save(f'{pub}/og-image.png', optimize=True)
print('og', og.size)
EOF
rm public/favicon.svg
```

Expected: cada archivo impreso con su tamaño, y `og (1200, 630)`.

Abrir `public/brand/logo-horizontal.png` y `public/og-image.png` con la
herramienta Read para verificarlos a ojo: el logo tiene que estar completo y
sin cortes.

- [ ] **Step 3: QR estático hacia `/links`**

```bash
npx --yes qrcode@1.5.4 -t svg -o public/qr/cyberpositioning-links.svg "https://cyberpositioning.com/links"
npx --yes qrcode@1.5.4 -t png -w 1024 -o public/qr/cyberpositioning-links.png "https://cyberpositioning.com/links"
file public/qr/*
```

Expected: un `SVG Scalable Vector Graphics image` y un `PNG image data, 1024 x 1024`.
Verificar el PNG escaneándolo con el celular. Si no hay celular a mano,
abrirlo con Read y confirmar que es un QR completo con sus tres marcas de
posición.

- [ ] **Step 4: `index.html`**

Reemplazar todo el bloque `<head>` (dejando `<body>` igual):

```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Avatar de perfil de Cyber Positioning (temp/Perfil Logo…zip). -->
    <link rel="icon" href="/icon-32.png" sizes="32x32" type="image/png" />
    <link rel="icon" href="/icon-16.png" sizes="16x16" type="image/png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="canonical" href="https://cyberpositioning.com/" />

    <!-- SPA: estos metadatos son globales (spec §2, costo aceptado). El <title> se ajusta por página en el cliente. -->
    <title>Cyber Positioning — Marketing digital para negocios locales</title>
    <meta
      name="description"
      content="Manejamos tus redes sociales de principio a fin —estrategia, contenido, anuncios y atención a tus clientes— para que tú recuperes tu tiempo."
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://cyberpositioning.com/" />
    <meta property="og:title" content="Cyber Positioning — Tú enfócate en tu pasión. Nosotros hacemos que el mundo la vea." />
    <meta property="og:description" content="Agencia de marketing digital en Puerto Rico: redes sociales, anuncios, contenido y visibilidad en IA." />
    <meta property="og:image" content="https://cyberpositioning.com/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Newsreader:wght@300;400;500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
  </head>
```

- [ ] **Step 5: `vercel.json`**

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "cyberlanguage.io" }],
      "destination": "https://cyberpositioning.com/geo",
      "permanent": true
    },
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.cyberlanguage.io" }],
      "destination": "https://cyberpositioning.com/geo",
      "permanent": true
    }
  ],
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

(En Vercel, los archivos estáticos que existen se sirven antes que el
rewrite, así que `/brand/*` y `/og-image.png` no se ven afectados.)

- [ ] **Step 6: Verificar**

Run: `npm test`
Expected: PASS. El build todavía falla por `PRIVACY_POLICY_URL`; se resuelve
en Task 5.

- [ ] **Step 7: Commit (solo con autorización)**

```bash
git add src/styles/tokens.css src/components/BrandIcons.tsx public index.html vercel.json
git commit -m "feat(brand): add Cyber Positioning assets, tokens, QR and hosting config"
```

---

### Task 5: Esqueleto del sitio: i18n por página, ruteo, layout y GEO

Esta tarea deja el build en verde con todas las rutas funcionando. Las
páginas de contenido quedan como esqueletos que llenan las tareas 6 a 12.

**Files:**
- Delete: `src/i18n/es.ts`, `src/i18n/en.ts`, `src/components/AuditWidget.tsx`, `src/components/AuditWidget.css`, `src/components/Contact.tsx`, `src/components/Contact.css`, `src/lib/url.ts`
- Rename: `src/components/Hero.{tsx,css}` → `GeoHero.{tsx,css}`; `src/components/Services.{tsx,css}` → `GeoServices.{tsx,css}`
- Rewrite: `src/i18n/types.ts`, `src/i18n/LanguageContext.tsx`, `src/main.tsx`, `src/App.tsx`, `src/components/Header.{tsx,css}`, `src/components/Footer.{tsx,css}`, `src/components/ScheduleButton.tsx`, `src/pages/PrivacyPolicy.tsx`
- Modify: `src/components/Problem.tsx`, `Method.tsx`, `StrategyBand.tsx` (`copy.X` → `copy.geo.X`), `src/styles/global.css`
- Create:
  - i18n: `src/i18n/{es,en}/{index,site,geo,privacy}.ts`.
  - Contexto: `src/RouteContext.tsx`.
  - Componentes: `src/components/{SiteLayout,WhatsAppButton,CallButton,SocialIcons,PendingNote,ClosingCta,WhatsAppFab,PageIntro}.tsx` + `.css` donde corresponde.
  - Páginas: `src/pages/{HomePage,ServicesPage,WorkPage,AboutPage,ContactPage,LinksPage,GeoPage,NotFoundPage}.tsx`.

**Interfaces:**
- Consumes: Task 2 (`resolveRoute`, `pathFor`, `alternateHref`, `NAV_PAGES`, tipos) y Task 3 (config, `buildWhatsAppUrl`, `fillServiceTemplate`).
- Produces:
  - `useLanguage(): { language: Language; copy: Copy }`.
  - `useRoute(): ResolvedRoute`.
  - `<SiteLayout showWhatsAppFab?: boolean>`.
  - `<ScheduleButton variant label className?>`.
  - `<WhatsAppButton variant label services?: readonly string[] className?>`.
  - `<CallButton variant className?>`.
  - `<PendingNote>{string}</PendingNote>` y `<PendingText segments />`.
  - `<PageIntro eyebrow title lead? icon?>`.
  - `<ClosingCta title body eyebrow? secondary?: 'whatsapp' | 'call'>`.
  - `InstagramIcon`, `FacebookIcon` y `WhatsAppIcon` (props `{ size?: number; className?: string }`).
  - `Copy` con `site`, `nav`, `cta`, `whatsapp`, `footer`, `meta`, `notFound`, `geo` y `privacy`.

- [ ] **Step 1: Tipos de copy**

Reemplazar `src/i18n/types.ts` completo:

```ts
import type { NavPageId, RoutePage } from '../routes';

/** Bloque de mensaje con titular y desarrollo. */
export interface CopyBlock {
  title: string;
  body: string;
}

/**
 * Una sección de la política de privacidad. `summary` es la versión en
 * lenguaje simple y `body` el detalle (voz de marca: clara, sin jerga).
 */
export interface PolicySection {
  title: string;
  summary: string;
  body: string[];
}

export interface SiteCopy {
  brandName: string;
  geoBrandName: string;
  /** "CyberLanguage · por Cyber Positioning" (spec §6, GEO). */
  geoSeal: string;
  hours: string;
  /** Prefijo de los avisos de dato pendiente. */
  pendingLabel: string;
}

export interface NavCopy {
  primaryLabel: string;
  pages: Record<NavPageId, string>;
  scheduleCta: string;
  /** Texto accesible del switch, en el idioma de destino. */
  languageSwitchLabel: string;
  menuOpen: string;
  menuClose: string;
}

export interface CtaCopy {
  schedule: string;
  whatsapp: string;
  call: string;
  schedulingPending: string;
}

export interface WhatsAppCopy {
  genericMessage: string;
  /** Plantilla con `{service}`. */
  serviceMessage: string;
  /** " y " / " and ", para unir dos servicios. */
  conjunction: string;
  fabLabel: string;
}

export interface FooterCopy {
  tagline: string;
  pagesTitle: string;
  contactTitle: string;
  geoNote: string;
  privacy: string;
  rights: string;
}

export interface NotFoundCopy {
  title: string;
  body: string;
  cta: string;
}

export interface GeoCopy {
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    valueProp: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    positioning: string;
    messages: CopyBlock[];
  };
  method: {
    eyebrow: string;
    title: string;
    steps: CopyBlock[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: CopyBlock[];
  };
  strategy: CopyBlock;
  closing: {
    eyebrow: string;
    title: string;
    body: string;
  };
}

export interface PrivacyCopy {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  controllerPending: string;
  contactPending: string;
  languageNote: string;
  sections: PolicySection[];
  backToSite: string;
}

/**
 * Forma del copy del sitio. `es/index.ts` y `en/index.ts` la implementan, así
 * que agregar una clave obliga a traducirla en ambos idiomas.
 */
export interface Copy {
  site: SiteCopy;
  nav: NavCopy;
  cta: CtaCopy;
  whatsapp: WhatsAppCopy;
  footer: FooterCopy;
  /** <title> por página (spec §7). */
  meta: Record<RoutePage, string>;
  notFound: NotFoundCopy;
  geo: GeoCopy;
  privacy: PrivacyCopy;
}
```

- [ ] **Step 2: Copy ES — `src/i18n/es/site.ts`**

```ts
import type { CtaCopy, FooterCopy, NavCopy, NotFoundCopy, SiteCopy, WhatsAppCopy } from '../types';
import type { RoutePage } from '../../routes';

/** Textos globales. Botones y mensajes: brief web, "Textos de botones y mensajes". */
export const site: SiteCopy = {
  brandName: 'Cyber Positioning',
  geoBrandName: 'CyberLanguage',
  geoSeal: 'CyberLanguage · por Cyber Positioning',
  hours: 'Lunes a viernes, 9:00 a.m. – 5:00 p.m. (hora de Puerto Rico)',
  pendingLabel: 'Pendiente',
};

export const nav: NavCopy = {
  primaryLabel: 'Navegación principal',
  pages: {
    home: 'Inicio',
    services: 'Servicios',
    work: 'Nuestro trabajo',
    about: 'Nosotros',
    geo: 'GEO',
    contact: 'Contacto',
  },
  scheduleCta: 'Agendar',
  languageSwitchLabel: 'View this page in English',
  menuOpen: 'Abrir menú',
  menuClose: 'Cerrar menú',
};

export const cta: CtaCopy = {
  schedule: 'Agenda una llamada de 30 min',
  whatsapp: 'Escríbenos por WhatsApp',
  call: 'Llámanos',
  schedulingPending: 'Enlace de agenda pendiente de configurar',
};

export const whatsapp: WhatsAppCopy = {
  genericMessage: 'Hola, vengo de la web de Cyber Positioning y quiero información.',
  serviceMessage: 'Hola, vengo de la web de Cyber Positioning y quiero información sobre {service}.',
  conjunction: ' y ',
  fabLabel: 'Escríbenos por WhatsApp',
};

export const footer: FooterCopy = {
  tagline: 'Tú enfócate en tu pasión. Nosotros hacemos que el mundo la vea.',
  pagesTitle: 'Páginas',
  contactTitle: 'Contacto',
  geoNote: 'CyberLanguage es la línea de visibilidad en IA (GEO) de Cyber Positioning.',
  privacy: 'Política de privacidad',
  rights: 'Todos los derechos reservados.',
};

export const meta: Record<RoutePage, string> = {
  home: 'Cyber Positioning — Marketing digital para negocios locales',
  services: 'Servicios — Cyber Positioning',
  work: 'Nuestro trabajo — Cyber Positioning',
  about: 'Nosotros — Cyber Positioning',
  contact: 'Contacto — Cyber Positioning',
  links: 'Cyber Positioning — Links',
  geo: 'CyberLanguage — Visibilidad en IA por Cyber Positioning',
  privacy: 'Política de privacidad — Cyber Positioning',
  notFound: 'Página no encontrada — Cyber Positioning',
};

export const notFound: NotFoundCopy = {
  title: 'Esta página no existe.',
  body: 'Puede que el enlace esté mal escrito o que la página se haya movido.',
  cta: 'Volver a servicios',
};
```

- [ ] **Step 3: Copy EN — `src/i18n/en/site.ts`**

```ts
import type { CtaCopy, FooterCopy, NavCopy, NotFoundCopy, SiteCopy, WhatsAppCopy } from '../types';
import type { RoutePage } from '../../routes';

/** Global copy. Buttons and messages: web brief, "Textos de botones y mensajes". */
export const site: SiteCopy = {
  brandName: 'Cyber Positioning',
  geoBrandName: 'CyberLanguage',
  geoSeal: 'CyberLanguage · by Cyber Positioning',
  hours: 'Monday to Friday, 9:00 a.m. – 5:00 p.m. (Puerto Rico time)',
  pendingLabel: 'Pending',
};

export const nav: NavCopy = {
  primaryLabel: 'Main navigation',
  pages: {
    home: 'Home',
    services: 'Services',
    work: 'Our work',
    about: 'About',
    geo: 'GEO',
    contact: 'Contact',
  },
  scheduleCta: 'Book a call',
  languageSwitchLabel: 'Ver esta página en español',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
};

export const cta: CtaCopy = {
  schedule: 'Book a 30-min call',
  whatsapp: 'Message us on WhatsApp',
  call: 'Call us',
  schedulingPending: 'Scheduling link not configured yet',
};

export const whatsapp: WhatsAppCopy = {
  genericMessage: "Hi, I found Cyber Positioning online and I'd like some info.",
  serviceMessage: "Hi, I found Cyber Positioning online and I'd like info about {service}.",
  conjunction: ' and ',
  fabLabel: 'Message us on WhatsApp',
};

export const footer: FooterCopy = {
  tagline: 'You focus on your passion. We make sure the world sees it.',
  pagesTitle: 'Pages',
  contactTitle: 'Contact',
  geoNote: "CyberLanguage is Cyber Positioning's AI visibility (GEO) practice.",
  privacy: 'Privacy policy',
  rights: 'All rights reserved.',
};

export const meta: Record<RoutePage, string> = {
  home: 'Cyber Positioning — Digital marketing for local businesses',
  services: 'Services — Cyber Positioning',
  work: 'Our work — Cyber Positioning',
  about: 'About — Cyber Positioning',
  contact: 'Contact — Cyber Positioning',
  links: 'Cyber Positioning — Links',
  geo: 'CyberLanguage — AI visibility by Cyber Positioning',
  privacy: 'Privacy policy — Cyber Positioning',
  notFound: 'Page not found — Cyber Positioning',
};

export const notFound: NotFoundCopy = {
  title: "This page doesn't exist.",
  body: 'The link may be mistyped, or the page may have moved.',
  cta: 'Back to services',
};
```

- [ ] **Step 4: Copy GEO y privacidad (traslado literal)**

`src/i18n/es/geo.ts`:

```ts
import type { GeoCopy } from '../types';

/**
 * Copy de la línea GEO (CyberLanguage), trasladado tal cual desde la landing
 * anterior (`src/i18n/es.ts` en 55a7e4e). Los TODO de metodología y servicios
 * siguen vigentes.
 */
export const geo: GeoCopy = {
  hero: {
    badge: /* valor de es.ts → hero.badge */,
    titleLine1: /* hero.titleLine1 */,
    titleLine2: /* hero.titleLine2 */,
    valueProp: /* hero.valueProp */,
  },
  problem: /* objeto es.ts → problem, completo y literal, con sus comentarios */,
  method: /* objeto es.ts → method, completo y literal */,
  services: /* objeto es.ts → services, completo y literal */,
  strategy: /* objeto es.ts → strategy, completo y literal */,
  closing: {
    eyebrow: /* es.ts → contact.eyebrow */,
    title: /* es.ts → contact.title */,
    body: /* es.ts → contact.body */,
  },
};
```

**Instrucción exacta:** cada `/* … */` se reemplaza por el valor literal del
archivo viejo antes de borrarlo. Se obtiene con
`git show 55a7e4e:src/i18n/es.ts` (secciones en las líneas 26, 86, 105, 129,
155 y 160). Lo mismo para `src/i18n/en/geo.ts` desde
`git show 55a7e4e:src/i18n/en.ts` (líneas 23, 76, 93, 113, 136 y 141). No
queda ningún comentario `/* … */` en el archivo final.

`src/i18n/es/privacy.ts` y `src/i18n/en/privacy.ts`:

```ts
import type { PrivacyCopy } from '../types';

/** Temporal: política anterior trasladada literal. La reescribe Task 12 (spec §6, Privacidad). */
export const privacy: PrivacyCopy = /* objeto es.ts → privacy, completo y literal (línea 190 hasta su cierre) */;
```

Para EN, el objeto empieza en la línea 161 de `en.ts`.

- [ ] **Step 5: Ensamblado por idioma**

`src/i18n/es/index.ts`:

```ts
import type { Copy } from '../types';
import { cta, footer, meta, nav, notFound, site, whatsapp } from './site';
import { geo } from './geo';
import { privacy } from './privacy';

/**
 * Copy en español. Fuentes: brief de marca y brief web de Cyber Positioning
 * (temp/, no versionado). Cuando difieren en el copy, manda el de marca
 * (spec §1).
 */
export const es: Copy = { site, nav, cta, whatsapp, footer, meta, notFound, geo, privacy };
```

`src/i18n/en/index.ts`:

```ts
import type { Copy } from '../types';
import { cta, footer, meta, nav, notFound, site, whatsapp } from './site';
import { geo } from './geo';
import { privacy } from './privacy';

/** English copy. TODO: native-speaker review before launch (spec §10). */
export const en: Copy = { site, nav, cta, whatsapp, footer, meta, notFound, geo, privacy };
```

Después:

```bash
git rm -q src/i18n/es.ts src/i18n/en.ts
```

- [ ] **Step 6: Contextos de idioma y ruta**

Reemplazar `src/i18n/LanguageContext.tsx`:

```tsx
import { createContext, useContext, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Copy } from './types';
import type { Language } from './language';
import { es } from './es';
import { en } from './en';

export type { Language } from './language';

const COPY_BY_LANGUAGE: Record<Language, Copy> = { es, en };

interface LanguageContextValue {
  language: Language;
  copy: Copy;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  /** Resuelto desde la URL (routes.ts): el idioma no se detecta del navegador. */
  language: Language;
  children: ReactNode;
}

export function LanguageProvider({ language, children }: LanguageProviderProps) {
  // El atributo lang del documento debe seguir al idioma (accesibilidad y SEO).
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({ language, copy: COPY_BY_LANGUAGE[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  }
  return context;
}
```

`src/RouteContext.tsx`:

```tsx
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ResolvedRoute } from './routes';

const RouteContext = createContext<ResolvedRoute | null>(null);

interface RouteProviderProps {
  route: ResolvedRoute;
  children: ReactNode;
}

/** Cada navegación recarga la página (enlaces <a> normales), así que la ruta es fija por carga. */
export function RouteProvider({ route, children }: RouteProviderProps) {
  return <RouteContext.Provider value={route}>{children}</RouteContext.Provider>;
}

export function useRoute(): ResolvedRoute {
  const route = useContext(RouteContext);
  if (!route) {
    throw new Error('useRoute debe usarse dentro de <RouteProvider>');
  }
  return route;
}
```

- [ ] **Step 7: Componentes compartidos**

`src/components/ScheduleButton.tsx` (reemplazo completo):

```tsx
import { SCHEDULING_URL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

interface ScheduleButtonProps {
  variant: 'primary' | 'secondary';
  label: string;
  className?: string;
}

/**
 * CTA principal del sitio (mail del cliente: "CTA principal agendar").
 * Mientras SCHEDULING_URL esté vacío no se inventa un destino: el botón se
 * deshabilita y explica por qué.
 */
export function ScheduleButton({ variant, label, className }: ScheduleButtonProps) {
  const { copy } = useLanguage();
  const classes = `button button--${variant}${className ? ` ${className}` : ''}`;

  if (!SCHEDULING_URL) {
    return (
      <button type="button" className={classes} disabled title={copy.cta.schedulingPending}>
        {label}
      </button>
    );
  }

  return (
    <a className={classes} href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
```

`src/components/WhatsAppButton.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl, fillServiceTemplate } from '../lib/whatsapp';

interface WhatsAppButtonProps {
  variant: 'primary' | 'secondary';
  label: string;
  /** Servicios a nombrar en el mensaje prellenado. Vacío = mensaje genérico. */
  services?: readonly string[];
  className?: string;
}

export function WhatsAppButton({ variant, label, services = [], className }: WhatsAppButtonProps) {
  const { copy } = useLanguage();
  const message =
    services.length > 0
      ? fillServiceTemplate(copy.whatsapp.serviceMessage, services, copy.whatsapp.conjunction)
      : copy.whatsapp.genericMessage;
  const classes = `button button--${variant}${className ? ` ${className}` : ''}`;

  return (
    <a className={classes} href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
```

`src/components/CallButton.tsx`:

```tsx
import { PHONE_TEL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

interface CallButtonProps {
  variant: 'primary' | 'secondary';
  className?: string;
}

/** `tel:` marca directo en el celular (brief web, "Botón Llamar"). */
export function CallButton({ variant, className }: CallButtonProps) {
  const { copy } = useLanguage();
  const classes = `button button--${variant}${className ? ` ${className}` : ''}`;

  return (
    <a className={classes} href={`tel:${PHONE_TEL}`}>
      {copy.cta.call}
    </a>
  );
}
```

`src/components/SocialIcons.tsx`:

```tsx
interface IconProps {
  size?: number;
  className?: string;
}

/**
 * Iconos de redes con trazo fino y `currentColor`, para que tomen Porcelana
 * u Oro según el fondo, como el resto del sistema de marca.
 */
export function InstagramIcon({ size = 22, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 22, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon({ size = 22, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M3.5 20.5l1.3-4.2A8.6 8.6 0 1 1 8 19.4l-4.5 1.1z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.2c.3-.5.8-.5 1.1 0l.8 1.6c.1.3 0 .6-.2.8l-.5.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.5c.2-.2.5-.3.8-.2l1.6.8c.5.3.5.8 0 1.1-.6.5-1.4.8-2.2.6-2.4-.6-4.4-2.6-5-5-.2-.8.1-1.6.6-2.2z"
        fill="currentColor"
      />
    </svg>
  );
}
```

`src/components/PendingNote.tsx`:

```tsx
import type { TextSegment } from '../lib/pending';

/** Aviso de dato que falta. Deliberadamente imposible de pasar por alto (spec §10). */
export function PendingNote({ children }: { children: string }) {
  return (
    <p className="pending-note" role="note">
      {children}
    </p>
  );
}

/** Pinta un texto con huecos `[…]` marcando los huecos como pendientes. */
export function PendingText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.pending ? (
          <mark className="pending" key={index}>
            {segment.text}
          </mark>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  );
}
```

`src/components/PageIntro.tsx`:

```tsx
import './PageIntro.css';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Icono de sección del branding (public/brand/icons). */
  icon?: string;
}

/** Encabezado de las páginas interiores, sobre Tinta como el header. */
export function PageIntro({ eyebrow, title, lead, icon }: PageIntroProps) {
  return (
    <section className="section section--dark page-intro">
      <div className="container page-intro__inner">
        {icon && <img className="page-intro__icon" src={icon} alt="" width={96} height={96} />}
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-intro__title">{title}</h1>
          {lead && <p className="lead page-intro__lead">{lead}</p>}
        </div>
      </div>
    </section>
  );
}
```

`src/components/PageIntro.css`:

```css
.page-intro {
  padding-block: clamp(3rem, 2rem + 4vw, 5rem);
}

.page-intro__inner {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

/* Los iconos traen el fondo claro horneado: se presentan como ficha redonda. */
.page-intro__icon {
  flex-shrink: 0;
  border-radius: 50%;
}

.page-intro__title {
  max-width: 22ch;
}

.page-intro__lead {
  margin-top: var(--space-2);
  max-width: 60ch;
  opacity: 0.85;
}

@media (max-width: 640px) {
  .page-intro__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .page-intro__icon {
    width: 72px;
    height: 72px;
  }
}
```

`src/components/ClosingCta.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { CallButton } from './CallButton';
import { ScheduleButton } from './ScheduleButton';
import { WhatsAppButton } from './WhatsAppButton';
import './ClosingCta.css';

interface ClosingCtaProps {
  title: string;
  body: string;
  eyebrow?: string;
  /** Canal secundario junto a Agendar. Nosotros usa Llamar (brief web). */
  secondary?: 'whatsapp' | 'call';
}

export function ClosingCta({ title, body, eyebrow, secondary = 'whatsapp' }: ClosingCtaProps) {
  const { copy } = useLanguage();

  return (
    <section className="section section--dark closing-cta">
      <div className="container closing-cta__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="closing-cta__title">{title}</h2>
        <p className="lead closing-cta__body">{body}</p>
        <div className="closing-cta__actions">
          <ScheduleButton variant="primary" label={copy.cta.schedule} />
          {secondary === 'whatsapp' ? (
            <WhatsAppButton variant="secondary" label={copy.cta.whatsapp} />
          ) : (
            <CallButton variant="secondary" />
          )}
        </div>
      </div>
    </section>
  );
}
```

`src/components/ClosingCta.css`:

```css
.closing-cta__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.closing-cta__title {
  max-width: 24ch;
}

.closing-cta__body {
  margin-block: var(--space-3) var(--space-4);
  max-width: 56ch;
  opacity: 0.85;
}

.closing-cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
}
```

`src/components/WhatsAppFab.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { WhatsAppIcon } from './SocialIcons';
import './WhatsAppFab.css';

/** Botón flotante en todas las páginas menos Links (brief web, "Elementos globales"). */
export function WhatsAppFab() {
  const { copy } = useLanguage();

  return (
    <a
      className="whatsapp-fab"
      href={buildWhatsAppUrl(copy.whatsapp.genericMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.whatsapp.fabLabel}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
```

`src/components/WhatsAppFab.css`:

```css
.whatsapp-fab {
  position: fixed;
  right: max(16px, env(safe-area-inset-right));
  bottom: max(16px, env(safe-area-inset-bottom));
  z-index: 20;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-gold);
  color: var(--color-ink);
  box-shadow: var(--shadow-raised);
  transition: background-color 160ms ease, transform 160ms ease;
}

.whatsapp-fab:hover {
  background: var(--color-gold-hover);
  transform: translateY(-2px);
}

.whatsapp-fab:focus-visible {
  outline: 3px solid var(--color-porcelain);
  outline-offset: 3px;
}
```

`src/components/SiteLayout.tsx`:

```tsx
import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { WhatsAppFab } from './WhatsAppFab';

interface SiteLayoutProps {
  children: ReactNode;
  showWhatsAppFab?: boolean;
}

export function SiteLayout({ children, showWhatsAppFab = true }: SiteLayoutProps) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      {showWhatsAppFab && <WhatsAppFab />}
    </>
  );
}
```

- [ ] **Step 8: Header**

`src/components/Header.tsx` (reemplazo completo):

```tsx
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useRoute } from '../RouteContext';
import { NAV_PAGES, alternateHref, pathFor } from '../routes';
import { ScheduleButton } from './ScheduleButton';
import './Header.css';

/**
 * Menú del brief web ("Elementos globales"): páginas, ES/EN y "Agendar"
 * destacado. En móvil, hamburguesa.
 */
export function Header() {
  const { copy, language } = useLanguage();
  const route = useRoute();
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLanguage = language === 'es' ? 'en' : 'es';

  // El hash cambia al navegar por anclas después de cargar: se lee al hacer
  // click para que /servicios#anuncios lleve a /en/services#anuncios.
  function switchLanguage(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.location.assign(alternateHref(route, window.location.hash));
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__logo" href={pathFor('home', language)}>
          <img src="/brand/logo-horizontal.png" alt={copy.site.brandName} height={40} />
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">{menuOpen ? copy.nav.menuClose : copy.nav.menuOpen}</span>
          <span className="header__toggle-bars" aria-hidden="true" />
        </button>

        <nav id="primary-nav" className={`header__nav${menuOpen ? ' is-open' : ''}`} aria-label={copy.nav.primaryLabel}>
          <ul className="header__links">
            {NAV_PAGES.map((page) => (
              <li key={page}>
                <a href={pathFor(page, language)} aria-current={route.page === page ? 'page' : undefined}>
                  {copy.nav.pages[page]}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__actions">
            <a
              className="header__lang"
              href={alternateHref(route, '')}
              hrefLang={otherLanguage}
              lang={otherLanguage}
              aria-label={copy.nav.languageSwitchLabel}
              onClick={switchLanguage}
            >
              {otherLanguage.toUpperCase()}
            </a>
            <ScheduleButton variant="primary" label={copy.nav.scheduleCta} className="header__cta" />
          </div>
        </nav>
      </div>
    </header>
  );
}
```

`src/components/Header.css` (reemplazo completo):

```css
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--color-ink);
  color: var(--color-porcelain);
  border-bottom: 1px solid rgba(237, 239, 243, 0.12);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 72px;
}

.header__logo {
  display: inline-flex;
  flex-shrink: 0;
}

.header__logo img {
  display: block;
  height: 40px;
  width: auto;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-left: auto;
}

.header__links {
  display: flex;
  gap: var(--space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.header__links a {
  color: var(--color-porcelain);
  font-size: 0.9375rem;
  opacity: 0.85;
}

.header__links a:hover,
.header__links a[aria-current='page'] {
  color: var(--color-gold);
  opacity: 1;
  text-decoration: none;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.header__lang {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  letter-spacing: 0.12em;
  color: var(--color-porcelain);
  padding: var(--space-1);
}

.header__cta {
  padding-block: 10px;
}

/* Botón hamburguesa: solo visible en móvil. */
.header__toggle {
  display: none;
  margin-left: auto;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-porcelain);
}

.header__toggle-bars,
.header__toggle-bars::before,
.header__toggle-bars::after {
  display: block;
  width: 22px;
  height: 2px;
  margin-inline: auto;
  background: currentColor;
  border-radius: 1px;
}

.header__toggle-bars {
  position: relative;
}

.header__toggle-bars::before,
.header__toggle-bars::after {
  content: '';
  position: absolute;
  left: 0;
}

.header__toggle-bars::before {
  top: -7px;
}

.header__toggle-bars::after {
  top: 7px;
}

@media (max-width: 960px) {
  .header__toggle {
    display: block;
  }

  .header__nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-3);
    padding: var(--space-3) var(--content-gutter) var(--space-4);
    background: var(--color-ink);
    border-bottom: 1px solid rgba(237, 239, 243, 0.12);
  }

  .header__nav.is-open {
    display: flex;
  }

  .header__links {
    flex-direction: column;
    gap: var(--space-2);
  }

  .header__links a {
    font-size: 1.125rem;
  }

  .header__actions {
    justify-content: space-between;
  }
}
```

- [ ] **Step 9: Footer**

`src/components/Footer.tsx` (reemplazo completo):

```tsx
import { CONTACT_EMAIL, PHONE_DISPLAY, SOCIAL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { NAV_PAGES, pathFor } from '../routes';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import './Footer.css';

/** Footer del brief web ("Elementos globales"). */
export function Footer() {
  const { copy, language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/brand/logo-horizontal.png" alt={copy.site.brandName} height={40} />
          <p className="footer__tagline">{copy.footer.tagline}</p>
          <div className="footer__social">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <nav aria-label={copy.footer.pagesTitle}>
          <p className="footer__title">{copy.footer.pagesTitle}</p>
          <ul className="footer__list">
            {NAV_PAGES.map((page) => (
              <li key={page}>
                <a href={pathFor(page, language)}>{copy.nav.pages[page]}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="footer__title">{copy.footer.contactTitle}</p>
          <ul className="footer__list">
            <li>
              <a href={buildWhatsAppUrl(copy.whatsapp.genericMessage)} target="_blank" rel="noopener noreferrer">
                WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li className="footer__hours">{copy.site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__legal">
        <p className="footer__geo">
          <a href={pathFor('geo', language)}>{copy.footer.geoNote}</a>
        </p>
        <p>
          <a href={pathFor('privacy', language)}>{copy.footer.privacy}</a>
          {' · '}© {year} {copy.site.brandName}. {copy.footer.rights}
        </p>
      </div>
    </footer>
  );
}
```

`src/components/Footer.css` (reemplazo completo):

```css
.footer {
  background: var(--color-ink);
  color: var(--color-porcelain);
  padding-block: var(--space-6) var(--space-4);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr;
  gap: var(--space-4);
}

.footer__brand img {
  display: block;
  height: 40px;
  width: auto;
}

.footer__tagline {
  margin-top: var(--space-2);
  max-width: 34ch;
  opacity: 0.8;
}

.footer__social {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.footer__social a {
  color: var(--color-porcelain);
}

.footer__social a:hover {
  color: var(--color-gold);
}

.footer__title {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-2);
}

.footer__list {
  display: grid;
  gap: var(--space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer__list a {
  color: var(--color-porcelain);
  opacity: 0.85;
}

.footer__list a:hover {
  color: var(--color-gold);
  opacity: 1;
}

.footer__hours {
  opacity: 0.7;
  font-size: 0.9375rem;
}

.footer__legal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-2);
  margin-top: var(--space-6);
  padding-top: var(--space-3);
  border-top: 1px solid rgba(237, 239, 243, 0.12);
  font-size: 0.875rem;
  opacity: 0.75;
}

.footer__legal a {
  color: var(--color-porcelain);
}

@media (max-width: 760px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 10: Estilos globales compartidos**

Agregar al final de `src/styles/global.css`:

```css
/* Botón secundario sobre fondo oscuro: el borde Tinta desaparece sobre Tinta. */
.section--dark .button--secondary {
  border-color: var(--color-porcelain);
  color: var(--color-porcelain);
}

.section--dark .button--secondary:hover {
  background: var(--color-porcelain);
  color: var(--color-ink);
}

/* Datos pendientes (spec §10): visibles a propósito, en el color de error. */
.pending-note {
  padding: var(--space-2) var(--space-3);
  border: 1px dashed var(--color-error);
  border-radius: var(--radius-button);
  color: var(--color-error);
  font-size: 0.9375rem;
  background: rgba(192, 57, 43, 0.06);
}

.pending {
  padding: 0 4px;
  border-radius: 4px;
  background: rgba(192, 57, 43, 0.12);
  color: var(--color-error);
}

.section--dark .pending-note,
.section--dark .pending {
  color: #f1a097;
  border-color: #f1a097;
}

/* Ningún contenido ancho debe empujar la página en móvil (spec, "Responsive"). */
img {
  max-width: 100%;
}
```

Si `.visually-hidden` ya existe en `global.css` (sí existe), no hay que
duplicarlo.

- [ ] **Step 11: Componentes GEO**

```bash
git mv src/components/Hero.tsx src/components/GeoHero.tsx
git mv src/components/Hero.css src/components/GeoHero.css
git mv src/components/Services.tsx src/components/GeoServices.tsx
git mv src/components/Services.css src/components/GeoServices.css
git rm -q src/components/AuditWidget.tsx src/components/AuditWidget.css src/components/Contact.tsx src/components/Contact.css src/lib/url.ts
```

`src/components/GeoHero.tsx` (reemplazo completo):

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { AnswerMark } from './BrandIcons';
import { ScheduleButton } from './ScheduleButton';
import { WhatsAppButton } from './WhatsAppButton';
import './GeoHero.css';

/**
 * Hero de la línea GEO. El widget de auditoría salió del sitio (mail del
 * cliente: el análisis GEO automático queda para después), así que el CTA
 * principal es Agendar.
 */
export function GeoHero() {
  const { copy } = useLanguage();
  const { hero } = copy.geo;

  return (
    <section className="section section--dark hero" id="top">
      <div className="container hero__inner">
        <p className="hero__seal">{copy.site.geoSeal}</p>
        <p className="hero__badge">
          <AnswerMark size={15} className="hero__badge-mark" />
          {hero.badge}
        </p>

        <h1 className="hero__title">
          <span className="hero__title-line">{hero.titleLine1}</span>
          <span className="hero__title-line hero__title-line--accent">{hero.titleLine2}</span>
        </h1>

        <p className="lead hero__value-prop">{hero.valueProp}</p>

        <div className="hero__actions">
          <ScheduleButton variant="primary" label={copy.cta.schedule} />
          <WhatsAppButton variant="secondary" label={copy.cta.whatsapp} services={[copy.site.geoBrandName]} />
        </div>
      </div>
    </section>
  );
}
```

En `src/components/GeoHero.css`:
- Borrar la regla `.hero__secondary-cta { … }`.
- En `.hero__badge` agregar `flex-wrap: wrap; justify-content: center; max-width: 100%;` (arregla el desborde en móvil documentado en el README).
- Agregar al final:

```css
.hero__seal {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-porcelain);
  opacity: 0.7;
  margin-bottom: var(--space-2);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
}
```

`src/components/GeoServices.tsx`: renombrar `export function Services()` a
`export function GeoServices()`, el import CSS a `'./GeoServices.css'`, el
`id="servicios"` a `id="servicios-geo"` y `copy.services.` a
`copy.geo.services.`. Actualizar el comentario del encabezado: "Servicios de
la línea GEO (brief de CyberLanguage §06)".

En `Problem.tsx`, `Method.tsx` y `StrategyBand.tsx`:

```bash
sed -i 's/copy\.problem\./copy.geo.problem./g' src/components/Problem.tsx
sed -i 's/copy\.method\./copy.geo.method./g' src/components/Method.tsx
sed -i 's/copy\.strategy\./copy.geo.strategy./g' src/components/StrategyBand.tsx
```

- [ ] **Step 12: Páginas**

`src/pages/GeoPage.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { GeoHero } from '../components/GeoHero';
import { GeoServices } from '../components/GeoServices';
import { Method } from '../components/Method';
import { Problem } from '../components/Problem';
import { SiteLayout } from '../components/SiteLayout';
import { StrategyBand } from '../components/StrategyBand';

/** Página de CyberLanguage, la línea GEO (spec §6). Destino del redirect de cyberlanguage.io. */
export function GeoPage() {
  const { copy } = useLanguage();
  const { closing } = copy.geo;

  return (
    <SiteLayout>
      <GeoHero />
      <Problem />
      <Method />
      <GeoServices />
      <StrategyBand />
      <ClosingCta eyebrow={closing.eyebrow} title={closing.title} body={closing.body} />
    </SiteLayout>
  );
}
```

`src/pages/NotFoundPage.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { SiteLayout } from '../components/SiteLayout';
import { pathFor } from '../routes';

/** 404 del brief web: lleva a Servicios. */
export function NotFoundPage() {
  const { copy, language } = useLanguage();

  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>{copy.notFound.title}</h1>
          <p className="lead" style={{ marginBlock: 'var(--space-3)' }}>
            {copy.notFound.body}
          </p>
          <a className="button button--primary" href={pathFor('services', language)}>
            {copy.notFound.cta}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
```

Esqueletos que llenan las tareas siguientes. Hay que crear los seis
explícitamente: `src/pages/HomePage.tsx`, `ServicesPage.tsx`, `WorkPage.tsx`,
`AboutPage.tsx`, `ContactPage.tsx` y `LinksPage.tsx`. Cada uno con esta forma,
cambiando el nombre de la función y la clave de `meta`
(`home`/`services`/`work`/`about`/`contact`/`links`):

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { SiteLayout } from '../components/SiteLayout';

export function HomePage() {
  const { copy } = useLanguage();

  return (
    <SiteLayout>
      <section className="section">
        <div className="container">
          <h1>{copy.meta.home}</h1>
        </div>
      </section>
    </SiteLayout>
  );
}
```

`src/pages/PrivacyPolicy.tsx`:
- Cambiar `<Header />`, `<main>…</main>` y `<Footer />` por `<SiteLayout>…</SiteLayout>`. El contenido de `<main>` queda como hijo directo.
- Borrar el `useEffect` que pone `document.title` (ahora lo hace `App`) y el import de `useEffect`.
- Borrar la función local `PendingNotice` y usar `PendingNote` de `../components/PendingNote`.
- Cambiar `href="/"` del botón por `href={pathFor('home', language)}`, tomando `language` de `useLanguage()` e importando `pathFor` de `'../routes'`.
- Borrar los imports de `Header` y `Footer`.

- [ ] **Step 13: App y entrypoint**

`src/App.tsx` (reemplazo completo):

```tsx
import { useEffect } from 'react';
import type { ComponentType } from 'react';
import { useLanguage } from './i18n/LanguageContext';
import { RouteProvider } from './RouteContext';
import type { ResolvedRoute, RoutePage } from './routes';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GeoPage } from './pages/GeoPage';
import { HomePage } from './pages/HomePage';
import { LinksPage } from './pages/LinksPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';

/**
 * Ruteo mínimo sin librería (spec §2): los enlaces son <a> normales, cada
 * navegación recarga y la ruta se resuelve una vez en main.tsx.
 * En producción el host reescribe todo a index.html (vercel.json).
 */
const PAGES: Record<RoutePage, ComponentType> = {
  home: HomePage,
  services: ServicesPage,
  work: WorkPage,
  about: AboutPage,
  contact: ContactPage,
  links: LinksPage,
  geo: GeoPage,
  privacy: PrivacyPolicy,
  notFound: NotFoundPage,
};

interface AppProps {
  route: ResolvedRoute;
}

export default function App({ route }: AppProps) {
  const Page = PAGES[route.page];

  return (
    <RouteProvider route={route}>
      <DocumentTitle page={route.page} />
      <Page />
    </RouteProvider>
  );
}

function DocumentTitle({ page }: { page: RoutePage }) {
  const { copy } = useLanguage();

  useEffect(() => {
    document.title = copy.meta[page];
  }, [copy, page]);

  return null;
}
```

`src/main.tsx` (reemplazo completo):

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './i18n/LanguageContext';
import { resolveRoute } from './routes';
import App from './App';
import './styles/global.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No se encontró el elemento #root en index.html');
}

const route = resolveRoute(window.location.pathname);

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider language={route.language}>
      <App route={route} />
    </LanguageProvider>
  </StrictMode>,
);
```

- [ ] **Step 14: Verificar**

Run: `npm test && npm run build`
Expected: tests PASS y el build sin errores de TypeScript.

Run: `grep -rn "PRIVACY_POLICY_URL\|toggleLanguage\|copy\.hero\.\|copy\.contact\.\|AuditWidget" src/`
Expected: sin resultados.

Run: `npm run dev`. Abrir y recorrer `/`, `/en`, `/geo`, `/en/geo`,
`/privacidad`, `/nada` y `/en/nada`. Verificar:
- El header muestra el logo CP y el menú. El switch lleva al equivalente
  (`/geo` → `/en/geo`; `/nada` → `/en`).
- A 375px el menú se abre y se cierra con la hamburguesa.
- `/geo` muestra el sello "CyberLanguage · por Cyber Positioning", no tiene
  widget de auditoría y "Agenda una llamada de 30 min" abre Cal.com en una
  pestaña nueva.
- El botón flotante de WhatsApp aparece y abre wa.me con el mensaje genérico.
- La pestaña muestra el título de `meta` correspondiente.

- [ ] **Step 15: Commit (solo con autorización)**

```bash
git add -A src index.html
git commit -m "refactor: restructure into bilingual multi-page site with GEO page"
```

---

### Task 6: Servicios

**Files:**
- Create: `src/data/services.ts`, `src/i18n/{es,en}/services.ts`, `src/components/ServiceAccordion.{tsx,css}`, `src/pages/ServicesPage.css`
- Modify: `src/i18n/types.ts`, `src/i18n/{es,en}/index.ts`, `src/pages/ServicesPage.tsx`
- Test: `src/data/services.test.ts`

**Interfaces:**
- Consumes:
  - `serviceFromHash` (Task 3).
  - `WhatsAppButton`, `PageIntro` y `ClosingCta` (Task 5).
- Produces:
  - `type ServiceId = 'redes' | 'anuncios' | 'comunidad' | 'produccion'`.
  - `SERVICE_IDS: readonly ServiceId[]`, `MAIN_SERVICES` y `INDIVIDUAL_SERVICES`.
  - `RECOMMENDED_SERVICE: ServiceId`.
  - `ADD_ON_TARGETS: readonly ServiceId[]`.
  - `copy.services.items[id].name` y `.summary`, que usa Home en Task 7.

- [ ] **Step 1: Test de datos que falla**

`src/data/services.test.ts`:

```ts
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
```

Run: `npm test`
Expected: FAIL (no existen `./services` ni `es.services`).

- [ ] **Step 2: Datos**

`src/data/services.ts`:

```ts
/** Ids = anclas públicas (spec §6, Servicios). Se enlazan desde anuncios: no cambiarlos. */
export type ServiceId = 'redes' | 'anuncios' | 'comunidad' | 'produccion';

export const SERVICE_IDS: readonly ServiceId[] = ['redes', 'anuncios', 'comunidad', 'produccion'];

export const MAIN_SERVICES: readonly ServiceId[] = ['redes', 'anuncios', 'comunidad'];

/** "Servicios individuales": para quien solo necesita producción (brief web). */
export const INDIVIDUAL_SERVICES: readonly ServiceId[] = ['produccion'];

export const RECOMMENDED_SERVICE: ServiceId = 'redes';

/** Servicio a impulsar: peso visual alto (brief web). */
export const FEATURED_SERVICE: ServiceId = 'anuncios';

/** Plegables que terminan con el recuadro "+ Atención a tu comunidad". */
export const ADD_ON_TARGETS: readonly ServiceId[] = ['redes', 'anuncios'];
```

- [ ] **Step 3: Tipos**

En `src/i18n/types.ts`, agregar al inicio
`import type { ServiceId } from '../data/services';`, más estas interfaces:

```ts
export interface ServiceCopy {
  name: string;
  /** Descripción corta: texto del "recuadro hover" del brief de marca. */
  summary: string;
  benefits: string[];
  conditions: string | null;
}

export interface ServicesCopy {
  eyebrow: string;
  title: string;
  intro: string;
  recommended: string;
  individualTitle: string;
  benefitsLabel: string;
  conditionsLabel: string;
  wantThis: string;
  addOn: {
    title: string;
    body: string;
    cta: string;
  };
  items: Record<ServiceId, ServiceCopy>;
  closing: {
    title: string;
    body: string;
  };
}
```

Agregar `services: ServicesCopy;` en `Copy`, debajo de `notFound`.

- [ ] **Step 4: Copy ES — `src/i18n/es/services.ts`**

```ts
import type { ServicesCopy } from '../types';

/** Brief de marca §05 (nombres) y §06 "Servicios" (textos). Sin precios (brief web). */
export const services: ServicesCopy = {
  eyebrow: 'Servicios',
  title: 'Elige por dónde empezar.',
  intro: 'Todo lo que hacemos tiene un mismo objetivo: que más personas conozcan tu negocio y lo elijan.',
  recommended: 'Recomendado',
  individualTitle: 'Servicios individuales',
  benefitsLabel: 'Qué incluye',
  conditionsLabel: 'Condiciones',
  wantThis: 'Quiero este servicio',
  addOn: {
    title: '¿Sin tiempo para responder mensajes?',
    body: 'Añade Atención a tu comunidad y no pierdas ni una consulta.',
    cta: '+ Atención a tu comunidad',
  },
  items: {
    redes: {
      name: 'Manejo integral de redes sociales',
      summary: 'Nos encargamos de tus redes de principio a fin, para que tú no tengas que pensar en ellas.',
      benefits: [
        'Estrategia y calendario de contenido cada mes',
        'Fotos, videos y diseños creados para tu negocio',
        'Publicación constante en Facebook e Instagram',
        'Reporte mensual en lenguaje claro',
        'Ajustes continuos según lo que da resultados',
      ],
      conditions:
        'Comenzamos con un periodo inicial de 3 meses, el tiempo real que toman las redes en dar resultados. Otras plataformas, como TikTok, se acuerdan según tu negocio.',
    },
    anuncios: {
      name: 'Anuncios en redes sociales',
      summary: 'Ponemos tu negocio frente a nuevos clientes en tu zona, con anuncios que se miden y se ajustan.',
      benefits: [
        'Anuncios diseñados para tu objetivo: visitas, mensajes o reservas',
        'Público definido por zona, edad e intereses',
        'Seguimiento y ajustes durante la campaña',
        'Reporte de cuánto costó cada resultado',
      ],
      conditions: 'Cotizamos según tu objetivo, el contenido y la duración de la campaña.',
    },
    comunidad: {
      name: 'Atención a tu comunidad',
      summary: 'Una persona dedicada a responder comentarios y mensajes en nombre de tu negocio.',
      benefits: [
        'Respuestas rápidas con el tono de tu marca',
        'Mensajes organizados para que no se pierda ninguna consulta',
        'Clientes que se sienten atendidos y regresan',
      ],
      conditions: 'Disponible como complemento del Manejo integral de redes sociales.',
    },
    produccion: {
      name: 'Producción de contenido',
      summary: '¿Solo necesitas fotos, videos o diseños? Los producimos por proyecto.',
      benefits: [
        'Sesiones de fotografía y video en tu negocio',
        'Diseño gráfico para redes, menús, promociones y más',
        'Archivos listos para usar donde los necesites',
      ],
      conditions: null,
    },
  },
  closing: {
    title: '¿No sabes cuál elegir?',
    body: 'Cuéntanos de tu negocio en una llamada de 30 minutos y te recomendamos por dónde empezar.',
  },
};
```

- [ ] **Step 5: Copy EN — `src/i18n/en/services.ts`**

```ts
import type { ServicesCopy } from '../types';

/** Brand brief §05 (names) and §06 "Servicios" (copy). No prices (web brief). */
export const services: ServicesCopy = {
  eyebrow: 'Services',
  title: 'Choose where to start.',
  intro: 'Everything we do has one goal: more people discovering your business and choosing it.',
  recommended: 'Recommended',
  individualTitle: 'Individual services',
  benefitsLabel: "What's included",
  conditionsLabel: 'Terms',
  wantThis: 'I want this service',
  addOn: {
    title: 'No time to answer messages?',
    body: "Add Community Care and don't miss a single inquiry.",
    cta: '+ Community Care',
  },
  items: {
    redes: {
      name: 'Full Social Media Management',
      summary: "We handle your social media from start to finish, so you don't have to think about it.",
      benefits: [
        'Monthly strategy and content calendar',
        'Photos, videos and designs made for your business',
        'Consistent posting on Facebook and Instagram',
        'A monthly report in plain language',
        'Ongoing adjustments based on what works',
      ],
      conditions:
        'We start with an initial 3-month period — the real time social media takes to show results. Other platforms, like TikTok, are agreed based on your business.',
    },
    anuncios: {
      name: 'Social Media Ads',
      summary: 'We put your business in front of new customers in your area, with ads that are measured and adjusted.',
      benefits: [
        'Ads built for your goal: visits, messages or bookings',
        'Audience defined by area, age and interests',
        'Monitoring and adjustments during the campaign',
        'A report on what each result cost',
      ],
      conditions: 'We quote based on your goal, the content and the length of the campaign.',
    },
    comunidad: {
      name: 'Community Care',
      summary: "A dedicated person answering comments and messages on your business's behalf.",
      benefits: [
        "Fast replies in your brand's voice",
        'Organized messages so no inquiry gets lost',
        'Customers who feel looked after — and come back',
      ],
      conditions: 'Available as an add-on to Full Social Media Management.',
    },
    produccion: {
      name: 'Content Production',
      summary: 'Just need photos, videos or designs? We produce them per project.',
      benefits: [
        'Photo and video sessions at your business',
        'Graphic design for social media, menus, promotions and more',
        'Files ready to use wherever you need them',
      ],
      conditions: null,
    },
  },
  closing: {
    title: 'Not sure which one to pick?',
    body: "Tell us about your business on a 30-minute call and we'll recommend where to start.",
  },
};
```

En `src/i18n/es/index.ts` y `src/i18n/en/index.ts`, agregar
`import { services } from './services';` y sumar `services` al objeto
(después de `notFound`).

- [ ] **Step 6: Correr los tests de datos**

Run: `npm test`
Expected: PASS.

- [ ] **Step 7: Plegable**

`src/components/ServiceAccordion.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import type { ServiceId } from '../data/services';
import { WhatsAppButton } from './WhatsAppButton';
import './ServiceAccordion.css';

interface ServiceAccordionProps {
  id: ServiceId;
  open: boolean;
  onToggle: (id: ServiceId) => void;
  recommended?: boolean;
  featured?: boolean;
  /** Muestra al final el recuadro "+ Atención a tu comunidad". */
  withAddOn?: boolean;
}

/**
 * Un servicio como plegable (brief web, "Comportamiento de cada servicio").
 * La descripción corta se ve siempre: en móvil no hay hover, y nada puede
 * depender de él (spec, desviación avisada). Se abre con click, tap o teclado.
 */
export function ServiceAccordion({ id, open, onToggle, recommended, featured, withAddOn }: ServiceAccordionProps) {
  const { copy } = useLanguage();
  const { services } = copy;
  const item = services.items[id];
  const panelId = `${id}-panel`;
  const classes = ['service', featured ? 'service--featured' : '', open ? 'is-open' : ''].filter(Boolean).join(' ');

  return (
    <article className={classes} id={id}>
      <h3 className="service__heading">
        <button
          type="button"
          className="service__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggle(id)}
        >
          <span className="service__name">
            {item.name}
            {recommended && <span className="service__badge">{services.recommended}</span>}
          </span>
          <span className="service__chevron" aria-hidden="true" />
        </button>
      </h3>
      <p className="service__summary">{item.summary}</p>

      <div className="service__panel" id={panelId} hidden={!open}>
        <p className="eyebrow">{services.benefitsLabel}</p>
        <ul className="service__benefits">
          {item.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>

        {item.conditions && (
          <p className="service__conditions">
            <strong>{services.conditionsLabel}:</strong> {item.conditions}
          </p>
        )}

        <WhatsAppButton variant="primary" label={services.wantThis} services={[item.name]} />

        {withAddOn && (
          <aside className="service__addon">
            <p className="service__addon-title">{services.addOn.title}</p>
            <p>{services.addOn.body}</p>
            <WhatsAppButton
              variant="secondary"
              label={services.addOn.cta}
              services={[item.name, services.items.comunidad.name]}
            />
          </aside>
        )}
      </div>
    </article>
  );
}
```

`src/components/ServiceAccordion.css`:

```css
.service {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  background: var(--color-white);
  padding: var(--space-3);
  scroll-margin-top: 88px;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

/* Hover = solo énfasis visual; la información ya está visible. */
.service:hover,
.service.is-open {
  border-color: var(--color-gold);
  box-shadow: var(--shadow-raised);
}

/* Anuncios: servicio a impulsar, peso visual alto (brief web). */
.service--featured {
  background: var(--color-ink);
  color: var(--color-porcelain);
  border-color: var(--color-ink);
}

.service__heading {
  margin: 0;
  font-size: var(--text-h3);
}

.service__toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  width: 100%;
  padding: 0;
  background: none;
  border: none;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.service__toggle:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 4px;
  border-radius: 4px;
}

.service__name {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-1);
}

.service__badge {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--color-gold);
  color: var(--color-ink);
}

.service__chevron {
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform 160ms ease;
}

.service.is-open .service__chevron {
  transform: rotate(-135deg);
}

.service__summary {
  margin-top: var(--space-1);
  opacity: 0.85;
}

.service__panel {
  display: grid;
  gap: var(--space-2);
  justify-items: start;
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.service--featured .service__panel {
  border-top-color: rgba(237, 239, 243, 0.2);
}

.service--featured .eyebrow {
  color: var(--color-gold);
}

.service--featured .button--secondary {
  border-color: var(--color-porcelain);
  color: var(--color-porcelain);
}

.service__panel .eyebrow {
  margin: 0;
}

.service__benefits {
  margin: 0;
  padding-left: 1.2em;
  display: grid;
  gap: 4px;
}

.service__conditions {
  font-size: 0.9375rem;
  opacity: 0.85;
}

.service__addon {
  display: grid;
  gap: var(--space-1);
  justify-items: start;
  width: 100%;
  margin-top: var(--space-2);
  padding: var(--space-3);
  border: 1px solid var(--color-gold);
  border-radius: var(--radius-card);
  background: rgba(192, 163, 101, 0.08);
}

.service__addon-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
}
```

- [ ] **Step 8: Página**

`src/pages/ServicesPage.tsx` (reemplaza el esqueleto):

```tsx
import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { PageIntro } from '../components/PageIntro';
import { ServiceAccordion } from '../components/ServiceAccordion';
import { SiteLayout } from '../components/SiteLayout';
import {
  ADD_ON_TARGETS,
  FEATURED_SERVICE,
  INDIVIDUAL_SERVICES,
  MAIN_SERVICES,
  RECOMMENDED_SERVICE,
  SERVICE_IDS,
} from '../data/services';
import type { ServiceId } from '../data/services';
import { serviceFromHash } from '../lib/anchors';
import './ServicesPage.css';

/** Los 4 servicios en una página, sin precios (brief web, "Servicios"). */
export function ServicesPage() {
  const { copy } = useLanguage();
  const [openIds, setOpenIds] = useState<ReadonlySet<ServiceId>>(() => initialOpen(window.location.hash));

  // Un enlace con ancla (#anuncios) abre ese plegable, también si se navega
  // a otra ancla sin recargar.
  useEffect(() => {
    function onHashChange() {
      const id = serviceFromHash(window.location.hash, SERVICE_IDS);
      if (id) setOpenIds((current) => new Set(current).add(id));
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function toggle(id: ServiceId) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function renderService(id: ServiceId) {
    return (
      <ServiceAccordion
        key={id}
        id={id}
        open={openIds.has(id)}
        onToggle={toggle}
        recommended={id === RECOMMENDED_SERVICE}
        featured={id === FEATURED_SERVICE}
        withAddOn={ADD_ON_TARGETS.includes(id)}
      />
    );
  }

  return (
    <SiteLayout>
      <PageIntro
        eyebrow={copy.services.eyebrow}
        title={copy.services.title}
        lead={copy.services.intro}
        icon="/brand/icons/servicios.png"
      />
      <section className="section section--light">
        <div className="container services-page__list">{MAIN_SERVICES.map(renderService)}</div>
      </section>
      <section className="section">
        <div className="container services-page__list">
          <h2 className="services-page__group-title">{copy.services.individualTitle}</h2>
          {INDIVIDUAL_SERVICES.map(renderService)}
        </div>
      </section>
      <ClosingCta title={copy.services.closing.title} body={copy.services.closing.body} />
    </SiteLayout>
  );
}

function initialOpen(hash: string): ReadonlySet<ServiceId> {
  const id = serviceFromHash(hash, SERVICE_IDS);
  return new Set(id ? [id] : []);
}
```

`src/pages/ServicesPage.css`:

```css
.services-page__list {
  display: grid;
  gap: var(--space-3);
  max-width: 860px;
}

.services-page__group-title {
  margin-bottom: var(--space-1);
}
```

- [ ] **Step 9: Verificar**

Run: `npm test && npm run build`
Expected: PASS, sin errores.

Run: `npm run dev`. Verificar:
- `/servicios`: los tres principales están en orden y "Recomendado" aparece
  en Manejo integral. Anuncios va sobre Tinta. Producción está bajo
  "Servicios individuales".
- Tab hasta un servicio y Enter: se abre. Enter de nuevo: se cierra.
- `/servicios#anuncios`: carga con Anuncios abierto y la vista en esa
  tarjeta.
- "Quiero este servicio" en Anuncios abre wa.me con "…sobre Anuncios en redes
  sociales." El recuadro de Manejo integral manda "…sobre Manejo integral de
  redes sociales y Atención a tu comunidad."
- `/servicios#%E0%A4%A` carga sin errores en consola y sin nada abierto.
- `/en/services#anuncios`: lo mismo en inglés.
- A 375px no hay scroll horizontal.

- [ ] **Step 10: Commit (solo con autorización)**

```bash
git add src/data/services.ts src/data/services.test.ts src/i18n src/components/ServiceAccordion.* src/pages/ServicesPage.*
git commit -m "feat(services): add services page with accessible accordions"
```

---

### Task 7: Inicio

**Files:**
- Create: `src/i18n/{es,en}/home.ts`, `src/pages/HomePage.css`
- Modify: `src/i18n/types.ts`, `src/i18n/{es,en}/index.ts`, `src/pages/HomePage.tsx`

**Interfaces:**
- Consumes:
  - `SERVICE_IDS` y `copy.services.items` (Task 6).
  - `pathFor` (Task 2).
  - `ScheduleButton`, `WhatsAppButton` y `ClosingCta` (Task 5).

- [ ] **Step 1: Tipos**

En `src/i18n/types.ts`:

```ts
export interface HomeCopy {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  pains: {
    title: string;
    items: string[];
    closing: string;
  };
  services: {
    eyebrow: string;
    title: string;
    cards: Record<ServiceId, string>;
    cardCta: string;
  };
  geo: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  why: {
    eyebrow: string;
    title: string;
    items: CopyBlock[];
  };
  work: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  closing: {
    title: string;
    body: string;
  };
}
```

Agregar `home: HomeCopy;` en `Copy`.

- [ ] **Step 2: Copy ES — `src/i18n/es/home.ts`**

```ts
import type { HomeCopy } from '../types';

/** Brief de marca §06 "Inicio". El bloque GEO se deriva del copy de CyberLanguage. */
export const home: HomeCopy = {
  hero: {
    eyebrow: 'Agencia de marketing digital · Puerto Rico',
    title: 'Tú enfócate en tu pasión. Nosotros hacemos que el mundo la vea.',
    subtitle:
      'Manejamos tus redes sociales de principio a fin —estrategia, contenido, anuncios y atención a tus clientes— para que tú recuperes tu tiempo.',
  },
  pains: {
    title: '¿Te suena?',
    items: [
      'Sabes que deberías publicar más, pero el día no da.',
      'Pagaste un anuncio y no supiste si funcionó.',
      'Los mensajes se acumulan y algunos se quedan sin respuesta.',
    ],
    closing: 'No necesitas más horas. Necesitas un equipo.',
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Elige por dónde empezar.',
    cards: {
      redes:
        'Nos encargamos de tus redes completas: qué publicar, cuándo y con qué resultados. Tú apruebas, nosotros ejecutamos.',
      anuncios: 'Llegamos a personas de tu zona que todavía no te conocen, con un presupuesto que tú decides.',
      comunidad: 'Respondemos comentarios y mensajes a tiempo y con tu voz, para que ningún cliente se quede esperando.',
      produccion: 'Fotos, videos y diseños que muestran tu negocio como realmente es: con calidad profesional.',
    },
    cardCta: 'Ver qué incluye',
  },
  geo: {
    eyebrow: 'CyberLanguage · Visibilidad en IA',
    title: 'Que la IA también te recomiende.',
    body: 'Tus clientes ya le piden recomendaciones a la IA. Con CyberLanguage, nuestra línea GEO, trabajamos para que cuando pregunten por lo que ofreces, la respuesta te nombre a ti.',
    cta: 'Conoce CyberLanguage',
  },
  why: {
    eyebrow: 'Por qué nosotros',
    title: 'Por qué Cyber Positioning',
    items: [
      { title: 'Estrategia primero.', body: 'Antes de publicar, entendemos tu negocio y a tus clientes.' },
      { title: 'Un solo equipo.', body: 'Contenido, anuncios y comunidad, coordinados por las mismas personas.' },
      { title: 'Trato directo.', body: 'Hablas con los socios, no con un sistema de tickets.' },
      { title: 'Claridad mensual.', body: 'Un reporte sencillo con lo que funcionó y lo que vamos a ajustar.' },
    ],
  },
  work: {
    eyebrow: 'Nuestro trabajo',
    title: 'Lo que hacemos, a la vista.',
    body: 'Fotos, videos y diseños creados para negocios como el tuyo.',
    cta: 'Ver nuestro trabajo',
  },
  closing: {
    title: 'Tu próxima publicación no debería depender de que te sobre tiempo.',
    body: 'Cuéntanos de tu negocio en una llamada de 30 minutos. Te decimos por dónde empezaría tu estrategia.',
  },
};
```

- [ ] **Step 3: Copy EN — `src/i18n/en/home.ts`**

```ts
import type { HomeCopy } from '../types';

/** Brand brief §06 "Inicio". The GEO block is derived from the CyberLanguage copy. */
export const home: HomeCopy = {
  hero: {
    eyebrow: 'Digital marketing agency · Puerto Rico',
    title: 'You focus on your passion. We make sure the world sees it.',
    subtitle:
      'We run your social media from start to finish — strategy, content, ads and customer care — so you get your time back.',
  },
  pains: {
    title: 'Sound familiar?',
    items: [
      "You know you should post more, but there aren't enough hours in the day.",
      "You paid for an ad and never found out if it worked.",
      'Messages pile up, and some never get an answer.',
    ],
    closing: "You don't need more hours. You need a team.",
  },
  services: {
    eyebrow: 'Services',
    title: 'Choose where to start.',
    cards: {
      redes: 'We run your social media end to end: what to post, when, and with what results. You approve, we execute.',
      anuncios: "We reach people in your area who don't know you yet, with a budget you decide.",
      comunidad: 'We answer comments and messages on time and in your voice, so no customer is left waiting.',
      produccion: 'Photos, videos and designs that show your business as it really is — with professional quality.',
    },
    cardCta: "See what's included",
  },
  geo: {
    eyebrow: 'CyberLanguage · AI visibility',
    title: 'Get recommended by AI, too.',
    body: 'Your customers already ask AI for recommendations. With CyberLanguage, our GEO practice, we work so that when they ask about what you offer, the answer names you.',
    cta: 'Discover CyberLanguage',
  },
  why: {
    eyebrow: 'Why us',
    title: 'Why Cyber Positioning',
    items: [
      { title: 'Strategy first.', body: 'Before we post, we understand your business and your customers.' },
      { title: 'One team.', body: 'Content, ads and community, coordinated by the same people.' },
      { title: 'Direct contact.', body: 'You talk to the partners, not a ticketing system.' },
      { title: 'Monthly clarity.', body: "A simple report on what worked and what we'll adjust." },
    ],
  },
  work: {
    eyebrow: 'Our work',
    title: 'What we do, in plain sight.',
    body: 'Photos, videos and designs created for businesses like yours.',
    cta: 'See our work',
  },
  closing: {
    title: "Your next post shouldn't depend on having spare time.",
    body: "Tell us about your business on a 30-minute call. We'll tell you where your strategy would start.",
  },
};
```

Sumar `home` a los dos `index.ts`, igual que `services` en Task 6.

- [ ] **Step 4: Página**

`src/pages/HomePage.tsx` (reemplaza el esqueleto):

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { ScheduleButton } from '../components/ScheduleButton';
import { SiteLayout } from '../components/SiteLayout';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { SERVICE_IDS } from '../data/services';
import { pathFor } from '../routes';
import './HomePage.css';

/**
 * Iconos de marca para los diferenciadores, en el orden de `home.why.items`
 * (brief web: "3–4 diferenciadores con icono").
 */
const WHY_ICONS = [
  '/brand/icons/servicios.png',
  '/brand/icons/conocenos.png',
  '/brand/icons/contacto.png',
  '/brand/icons/logros.png',
] as const;

/** Inicio (brief web + brief de marca §06). Testimonios: fase 2. */
export function HomePage() {
  const { copy, language } = useLanguage();
  const { home } = copy;
  const servicesPath = pathFor('services', language);

  return (
    <SiteLayout>
      <section className="section section--dark home-hero">
        <div className="container home-hero__inner">
          <img className="home-hero__mark" src="/brand/logo-mark.png" alt="" width={160} height={160} />
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 className="home-hero__title">{home.hero.title}</h1>
          <p className="lead home-hero__subtitle">{home.hero.subtitle}</p>
          <div className="home-hero__actions">
            <ScheduleButton variant="primary" label={copy.cta.schedule} />
            <WhatsAppButton variant="secondary" label={copy.cta.whatsapp} />
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container home-pains">
          <h2>{home.pains.title}</h2>
          <ul className="home-pains__list">
            {home.pains.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="home-pains__closing">{home.pains.closing}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{home.services.eyebrow}</p>
          <h2>{home.services.title}</h2>
          <div className="home-cards">
            {SERVICE_IDS.map((id) => (
              <article className="card home-card" key={id}>
                <h3>{copy.services.items[id].name}</h3>
                <p>{home.services.cards[id]}</p>
                <a className="home-card__link" href={`${servicesPath}#${id}`}>
                  {home.services.cardCta} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark home-geo">
        <div className="container home-geo__inner">
          <p className="eyebrow">{home.geo.eyebrow}</p>
          <h2>{home.geo.title}</h2>
          <p className="lead home-geo__body">{home.geo.body}</p>
          <a className="button button--secondary" href={pathFor('geo', language)}>
            {home.geo.cta}
          </a>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <p className="eyebrow">{home.why.eyebrow}</p>
          <h2>{home.why.title}</h2>
          <div className="home-why">
            {home.why.items.map((item, index) => (
              <article className="home-why__item" key={item.title}>
                <img src={WHY_ICONS[index % WHY_ICONS.length]} alt="" width={72} height={72} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-work">
          <div>
            <p className="eyebrow">{home.work.eyebrow}</p>
            <h2>{home.work.title}</h2>
            <p className="lead">{home.work.body}</p>
          </div>
          <a className="button button--secondary" href={pathFor('work', language)}>
            {home.work.cta}
          </a>
        </div>
      </section>

      <ClosingCta title={home.closing.title} body={home.closing.body} />
    </SiteLayout>
  );
}
```

El adelanto de trabajo no muestra imágenes porque `PRODUCTION` está vacío
(Task 8). Cuando haya material, se agregan aquí las primeras 3–4 piezas de
`PRODUCTION`. Mientras tanto se muestra solo el texto y el botón: no se
ponen placeholders en el Inicio.

`src/pages/HomePage.css`:

```css
.home-hero {
  padding-block: clamp(3.5rem, 2rem + 6vw, 7rem);
}

.home-hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.home-hero__mark {
  width: clamp(96px, 20vw, 160px);
  height: auto;
  margin-bottom: var(--space-3);
}

.home-hero__title {
  max-width: 20ch;
}

.home-hero__subtitle {
  margin-block: var(--space-3) var(--space-4);
  max-width: 58ch;
  opacity: 0.85;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
}

.home-pains {
  display: grid;
  gap: var(--space-3);
  max-width: 760px;
}

.home-pains__list {
  display: grid;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-pains__list li {
  padding: var(--space-2) var(--space-3);
  border-left: 3px solid var(--color-gold);
  background: var(--color-white);
  border-radius: 0 var(--radius-button) var(--radius-button) 0;
}

.home-pains__closing {
  font-family: var(--font-display);
  font-size: var(--text-h3);
}

.home-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.home-card {
  display: grid;
  gap: var(--space-2);
  align-content: start;
}

.home-card__link {
  font-weight: 600;
  color: var(--color-ink);
  border-bottom: 2px solid var(--color-gold);
  justify-self: start;
}

.home-geo__inner {
  display: grid;
  gap: var(--space-2);
  justify-items: start;
  max-width: 760px;
}

.home-geo__body {
  opacity: 0.85;
  margin-bottom: var(--space-2);
}

.home-why {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.home-why__item {
  display: grid;
  gap: var(--space-1);
  align-content: start;
}

.home-why__item img {
  border-radius: 50%;
  margin-bottom: var(--space-1);
}

.home-work {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-3);
}
```

Si `.card` no define padding, fondo y borde en `global.css`, verificarlo con
`grep -n "^\.card" -A8 src/styles/global.css` y no duplicar lo que ya
existe.

- [ ] **Step 5: Verificar**

Run: `npm test && npm run build`
Expected: PASS.

Run: `npm run dev`. Verificar:
- `/` y `/en` muestran las 7 secciones en orden.
- "Ver qué incluye" de Anuncios lleva a `/servicios#anuncios` con el
  plegable abierto.
- La tarjeta GEO lleva a `/geo`.
- A 375px no hay desborde.

- [ ] **Step 6: Commit (solo con autorización)**

```bash
git add src/i18n src/pages/HomePage.*
git commit -m "feat(home): add home page with schedule-first CTAs"
```

---

### Task 8: Nuestro trabajo

**Files:**
- Create: `src/data/work.ts`, `src/i18n/{es,en}/work.ts`, `src/pages/WorkPage.css`
- Modify: `src/i18n/types.ts`, `src/i18n/{es,en}/index.ts`, `src/pages/WorkPage.tsx`

**Interfaces:**
- Produces:
  - `interface ProductionPiece { image: string; project: string; description: Record<Language, string> }`.
  - `interface ResultCase { image: string; client: string; challenge: Record<Language, string>; whatWeDid: Record<Language, string>; result: Record<Language, string> }`.
  - `PRODUCTION: readonly ProductionPiece[]` y `RESULTS: readonly ResultCase[]`.

- [ ] **Step 1: Datos**

`src/data/work.ts`:

```ts
import type { Language } from '../i18n/language';

export interface ProductionPiece {
  /** Ruta en public/, por ejemplo /work/dona-burguer-1.jpg */
  image: string;
  project: string;
  description: Record<Language, string>;
}

export interface ResultCase {
  image: string;
  client: string;
  challenge: Record<Language, string>;
  whatWeDid: Record<Language, string>;
  result: Record<Language, string>;
}

/**
 * Material de producción (lo selecciona Carlo, brief web "Anexo"). Vacío =
 * la galería muestra fichas de "material pendiente". Agregar piezas aquí no
 * requiere rediseño.
 */
export const PRODUCTION: readonly ProductionPiece[] = [];

/** Casos de resultados: fase 2. Mientras esté vacío, el bloque no se muestra. */
export const RESULTS: readonly ResultCase[] = [];
```

- [ ] **Step 2: Tipos y copy**

`types.ts`:

```ts
export interface WorkCopy {
  eyebrow: string;
  title: string;
  productionTitle: string;
  productionBody: string;
  pendingPiece: string;
  resultsTitle: string;
  resultsBody: string;
  challengeLabel: string;
  whatWeDidLabel: string;
  resultLabel: string;
}
```

Agregar `work: WorkCopy;` en `Copy`.

`src/i18n/es/work.ts`:

```ts
import type { WorkCopy } from '../types';

/** Brief de marca §06 "Nuestro trabajo". */
export const work: WorkCopy = {
  eyebrow: 'Nuestro trabajo',
  title: 'Lo que hacemos, a la vista.',
  productionTitle: 'Producción',
  productionBody: 'Fotos, videos y diseños creados para negocios como el tuyo.',
  pendingPiece: 'Material pendiente de entrega',
  resultsTitle: 'Resultados',
  resultsBody: 'Casos reales: el reto, lo que hicimos y lo que cambió.',
  challengeLabel: 'El reto',
  whatWeDidLabel: 'Lo que hicimos',
  resultLabel: 'El resultado',
};
```

`src/i18n/en/work.ts`:

```ts
import type { WorkCopy } from '../types';

/** Brand brief §06 "Nuestro trabajo". */
export const work: WorkCopy = {
  eyebrow: 'Our work',
  title: 'What we do, in plain sight.',
  productionTitle: 'Production',
  productionBody: 'Photos, videos and designs created for businesses like yours.',
  pendingPiece: 'Material pending delivery',
  resultsTitle: 'Results',
  resultsBody: 'Real cases: the challenge, what we did and what changed.',
  challengeLabel: 'The challenge',
  whatWeDidLabel: 'What we did',
  resultLabel: 'The result',
};
```

Sumar `work` a los dos `index.ts`.

- [ ] **Step 3: Página**

`src/pages/WorkPage.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { PageIntro } from '../components/PageIntro';
import { SiteLayout } from '../components/SiteLayout';
import { PRODUCTION, RESULTS } from '../data/work';
import './WorkPage.css';

/** Cuántas fichas pendientes mostrar mientras no hay material: llena el carrete en desktop. */
const PENDING_SLOTS = 4;

/** Nuestro trabajo (brief web): carrete de producción + casos (fase 2). */
export function WorkPage() {
  const { copy, language } = useLanguage();
  const { work, home } = copy;

  return (
    <SiteLayout>
      <PageIntro eyebrow={work.eyebrow} title={work.title} icon="/brand/icons/logros.png" />

      <section className="section">
        <div className="container">
          <h2>{work.productionTitle}</h2>
          <p className="lead work__lead">{work.productionBody}</p>

          <ul className="work-reel" aria-label={work.productionTitle}>
            {PRODUCTION.length > 0
              ? PRODUCTION.map((piece) => (
                  <li className="work-reel__item" key={piece.image}>
                    <figure>
                      <img src={piece.image} alt={piece.description[language]} loading="lazy" />
                      <figcaption>
                        <strong>{piece.project}</strong>
                        <span>{piece.description[language]}</span>
                      </figcaption>
                    </figure>
                  </li>
                ))
              : Array.from({ length: PENDING_SLOTS }, (_, index) => (
                  <li className="work-reel__item work-reel__item--pending" key={index}>
                    <p className="pending-note">{work.pendingPiece}</p>
                  </li>
                ))}
          </ul>
        </div>
      </section>

      {RESULTS.length > 0 && (
        <section className="section section--light">
          <div className="container">
            <h2>{work.resultsTitle}</h2>
            <p className="lead work__lead">{work.resultsBody}</p>
            <div className="work-results">
              {RESULTS.map((result) => (
                <article className="card" key={result.client}>
                  <img src={result.image} alt="" loading="lazy" />
                  <h3>{result.client}</h3>
                  <p>
                    <strong>{work.challengeLabel}:</strong> {result.challenge[language]}
                  </p>
                  <p>
                    <strong>{work.whatWeDidLabel}:</strong> {result.whatWeDid[language]}
                  </p>
                  <p>
                    <strong>{work.resultLabel}:</strong> {result.result[language]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCta title={home.closing.title} body={home.closing.body} />
    </SiteLayout>
  );
}
```

`src/pages/WorkPage.css`:

```css
.work__lead {
  margin-block: var(--space-2) var(--space-4);
  max-width: 60ch;
}

/* Carrete deslizable (brief web): scroll horizontal dentro del bloque, nunca de la página. */
.work-reel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(240px, 30%);
  gap: var(--space-3);
  margin: 0;
  padding: 0 0 var(--space-2);
  list-style: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
}

.work-reel__item {
  scroll-snap-align: start;
}

.work-reel__item figure {
  margin: 0;
}

.work-reel__item img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-card);
}

.work-reel__item figcaption {
  display: grid;
  gap: 2px;
  margin-top: var(--space-1);
  font-size: 0.9375rem;
}

.work-reel__item--pending {
  display: grid;
  place-items: center;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-card);
  background: var(--color-porcelain);
}

.work-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-3);
}

@media (max-width: 640px) {
  .work-reel {
    grid-auto-columns: 78%;
  }
}
```

- [ ] **Step 4: Verificar**

Run: `npm test && npm run build`
Expected: PASS.

Run: `npm run dev`. Verificar:
- `/nuestro-trabajo` muestra 4 fichas "Material pendiente de entrega" en un
  carrete que se desliza, y no hay bloque Resultados.
- A 375px el carrete se desliza dentro de la sección y la página no tiene
  scroll horizontal.

- [ ] **Step 5: Commit (solo con autorización)**

```bash
git add src/data/work.ts src/i18n src/pages/WorkPage.*
git commit -m "feat(work): add our-work page with production reel"
```

---

### Task 9: Nosotros (equipo)

**Files:**
- Create: `src/data/team.ts`, `src/i18n/{es,en}/about.ts`, `src/pages/AboutPage.css`
- Modify: `src/i18n/types.ts`, `src/i18n/{es,en}/index.ts`, `src/pages/AboutPage.tsx`
- Test: `src/data/team.test.ts`

**Interfaces:**
- Consumes: `splitPendingMarkers` (Task 3), `PendingText` y `PendingNote` (Task 5).
- Produces:
  - `type TeamMemberId = 'gabriela' | 'carlo' | 'dianelle'`.
  - `interface TeamMember { id: TeamMemberId; name: string; role: 'CMO' | 'CCO' | 'COO'; photo: string | null }`.
  - `TEAM: readonly TeamMember[]`.

- [ ] **Step 1: Test que falla**

`src/data/team.test.ts`:

```ts
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
```

Run: `npm test`
Expected: FAIL (no existe `./team`).

- [ ] **Step 2: Datos**

`src/data/team.ts`:

```ts
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
```

Run: `npm test`
Expected: PASS.

- [ ] **Step 3: Tipos y copy**

En `types.ts`, agregar `import type { TeamMemberId } from '../data/team';` y:

```ts
export interface AboutCopy {
  eyebrow: string;
  title: string;
  storyTitle: string;
  /** Plantilla del brief: los huecos van entre [corchetes] y se muestran como pendientes. */
  story: string;
  missionTitle: string;
  mission: string;
  teamTitle: string;
  /** null = bio pendiente de entrega. */
  bios: Record<TeamMemberId, string | null>;
  details: Record<TeamMemberId, string | null>;
  bioPending: string;
  detailsLabel: string;
  detailsPending: string;
  closing: {
    title: string;
    body: string;
  };
}
```

Agregar `about: AboutCopy;` en `Copy`.

`src/i18n/es/about.ts`:

```ts
import type { AboutCopy } from '../types';

/**
 * Brief de marca §06 "Nosotros". La historia es la plantilla del brief: el
 * hueco que solo puede llenar el equipo queda entre corchetes y se ve como
 * pendiente. "[número]" ya se sabe: son tres socios.
 */
export const about: AboutCopy = {
  eyebrow: 'Nosotros',
  title: 'Detrás de cada publicación hay un equipo que entiende tu negocio.',
  storyTitle: 'Nuestra historia',
  story:
    'Cyber Positioning nació porque [razón real: lo que vieron en los negocios a su alrededor]. Somos tres socios con experiencia en estrategia digital, producción visual y operaciones, y trabajamos con una idea simple: el dueño de un negocio debería estar en su negocio, no frente a un calendario de publicaciones.',
  missionTitle: 'Misión',
  mission: 'Que los negocios locales tengan la presencia digital que su trabajo merece, sin sacrificar su tiempo.',
  teamTitle: 'El equipo',
  bios: { gabriela: null, carlo: null, dianelle: null },
  details: { gabriela: null, carlo: null, dianelle: null },
  bioPending: 'Bio pendiente de entrega.',
  detailsLabel: 'Más detalles profesionales',
  detailsPending: 'Detalle profesional pendiente de entrega.',
  closing: {
    title: 'Hablemos de tu negocio.',
    body: 'Agenda una llamada de 30 minutos con nosotros o llámanos directo.',
  },
};
```

`src/i18n/en/about.ts`:

```ts
import type { AboutCopy } from '../types';

/** Brand brief §06 "Nosotros". Gaps only the team can fill stay in [brackets] and render as pending. */
export const about: AboutCopy = {
  eyebrow: 'About',
  title: 'Behind every post is a team that understands your business.',
  storyTitle: 'Our story',
  story:
    'Cyber Positioning was born because [real reason: what they saw in the businesses around them]. We are three partners with experience in digital strategy, visual production and operations, and we work with a simple idea: business owners should be in their business, not in front of a posting calendar.',
  missionTitle: 'Mission',
  mission: 'To give local businesses the digital presence their work deserves, without sacrificing their time.',
  teamTitle: 'The team',
  bios: { gabriela: null, carlo: null, dianelle: null },
  details: { gabriela: null, carlo: null, dianelle: null },
  bioPending: 'Bio pending delivery.',
  detailsLabel: 'More professional details',
  detailsPending: 'Professional details pending delivery.',
  closing: {
    title: "Let's talk about your business.",
    body: 'Book a 30-minute call with us, or call us directly.',
  },
};
```

Sumar `about` a los dos `index.ts`.

- [ ] **Step 4: Página**

`src/pages/AboutPage.tsx`:

```tsx
import { useLanguage } from '../i18n/LanguageContext';
import { ClosingCta } from '../components/ClosingCta';
import { PageIntro } from '../components/PageIntro';
import { PendingNote, PendingText } from '../components/PendingNote';
import { SiteLayout } from '../components/SiteLayout';
import { TEAM } from '../data/team';
import type { TeamMember } from '../data/team';
import { splitPendingMarkers } from '../lib/pending';
import './AboutPage.css';

/** Nosotros (brief web): historia, misión, equipo y cierre con agenda + llamada. */
export function AboutPage() {
  const { copy } = useLanguage();
  const { about } = copy;

  return (
    <SiteLayout>
      <PageIntro eyebrow={about.eyebrow} title={about.title} icon="/brand/icons/conocenos.png" />

      <section className="section">
        <div className="container about-story">
          <div>
            <h2>{about.storyTitle}</h2>
            <p className="lead">
              <PendingText segments={splitPendingMarkers(about.story)} />
            </p>
          </div>
          <div>
            <h2>{about.missionTitle}</h2>
            <p className="lead">{about.mission}</p>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <h2>{about.teamTitle}</h2>
          <div className="about-team">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={about.closing.title} body={about.closing.body} secondary="call" />
    </SiteLayout>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const { copy } = useLanguage();
  const { about } = copy;
  const bio = about.bios[member.id];
  const details = about.details[member.id];

  return (
    <article className="card about-member">
      {member.photo ? (
        <img className="about-member__photo" src={member.photo} alt={member.name} width={120} height={120} />
      ) : (
        <span className="about-member__photo about-member__photo--initials" aria-hidden="true">
          {initials(member.name)}
        </span>
      )}
      <h3>{member.name}</h3>
      <p className="eyebrow">{member.role}</p>
      {bio ? <p>{bio}</p> : <PendingNote>{about.bioPending}</PendingNote>}

      {/* <details> es nativo: accesible y operable con teclado sin JS (brief web: "plegable con más detalles"). */}
      <details className="about-member__details">
        <summary>{about.detailsLabel}</summary>
        {details ? <p>{details}</p> : <PendingNote>{about.detailsPending}</PendingNote>}
      </details>
    </article>
  );
}

function initials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2);
}
```

`src/pages/AboutPage.css`:

```css
.about-story {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-6);
}

.about-story h2 {
  margin-bottom: var(--space-2);
}

.about-team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.about-member {
  display: grid;
  gap: var(--space-1);
  align-content: start;
  justify-items: start;
}

.about-member .eyebrow {
  margin: 0;
}

.about-member__photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: var(--space-2);
}

.about-member__photo--initials {
  display: grid;
  place-items: center;
  background: var(--color-ink);
  color: var(--color-gold);
  font-family: var(--font-display);
  font-size: 2.5rem;
}

.about-member__details {
  width: 100%;
  margin-top: var(--space-1);
}

.about-member__details summary {
  cursor: pointer;
  font-weight: 600;
  padding-block: var(--space-1);
}

@media (max-width: 760px) {
  .about-story {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
```

- [ ] **Step 5: Verificar**

Run: `npm test && npm run build`
Expected: PASS.

Run: `npm run dev`. Verificar:
- `/nosotros` muestra la historia con "razón real: …" marcada en rojo.
- Hay tres tarjetas con iniciales (GF, CF, DF), los nombres y los cargos
  correctos, y "Bio pendiente de entrega."
- "Más detalles profesionales" se abre con teclado.
- El cierre tiene Agendar y Llámanos.
- `/en/about` se ve igual en inglés.

- [ ] **Step 6: Commit (solo con autorización)**

```bash
git add src/data/team.* src/i18n src/pages/AboutPage.*
git commit -m "feat(about): add about page with team cards"
```

---

### Task 10: Contacto (Cal.com embebido)

**Files:**
- Create: `src/i18n/{es,en}/contact.ts`, `src/pages/ContactPage.css`
- Modify: `src/i18n/types.ts`, `src/i18n/{es,en}/index.ts`, `src/pages/ContactPage.tsx`

- [ ] **Step 1: Tipos y copy**

`types.ts`:

```ts
export interface ContactCopy {
  eyebrow: string;
  title: string;
  body: string;
  scheduleTitle: string;
  scheduleBody: string;
  iframeTitle: string;
  openInNewTab: string;
  otherTitle: string;
  emailLabel: string;
  hoursLabel: string;
  followUs: string;
}
```

Agregar `contact: ContactCopy;` en `Copy`.

`src/i18n/es/contact.ts`:

```ts
import type { ContactCopy } from '../types';

/** Brief de marca §06 "Contacto" (titular y texto). */
export const contact: ContactCopy = {
  eyebrow: 'Contacto',
  title: 'Hablemos de tu negocio.',
  body: 'Escríbenos por WhatsApp o agenda una llamada de 30 minutos. Te respondemos en menos de un día laborable.',
  scheduleTitle: 'Agenda una llamada de 30 minutos',
  scheduleBody: 'Elige el día y la hora que te acomoden.',
  iframeTitle: 'Calendario de reservas de Cyber Positioning',
  openInNewTab: 'Abrir la agenda en una pestaña nueva',
  otherTitle: 'Otras formas de contactarnos',
  emailLabel: 'Correo',
  hoursLabel: 'Horario',
  followUs: 'Síguenos',
};
```

`src/i18n/en/contact.ts`:

```ts
import type { ContactCopy } from '../types';

/** Brand brief §06 "Contacto" (headline and copy). */
export const contact: ContactCopy = {
  eyebrow: 'Contact',
  title: "Let's talk about your business.",
  body: 'Message us on WhatsApp or book a 30-minute call. We reply within one business day.',
  scheduleTitle: 'Book a 30-minute call',
  scheduleBody: 'Pick the day and time that work for you.',
  iframeTitle: 'Cyber Positioning booking calendar',
  openInNewTab: 'Open the calendar in a new tab',
  otherTitle: 'Other ways to reach us',
  emailLabel: 'Email',
  hoursLabel: 'Hours',
  followUs: 'Follow us',
};
```

Sumar `contact` a los dos `index.ts`.

- [ ] **Step 2: Página**

`src/pages/ContactPage.tsx`:

```tsx
import { CONTACT_EMAIL, SCHEDULING_URL, SOCIAL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { CallButton } from '../components/CallButton';
import { PageIntro } from '../components/PageIntro';
import { PendingNote } from '../components/PendingNote';
import { SiteLayout } from '../components/SiteLayout';
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons';
import { WhatsAppButton } from '../components/WhatsAppButton';
import './ContactPage.css';

/**
 * Contacto en orden de prioridad (spec §6): agenda embebida, WhatsApp y
 * Llamar, y después correo, horario y redes. Sin formulario: quedó fuera de
 * esta entrega.
 */
export function ContactPage() {
  const { copy } = useLanguage();
  const { contact } = copy;

  return (
    <SiteLayout>
      <PageIntro eyebrow={contact.eyebrow} title={contact.title} lead={contact.body} icon="/brand/icons/contacto.png" />

      <section className="section">
        <div className="container contact-page__schedule">
          <h2>{contact.scheduleTitle}</h2>
          <p className="lead">{contact.scheduleBody}</p>

          {SCHEDULING_URL ? (
            <>
              <iframe
                className="contact-page__calendar"
                src={`${SCHEDULING_URL}?embed=true&theme=light`}
                title={contact.iframeTitle}
                loading="lazy"
              />
              {/* Siempre visible: si el iframe no carga (bloqueador, red), la agenda sigue a un click. */}
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                {contact.openInNewTab}
              </a>
            </>
          ) : (
            <PendingNote>{copy.cta.schedulingPending}</PendingNote>
          )}
        </div>
      </section>

      <section className="section section--light">
        <div className="container contact-page__other">
          <h2>{contact.otherTitle}</h2>
          <div className="contact-page__actions">
            <WhatsAppButton variant="primary" label={copy.cta.whatsapp} />
            <CallButton variant="secondary" />
          </div>
          <dl className="contact-page__details">
            <div>
              <dt>{contact.emailLabel}</dt>
              <dd>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>{contact.hoursLabel}</dt>
              <dd>{copy.site.hours}</dd>
            </div>
            <div>
              <dt>{contact.followUs}</dt>
              <dd className="contact-page__social">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={28} />
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon size={28} />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
```

`src/pages/ContactPage.css`:

```css
.contact-page__schedule {
  display: grid;
  gap: var(--space-2);
}

.contact-page__calendar {
  width: 100%;
  min-height: 720px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  background: var(--color-white);
}

.contact-page__schedule a {
  color: var(--color-ink);
  font-weight: 600;
  border-bottom: 2px solid var(--color-gold);
  justify-self: start;
}

.contact-page__other {
  display: grid;
  gap: var(--space-3);
}

.contact-page__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.contact-page__details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-3);
  margin: 0;
}

.contact-page__details dt {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-steel);
}

.contact-page__details dd {
  margin: var(--space-1) 0 0;
}

.contact-page__social {
  display: flex;
  gap: var(--space-2);
}

.contact-page__social a {
  color: var(--color-ink);
}
```

- [ ] **Step 3: Verificar (incluye Review Focus #5)**

Run: `npm test && npm run build`
Expected: PASS.

Run: `npm run dev`. Verificar:
- En `/contacto`, el calendario de Cal.com carga dentro del iframe y se
  puede elegir un horario.
- **Si Cal.com rechaza el iframe** (consola: `Refused to display … in a
  frame`), parar y avisar al usuario. La alternativa es el script oficial de
  embed de Cal.com, que es una dependencia externa nueva y requiere su OK.
- Con DevTools → Network → bloquear `cal.com`, el enlace "Abrir la agenda en
  una pestaña nueva" sigue visible y funciona.
- `tel:` y WhatsApp abren lo correcto.
- A 375px el iframe no desborda.

- [ ] **Step 4: Commit (solo con autorización)**

```bash
git add src/i18n src/pages/ContactPage.*
git commit -m "feat(contact): add contact page with embedded Cal.com scheduler"
```

---

### Task 11: Links / QR

**Files:**
- Create: `src/i18n/{es,en}/links.ts`, `src/pages/LinksPage.css`
- Modify: `src/i18n/types.ts`, `src/i18n/{es,en}/index.ts`, `src/pages/LinksPage.tsx`

- [ ] **Step 1: Tipos y copy**

`types.ts`:

```ts
export interface LinksCopy {
  tagline: string;
  schedule: string;
  services: string;
  website: string;
}
```

Agregar `links: LinksCopy;` en `Copy`.

`src/i18n/es/links.ts`:

```ts
import type { LinksCopy } from '../types';

/** Brief de marca §06 "Links / QR". */
export const links: LinksCopy = {
  tagline: 'Marketing digital para negocios locales. Tú enfócate en tu pasión; nosotros hacemos que se vea.',
  schedule: 'Agenda una llamada',
  services: 'Ver servicios',
  website: 'Visitar la web',
};
```

`src/i18n/en/links.ts`:

```ts
import type { LinksCopy } from '../types';

/** Brand brief §06 "Links / QR". */
export const links: LinksCopy = {
  tagline: 'Digital marketing for local businesses. You focus on your passion; we make it seen.',
  schedule: 'Book a call',
  services: 'See services',
  website: 'Visit the website',
};
```

Sumar `links` a los dos `index.ts`.

- [ ] **Step 2: Página**

`src/pages/LinksPage.tsx`:

```tsx
import { SOCIAL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import { CallButton } from '../components/CallButton';
import { ScheduleButton } from '../components/ScheduleButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { pathFor } from '../routes';
import './LinksPage.css';

/**
 * Destino del QR estático y de la bio de Instagram (brief web, "Links / QR").
 * Sin menú, sin footer y sin WhatsApp flotante: es una página ligera para el
 * celular.
 */
export function LinksPage() {
  const { copy, language } = useLanguage();
  const { links } = copy;

  return (
    <main className="links-page">
      <div className="links-page__inner">
        <img className="links-page__logo" src="/brand/logo-vertical.png" alt={copy.site.brandName} />
        <p className="links-page__tagline">{links.tagline}</p>

        <nav className="links-page__buttons" aria-label={copy.site.brandName}>
          <ScheduleButton variant="primary" label={links.schedule} />
          <WhatsAppButton variant="primary" label={copy.cta.whatsapp} />
          <CallButton variant="secondary" />
          <a className="button button--secondary" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="button button--secondary" href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a className="button button--secondary" href={pathFor('services', language)}>
            {links.services}
          </a>
          <a className="button button--secondary" href={pathFor('home', language)}>
            {links.website}
          </a>
        </nav>
      </div>
    </main>
  );
}
```

`src/pages/LinksPage.css`:

```css
.links-page {
  min-height: 100vh;
  background: var(--color-ink);
  color: var(--color-porcelain);
  padding: var(--space-6) var(--content-gutter);
}

.links-page__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  max-width: 420px;
  margin-inline: auto;
  text-align: center;
}

.links-page__logo {
  width: 200px;
  height: auto;
}

.links-page__tagline {
  opacity: 0.85;
}

.links-page__buttons {
  display: grid;
  gap: var(--space-2);
  width: 100%;
}

.links-page__buttons .button {
  width: 100%;
  padding-block: 16px;
}

.links-page .button--secondary {
  border-color: var(--color-porcelain);
  color: var(--color-porcelain);
}

.links-page .button--secondary:hover {
  background: var(--color-porcelain);
  color: var(--color-ink);
}
```

- [ ] **Step 3: Verificar**

Run: `npm test && npm run build`
Expected: PASS.

Run: `npm run dev`. Verificar:
- `/links` a 375px muestra el logo, la línea y siete botones grandes en el
  orden del spec.
- No hay header, footer ni botón flotante.
- `/en/links` se ve en inglés.
- Escanear `public/qr/cyberpositioning-links.png` lleva a
  `https://cyberpositioning.com/links`. Esa URL solo resuelve después del
  deploy; antes, basta con confirmar la URL que muestra el lector.

- [ ] **Step 4: Commit (solo con autorización)**

```bash
git add src/i18n src/pages/LinksPage.*
git commit -m "feat(links): add lightweight links page for QR and Instagram bio"
```

---

### Task 12: Política de privacidad para Puerto Rico / EE.UU.

**Files:**
- Rewrite: `src/i18n/es/privacy.ts`, `src/i18n/en/privacy.ts`
- Modify: `src/i18n/types.ts` (`PrivacyCopy`), `src/pages/PrivacyPolicy.tsx`, `src/pages/PrivacyPolicy.css`

- [ ] **Step 1: Tipo**

En `PrivacyCopy`, reemplazar `contactPending: string;` por:

```ts
  /** Aviso visible: borrador sin revisión legal. */
  draftNotice: string;
```

- [ ] **Step 2: Copy ES — `src/i18n/es/privacy.ts`**

```ts
import type { PrivacyCopy } from '../types';

/**
 * Política para una agencia en Puerto Rico (EE.UU.), spec §6. El sitio solo
 * trata datos vía Cal.com, WhatsApp y correo: no hay formulario, analítica
 * ni cookies propias. Borrador: requiere revisión legal antes de publicar.
 */
export const privacy: PrivacyCopy = {
  eyebrow: 'Legal',
  title: 'Política de privacidad',
  intro:
    'Esta política explica qué datos personales recibimos cuando nos contactas o agendas una llamada desde este sitio, para qué los usamos y qué puedes hacer con ellos.',
  lastUpdated: 'Última actualización: 16 de octubre de 2026',
  controllerPending: 'Dato pendiente: falta la razón social de Cyber Positioning como responsable de los datos.',
  draftNotice: 'Borrador pendiente de revisión legal. No publicar como versión final sin esa revisión.',
  languageNote: 'Esta política existe en español e inglés. Si hay diferencias, prevalece la versión en español.',
  sections: [
    {
      title: '1. Quiénes somos',
      summary: 'Cyber Positioning es una agencia de marketing digital en Puerto Rico y es responsable de tus datos.',
      body: [
        'Cyber Positioning opera los sitios cyberpositioning.com y cyberlanguage.io (su línea de visibilidad en IA). Para cualquier consulta sobre esta política puedes escribirnos a admin@cyberpositioning.com.',
      ],
    },
    {
      title: '2. Qué datos recibimos',
      summary: 'Solo los que tú nos das al agendar, escribirnos por WhatsApp o enviarnos un correo.',
      body: [
        'Al agendar una llamada: tu nombre, tu correo electrónico, tu teléfono si decides darlo, y lo que escribas en las notas de la reserva.',
        'Al escribirnos por WhatsApp: tu número de teléfono, tu nombre de perfil y el contenido de los mensajes.',
        'Al escribirnos por correo: tu dirección de correo y el contenido del mensaje.',
        'Este sitio no tiene formularios propios, no usa herramientas de analítica y no instala cookies propias.',
      ],
    },
    {
      title: '3. Para qué los usamos',
      summary: 'Para responderte, hacer la llamada que agendaste y preparar una propuesta si la pides.',
      body: [
        'Usamos tus datos para confirmar y realizar la llamada, responder tus consultas y, si nos lo pides, preparar una propuesta de servicios.',
        'No vendemos tus datos ni los compartimos con terceros para que te envíen publicidad. No te enviaremos comunicaciones de marketing sin tu consentimiento.',
      ],
    },
    {
      title: '4. Proveedores que procesan tus datos',
      summary: 'Usamos servicios externos para la agenda, la mensajería, el correo y el alojamiento del sitio.',
      body: [
        'Cal.com, para la agenda de llamadas. Las reservas se procesan según su propia política de privacidad.',
        'WhatsApp (Meta Platforms), para la mensajería.',
        'Nuestro proveedor de correo electrónico, para recibir y responder correos.',
        'El proveedor de alojamiento del sitio, que puede registrar datos técnicos de la visita (como la dirección IP) por seguridad y funcionamiento.',
      ],
    },
    {
      title: '5. Cookies',
      summary: 'Nosotros no instalamos cookies. La agenda de Cal.com puede usar las suyas.',
      body: [
        'Este sitio no usa cookies propias ni de analítica. La agenda incrustada en la página de Contacto la provee Cal.com, que puede usar cookies necesarias para su funcionamiento. Los enlaces a Instagram y Facebook te llevan a esas plataformas, que aplican sus propias políticas.',
      ],
    },
    {
      title: '6. Cuánto tiempo guardamos tus datos',
      summary: 'Mientras sea útil para atenderte, y luego los eliminamos.',
      body: [
        'Conservamos tus datos mientras mantengamos una conversación o relación comercial contigo y, después, solo el tiempo necesario para cumplir obligaciones legales o resolver reclamos. Si no llegamos a trabajar juntos, eliminamos los datos de la reserva y la conversación cuando dejan de ser necesarios.',
      ],
    },
    {
      title: '7. Tus derechos',
      summary: 'Puedes pedirnos ver, corregir o borrar tus datos.',
      body: [
        'Puedes solicitar acceso a los datos que tenemos sobre ti, su corrección o su eliminación escribiendo a admin@cyberpositioning.com. Responderemos dentro de un plazo razonable y, como máximo, en 30 días.',
      ],
    },
    {
      title: '8. Seguridad',
      summary: 'Protegemos tus datos y te avisaremos si hay un incidente que te afecte.',
      body: [
        'Aplicamos medidas razonables para proteger tus datos. Si ocurre un incidente de seguridad que afecte tu información personal, te notificaremos según exige la ley aplicable, incluida la Ley Núm. 111 de 2005 de Puerto Rico.',
      ],
    },
    {
      title: '9. Menores de edad',
      summary: 'Este sitio no está dirigido a menores de 13 años.',
      body: ['No recopilamos a sabiendas datos de menores de 13 años. Si crees que un menor nos dio sus datos, escríbenos y los eliminaremos.'],
    },
    {
      title: '10. Cambios a esta política',
      summary: 'Si la cambiamos, publicaremos la nueva versión aquí con su fecha.',
      body: ['Podemos actualizar esta política. La fecha de la última actualización aparece al inicio de esta página.'],
    },
  ],
  backToSite: 'Volver al inicio',
};
```

- [ ] **Step 3: Copy EN — `src/i18n/en/privacy.ts`**

```ts
import type { PrivacyCopy } from '../types';

/** Courtesy translation of the Spanish policy (which prevails). Draft: needs legal review. */
export const privacy: PrivacyCopy = {
  eyebrow: 'Legal',
  title: 'Privacy policy',
  intro:
    'This policy explains what personal data we receive when you contact us or book a call through this site, what we use it for, and what you can do about it.',
  lastUpdated: 'Last updated: October 16, 2026',
  controllerPending: "Pending: Cyber Positioning's legal entity name as data controller.",
  draftNotice: 'Draft pending legal review. Do not publish as final without that review.',
  languageNote: 'This policy is available in Spanish and English. If they differ, the Spanish version prevails.',
  sections: [
    {
      title: '1. Who we are',
      summary: 'Cyber Positioning is a digital marketing agency in Puerto Rico and is responsible for your data.',
      body: [
        'Cyber Positioning operates cyberpositioning.com and cyberlanguage.io (its AI visibility practice). For any question about this policy, email us at admin@cyberpositioning.com.',
      ],
    },
    {
      title: '2. What data we receive',
      summary: 'Only what you give us when you book a call, message us on WhatsApp or email us.',
      body: [
        'When you book a call: your name, your email, your phone number if you choose to share it, and anything you write in the booking notes.',
        'When you message us on WhatsApp: your phone number, your profile name and the content of your messages.',
        'When you email us: your email address and the content of your message.',
        'This site has no forms of its own, uses no analytics tools and sets no first-party cookies.',
      ],
    },
    {
      title: '3. What we use it for',
      summary: 'To reply to you, hold the call you booked and prepare a proposal if you ask for one.',
      body: [
        'We use your data to confirm and hold the call, answer your questions and, if you ask, prepare a service proposal.',
        "We don't sell your data or share it with third parties for advertising. We won't send you marketing without your consent.",
      ],
    },
    {
      title: '4. Providers that process your data',
      summary: 'We use external services for scheduling, messaging, email and hosting.',
      body: [
        'Cal.com, for call scheduling. Bookings are processed under its own privacy policy.',
        'WhatsApp (Meta Platforms), for messaging.',
        'Our email provider, to receive and answer emails.',
        'The site hosting provider, which may log technical visit data (such as IP address) for security and operation.',
      ],
    },
    {
      title: '5. Cookies',
      summary: "We don't set cookies. The Cal.com calendar may set its own.",
      body: [
        "This site uses no first-party or analytics cookies. The calendar embedded on the Contact page is provided by Cal.com, which may use cookies needed for it to work. Links to Instagram and Facebook take you to those platforms, which apply their own policies.",
      ],
    },
    {
      title: '6. How long we keep your data',
      summary: "As long as it's useful to serve you, and then we delete it.",
      body: [
        "We keep your data while we have an ongoing conversation or business relationship with you, and afterwards only as long as needed to meet legal obligations or resolve claims. If we don't end up working together, we delete the booking and conversation data once it's no longer needed.",
      ],
    },
    {
      title: '7. Your rights',
      summary: 'You can ask us to show, correct or delete your data.',
      body: [
        'You can request access to the data we hold about you, its correction or its deletion by emailing admin@cyberpositioning.com. We will respond within a reasonable time and no later than 30 days.',
      ],
    },
    {
      title: '8. Security',
      summary: "We protect your data and will notify you of any incident that affects you.",
      body: [
        'We apply reasonable measures to protect your data. If a security incident affects your personal information, we will notify you as required by applicable law, including Puerto Rico Act No. 111 of 2005.',
      ],
    },
    {
      title: '9. Children',
      summary: 'This site is not directed at children under 13.',
      body: ["We don't knowingly collect data from children under 13. If you believe a child has given us their data, contact us and we'll delete it."],
    },
    {
      title: '10. Changes to this policy',
      summary: "If we change it, we'll post the new version here with its date.",
      body: ['We may update this policy. The last-updated date appears at the top of this page.'],
    },
  ],
  backToSite: 'Back to home',
};
```

- [ ] **Step 4: Componente**

En `src/pages/PrivacyPolicy.tsx`:
- Debajo del `{!DATA_CONTROLLER && <PendingNote>{privacy.controllerPending}</PendingNote>}`, agregar `<PendingNote>{privacy.draftNotice}</PendingNote>`.
- En el `<footer>` de la política, reemplazar todo el condicional `{CONTACT_EMAIL ? (...) : (<PendingNote>{privacy.contactPending}</PendingNote>)}` por:

```tsx
<p className="policy__contact">
  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
</p>
```

- Actualizar el comentario de cabecera: quitar la referencia a la Ley 21.719 y escribir "Política para Puerto Rico/EE.UU. (spec §6). Borrador sin revisión legal: se muestra el aviso en la propia página."

En `src/pages/PrivacyPolicy.css`, borrar la regla `.policy__pending` (línea
60 y su bloque), porque ahora se usa `.pending-note` global.

- [ ] **Step 5: Verificar**

Run: `npm test && npm run build`
Expected: PASS.

Run: `grep -rn "21.719\|Ley 19.628\|UTM\|auditor" src/i18n/es/privacy.ts src/i18n/en/privacy.ts src/pages/PrivacyPolicy.tsx`
Expected: sin resultados.

Run: `npm run dev`. Verificar:
- `/privacidad` y `/en/privacy` muestran 10 secciones y los dos avisos en
  rojo (razón social y borrador).
- El footer enlaza a la política del idioma actual.

- [ ] **Step 6: Commit (solo con autorización)**

```bash
git add src/i18n src/pages/PrivacyPolicy.*
git commit -m "feat(privacy): rewrite privacy policy for Puerto Rico/US"
```

---

### Task 13: README y verificación final

**Files:**
- Rewrite: `README.md`

- [ ] **Step 1: README**

Reemplazar `README.md` con:

````markdown
# Cyber Positioning — Sitio web

Sitio bilingüe (ES/EN) de **Cyber Positioning**, agencia de marketing digital
en Puerto Rico, con su línea de visibilidad en IA **CyberLanguage** (GEO) en
`/geo`.

- **Dominio principal:** cyberpositioning.com
- **cyberlanguage.io** redirige (301) a `cyberpositioning.com/geo` (`vercel.json`)
- **CTA principal:** agendar una llamada de 30 min (Cal.com). Secundario: WhatsApp.

Diseño y decisiones: `docs/superpowers/specs/2026-10-16-cyberpositioning-site-design.md`.
Los briefs del cliente están en `temp/` (no versionado).

## Cómo montarlo en local

**Requisitos:** Node 20.19+ o 22.12+ (lo exige Vite 7).

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # tests unitarios (Vitest)
npm run build    # chequeo de tipos + build a dist/
npm run preview  # sirve dist/ en http://localhost:4173
```

No hay backend ni variables de entorno: el sitio es estático.

## Rutas

| Página | ES | EN |
|---|---|---|
| Inicio | `/` | `/en` |
| Servicios | `/servicios` (anclas `#redes`, `#anuncios`, `#comunidad`, `#produccion`) | `/en/services` |
| Nuestro trabajo | `/nuestro-trabajo` | `/en/our-work` |
| Nosotros | `/nosotros` | `/en/about` |
| Contacto | `/contacto` | `/en/contact` |
| Links / QR | `/links` | `/en/links` |
| GEO (CyberLanguage) | `/geo` | `/en/geo` |
| Privacidad | `/privacidad` | `/en/privacy` |

La tabla vive en `src/routes.ts`. El idioma sale de la URL. Los enlaces son
`<a>` normales, sin librería de router. **Al desplegar**, el host tiene que
reescribir las rutas desconocidas a `index.html` (en Vercel ya está en
`vercel.json`).

El QR de `/links` está en `public/qr/` (PNG y SVG). Es estático, así que no
cambia aunque cambie el contenido de la página.

## Dónde se cambia qué

| Qué | Dónde |
|---|---|
| Teléfono, WhatsApp, correo, redes y link de agenda | `src/config.ts` |
| Todo el texto | `src/i18n/es/*` y `src/i18n/en/*` (tipados: si falta una traducción, el build falla) |
| Equipo (nombres, cargos, fotos) | `src/data/team.ts`; bios en `src/i18n/*/about.ts` |
| Fotos y videos de producción | `src/data/work.ts` (archivos en `public/work/`) |
| Casos de resultados | `src/data/work.ts` → `RESULTS` (el bloque aparece solo al tener al menos uno) |
| Colores y tipografías | `src/styles/tokens.css` |
| Logos e iconos | `public/brand/` |

## Pendientes (se ven en la propia página, en rojo)

- Fotos, bios y detalles profesionales de Gabriela, Carlo y Dianelle.
- La razón real en la historia de "Nosotros".
- Material de producción para "Nuestro trabajo".
- Razón social de Cyber Positioning para la política de privacidad (`DATA_CONTROLLER`).
- **Revisión legal** de la política de privacidad.
- Revisión del copy en inglés por un hablante nativo.
- Metodología y bajadas de servicios de la página GEO (los `TODO` en `src/i18n/*/geo.ts`).

## Fuera de esta entrega

Formulario de contacto, Google Analytics / Meta Pixel (y su banner de
cookies), auditoría GEO automática, casos de resultados y testimonios.

## Limitación conocida

Al ser una SPA, el preview al compartir un link (título, descripción e
imagen OG) es **el mismo para todas las páginas**. Lo define `index.html`.
Para tener previews por página haría falta prerender.

## Convenciones

- El texto va en `i18n/`, nunca dentro de un componente.
- Si un dato no existe, la UI lo dice en vez de inventarlo.
- Los comentarios explican el **por qué** y citan el brief o el spec.
````

- [ ] **Step 2: Verificación final completa**

Run: `npm test && npm run build`
Expected: todos los tests PASS y el build sin errores.

Run: `grep -rn "TODO" src/ | grep -v "geo.ts\|config.ts\|en/index.ts"`
Expected: sin resultados. Los únicos TODO permitidos son los de copy GEO,
`DATA_CONTROLLER` y la revisión del copy EN.

Run: `grep -rli "funnel\|engagement\|leads\|growth\|viral" src/i18n/ | grep -v geo.ts`
Expected: sin resultados.

Run: `npm run preview`. Recorrer a 375px y en desktop:

| Ruta | Qué comprobar |
|---|---|
| `/` | 7 secciones; Agendar abre Cal.com; WhatsApp con mensaje genérico |
| `/servicios#anuncios` | Abre Anuncios; el switch EN lleva a `/en/services#anuncios` abierto |
| `/nuestro-trabajo` | Carrete con fichas pendientes y sin bloque Resultados |
| `/nosotros` | 3 socios con nombres y cargos correctos; pendientes en rojo |
| `/contacto` | Iframe de Cal.com con el enlace de respaldo visible |
| `/links` | Sin menú ni flotante; 7 botones |
| `/geo` | Sello CyberLanguage, sin widget de auditoría |
| `/privacidad` | 10 secciones y 2 avisos |
| `/nada`, `/en/nada` | 404 con botón a Servicios del idioma correcto |
| `/Servicios/` | Resuelve a Servicios |

En todas, la consola sin errores y sin scroll horizontal.

- [ ] **Step 3: Commit (solo con autorización)**

```bash
git add README.md
git commit -m "docs: rewrite README for the Cyber Positioning site"
```
