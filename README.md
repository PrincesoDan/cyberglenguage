# Cyber Positioning — Sitio web

Sitio bilingüe (ES/EN) de **Cyber Positioning**, agencia de marketing digital
en Puerto Rico. Incluye su línea de visibilidad en IA, **CyberLanguage** (GEO),
en `/geo`.

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

La tabla vive en `src/routes.ts` y el idioma sale de la URL. Los enlaces son
`<a>` normales, sin librería de router. **Al desplegar**, el host tiene que
reescribir las rutas desconocidas a `index.html`. En Vercel eso ya está
configurado en `vercel.json`.

El QR de `/links` está en `public/qr/` (PNG y SVG). Es estático, así que no
cambia aunque cambie el contenido de la página.

## Dónde se cambia qué

| Qué | Dónde |
|---|---|
| Teléfono, WhatsApp, correo, redes y link de agenda | `src/config.ts` |
| Todo el texto | `src/i18n/es/*` y `src/i18n/en/*` (están tipados: si falta una traducción, el build falla) |
| Equipo (nombres, cargos, fotos) | `src/data/team.ts`; bios en `src/i18n/*/about.ts` |
| Fotos y videos de producción | `src/data/work.ts` (archivos en `public/work/`) |
| Casos de resultados | `src/data/work.ts` → `RESULTS` (el bloque aparece solo cuando hay al menos uno) |
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

Al ser una SPA, el preview que aparece al compartir un link (título,
descripción e imagen OG) es **el mismo para todas las páginas**, porque lo
define `index.html`. Para tener previews por página haría falta prerender.

## Convenciones

- El texto va en `i18n/`, nunca dentro de un componente.
- Si un dato no existe, la UI lo dice en vez de inventarlo.
- Los comentarios explican el **por qué** y citan el brief o el spec.
