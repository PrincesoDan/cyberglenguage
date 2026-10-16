# Sitio Cyber Positioning + CyberLanguage (GEO) — Diseño

Fecha: 2026-10-16 · Estado: aprobado en conversación, pendiente de revisión del spec escrito.

## 1. Contexto e intención

Hoy el repo es la landing de **CyberLanguage** (consultoría GEO/AEO, una sola
página con un widget de auditoría simulado). El cliente reformuló el proyecto
(mail del 2026-10-16):

- **Cyber Positioning** es la marca principal: agencia de marketing digital en
  Puerto Rico para dueños de negocios locales. Dominio principal
  **cyberpositioning.com** (el ".io" del mail fue un error).
- **CyberLanguage** pasa a ser la línea GEO de la marca principal, servida en
  **cyberlanguage.io**.
- Nuevo alcance: **la página completa**, con **Agendar** como CTA principal.
- El análisis GEO automático queda para después (fase 2).
- Tareas pedidas: actualizar los nombres del equipo y entregar el link de agenda.

**Éxito:** sitio bilingüe ES/EN publicado entre el 30 de octubre y el 6 de
noviembre de 2026, donde cada página lleva a agendar una llamada de 30 minutos
(Cal.com) y WhatsApp queda como canal secundario.

### Fuentes (no versionadas, en `temp/`)

- `temp/Briefs_ Cyber Positioning (1).md` — brief web: mapa del sitio,
  especificación por página, elementos globales y textos de botones.
- `temp/Briefs_ Cyber Positioning.md` — brief de marca: posicionamiento, voz,
  nombres de servicios cara al cliente y textos sugeridos por página.
  **Cuando los dos briefs difieren en el copy, manda el de marca** (por ejemplo
  "Manejo integral de redes sociales" en vez de "full funnel", y "negocios
  locales" en vez de solo "restaurantes").
- `temp/branding-geo-aeo.html` — tablero de marca de la línea GEO (paleta
  Tinta/Champán, tipografías, símbolos).
- `temp/*.zip` — logos de Cyber Positioning (horizontal, vertical, logo +
  servicio, isotipo), avatares de perfil e iconos de sección (Contacto,
  Servicios, Logros, FAQ, Conócenos).

## 2. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Dominios | Un solo código y un solo build. `cyberpositioning.com` sirve el sitio y `cyberlanguage.io` redirige (301) a `cyberpositioning.com/geo` desde el host |
| Stack | Se mantiene **Vite + React SPA** con ruteo propio por `pathname`, sin librería de router y sin prerender |
| Agenda | Cal.com: `https://cal.com/princesodan/ulab-consulting`, embebido inline en Contacto y como enlace en el resto |
| CTA | Principal: **Agenda una llamada de 30 min**. Secundario: WhatsApp |
| Parte GEO | Página propia `/geo` reciclando la landing actual, sin el AuditWidget |
| Identidad visual | Cyber Positioning en todo el sitio. Su paleta coincide con la de CyberLanguage, así que solo se ajustan los hex al logo |
| Privacidad | Se reescribe para Puerto Rico/EE.UU. y queda como borrador sin revisión legal |
| Fuera de alcance | Formulario de contacto, GA4/Meta Pixel, banner de cookies, auditoría GEO automática, casos de resultados y testimonios |

**Costo aceptado de la SPA:** el HTML es uno solo, así que el título, la
descripción y la imagen OG de los previews en WhatsApp e Instagram son
**globales**. El título del documento sí cambia por página en el cliente.
Generar `sitemap.xml` y `hreflang` por página queda fuera; se puede retomar
si más adelante se agrega prerender.

## 3. Rutas

Fuente única de verdad: `src/routes.ts`. Es una tabla de entradas
`{ page: PageId, es: string, en: string }`, y de cada path se resuelve la
página **y** el idioma.

| PageId | ES | EN |
|---|---|---|
| `home` | `/` | `/en` |
| `services` | `/servicios` | `/en/services` |
| `work` | `/nuestro-trabajo` | `/en/our-work` |
| `about` | `/nosotros` | `/en/about` |
| `contact` | `/contacto` | `/en/contact` |
| `links` | `/links` | `/en/links` |
| `geo` | `/geo` | `/en/geo` |
| `privacy` | `/privacidad` | `/en/privacy` |
| `notFound` | cualquier otro path | cualquier otro path bajo `/en` |

- **El idioma sale de la URL.** `LanguageContext` deja de detectar el idioma
  del navegador (`src/i18n/LanguageContext.tsx:23-26`) y recibe el idioma
  resuelto por la ruta. El switch ES/EN es un enlace a la ruta equivalente
  de la misma página. En una 404 lleva al Inicio del otro idioma.
- Los enlaces siguen siendo `<a>` normales, con recarga completa, igual que hoy
  (`src/App.tsx:12-24`). Las anclas de servicios funcionan con `#hash` nativo.
- `normalizePath` (que hoy está en `src/App.tsx`) pasa a `routes.ts`.
- Hosting asumido: Vercel. `vercel.json` con rewrite de todo a `/index.html`
  y redirect por host: `cyberlanguage.io/*` → `https://cyberpositioning.com/geo`.
  Si el host es otro, se traduce la misma regla.

## 4. Configuración (`src/config.ts`)

| Constante | Valor |
|---|---|
| `SITE_URL` | `https://cyberpositioning.com` |
| `GEO_DOMAIN` | `https://cyberlanguage.io` |
| `SCHEDULING_URL` | `https://cal.com/princesodan/ulab-consulting` |
| `WHATSAPP_NUMBER` | `17879559917` |
| `PHONE_TEL` | `+17879559917` |
| `CONTACT_EMAIL` | `admin@cyberpositioning.com` |
| `SOCIAL.instagram` | `https://www.instagram.com/cyberpositioning/` |
| `SOCIAL.facebook` | `https://www.facebook.com/profile.php?id=61594919531733` |
| `DATA_CONTROLLER` | `''`: pendiente (razón social de Cyber Positioning). Mientras esté vacío, la política lo muestra como pendiente |

Se mantiene el comportamiento de `ScheduleButton`: si la URL está vacía, el
botón se deshabilita.

Helper nuevo en `src/lib/whatsapp.ts`: `buildWhatsAppUrl(language, service?)`
arma el enlace `https://wa.me/17879559917?text=…` con el mensaje prellenado del
brief ("Hola, vengo de la web de Cyber Positioning y quiero información sobre
[servicio]."). El mensaje sale de i18n.

## 5. Equipo

| Nombre | Cargo | Correo |
|---|---|---|
| Gabriela Fonseca | CMO | gabrielafonseca@cyberpositioning.com |
| Carlo Fonseca | CCO | carlofonseca@cyberpositioning.com |
| Dianelle Flores | COO | dianelleflores@cyberpositioning.com |

El brief web escribe el correo de Gabriela como `@cyberpositioting.com`: es un
error de tipeo y se usa `@cyberpositioning.com`. Los correos individuales no se
muestran en la web, solo el general. Fotos y bios están pendientes (las
entrega Gabriela).

## 6. Páginas

Cada página es un componente en `src/pages/`. Las secciones reutilizables
viven en `src/components/` con su `.css`, siguiendo la convención actual.
**Todo el texto va en `src/i18n/es.ts` y `src/i18n/en.ts`**, tipado contra
`Copy` (`src/i18n/types.ts`).

### Inicio (`home`)
1. Hero:
   - Titular: "Tú enfócate en tu pasión. Nosotros hacemos que el mundo la vea."
   - Subtítulo del brief de marca.
   - Botones: **Agenda una llamada de 30 min** (principal) y Escríbenos por WhatsApp.
2. "¿Te suena?": tres dolores y el cierre "No necesitas más horas. Necesitas un equipo."
3. Cuatro tarjetas de servicio. Cada una lleva "Ver qué incluye" y enlaza a
   `/servicios#ancla`.
4. Tarjeta destacada de la línea GEO (CyberLanguage), que enlaza a `/geo`.
5. Por qué Cyber Positioning: cuatro diferenciadores con los iconos de marca.
6. Adelanto de Nuestro trabajo: placeholders y el botón "Ver nuestro trabajo".
7. Bloque final con el titular y el texto del brief, y los mismos dos botones.

La sección de testimonios no se construye (fase 2).

### Servicios (`services`)
Intro y los servicios en este orden, con los nombres del brief de marca §05:

| # | Nombre ES / EN | Ancla | Notas |
|---|---|---|---|
| 1 | Manejo integral de redes sociales / Full Social Media Management | `#redes` | Insignia "Recomendado". Al final, recuadro "+ Atención a tu comunidad" |
| 2 | Anuncios en redes sociales / Social Media Ads | `#anuncios` | Peso visual alto. Recuadro "+ Atención a tu comunidad" |
| 3 | Atención a tu comunidad / Community Care | `#comunidad` | Complemento del servicio 1 |
| 4 | Producción de contenido / Content Production | `#produccion` | Va en un bloque aparte, "Servicios individuales" |

- **Interacción:** cada servicio es un plegable accesible: `<button
  aria-expanded>` que controla un panel. Se abre con click o tap y con
  teclado. En desktop, el hover muestra la descripción corta, pero esa misma
  descripción también se ve siempre bajo el título, así que nada depende
  solo del hover.
- **Contenido del panel:** beneficios, condiciones y el botón "Quiero este
  servicio", que abre WhatsApp con el nombre del servicio. Los recuadros de
  Atención a tu comunidad abren WhatsApp nombrando los dos servicios.
- Si la URL trae un hash (`#redes`), ese plegable se abre al cargar.
- No se muestran precios.

### Nuestro trabajo (`work`)
- Titular "Lo que hacemos, a la vista."
- Bloque Producción: carrete horizontal con scroll-snap. Mientras no haya
  material, muestra tarjetas placeholder marcadas como "Material pendiente".
  El componente recibe una lista de piezas (`imagen`, `proyecto`,
  `descripción`) desde un archivo de datos, y con la lista vacía muestra los
  placeholders.
- Bloque Resultados: no se renderiza mientras su lista esté vacía.

### Nosotros (`about`)
- Titular, historia y misión del brief de marca. Los huecos de la plantilla
  ("[razón real]", "[número]") se muestran como pendientes visibles; no se
  inventan.
- Tarjetas de equipo (§5) con foto o placeholder de iniciales, nombre, cargo,
  bio pendiente y un plegable de "más detalles" pendiente.
- Cierre con CTA Agendar.

### Contacto (`contact`)
Ordenado por prioridad:
1. Embed inline de Cal.com: un `<iframe>` de `SCHEDULING_URL` con
   `?embed=true`, con alto adecuado y un enlace de respaldo "Abrir agenda en
   una pestaña nueva".
2. Botones de WhatsApp y Llamar (`tel:`).
3. Correo general, horario (lunes a viernes, 9:00 a.m. – 5:00 p.m., hora de
   Puerto Rico) e iconos de redes.

### Links / QR (`links`)
- Sin header ni footer completos y sin botón flotante.
- Muestra el logo, la línea de presentación y botones grandes en este orden:
  Agendar llamada, WhatsApp, Llamar, Instagram, Facebook, Ver servicios,
  Visitar la web.
- Se entrega el QR estático hacia `https://cyberpositioning.com/links` en PNG
  y SVG (`public/qr/`). Se genera una sola vez con un paquete npm de QR
  ejecutado con `npx` (sin agregarlo como dependencia) y se versiona el
  resultado.

### GEO / CyberLanguage (`geo`)
- Sello de sub-marca: "CyberLanguage · por Cyber Positioning".
- Reutiliza `Hero`, `Problem`, `Method`, `Services` (los servicios GEO) y
  `StrategyBand`, con su copy actual, que ahora vive bajo `copy.geo.*`.
- El Hero GEO **ya no muestra `AuditWidget`**, que pasa a fase 2. El archivo
  se conserva pero ninguna página lo importa. El CTA es Agendar.
- Los símbolos de `BrandIcons.tsx` (prompt, respuesta, punto, comillas) se
  quedan como identidad de esta página.
- Se mantienen los TODO de copy pendientes que existen hoy (método y bajadas
  de servicios).

### Privacidad (`privacy`)
Se reescribe para una agencia en Puerto Rico (EE.UU.). Datos que se tratan:
- Agendamiento vía Cal.com (nombre, correo, teléfono opcional), procesado
  por Cal.com como proveedor.
- Conversaciones por WhatsApp (Meta como proveedor).
- Correo electrónico.
- No hay formulario, analítica ni cookies propias no esenciales; se aclara
  que Cal.com puede usar las suyas dentro de su embed.

Incluye finalidad, retención, derechos, contacto (`admin@`) y fecha de
actualización. La política se muestra marcada como borrador sin revisión
legal, y `DATA_CONTROLLER` vacío se ve como pendiente, igual que hoy.

### 404 (`notFound`)
"Esta página no existe. Volver a servicios." con un botón a Servicios.

## 7. Elementos globales

- **Header:**
  - Logo horizontal de CP.
  - Menú: Inicio, Servicios, Nuestro trabajo, Nosotros, GEO, Contacto.
  - Switch ES/EN y botón destacado "Agendar".
  - En móvil, menú hamburguesa (botón con `aria-expanded`).
  - El ítem activo se marca con `aria-current="page"`.
- **Footer:** logo, enlaces a las páginas, WhatsApp, correo general, horario,
  iconos de IG/FB, enlace a Privacidad, "CyberLanguage es la línea GEO de
  Cyber Positioning" y © 2026 Cyber Positioning.
- **WhatsApp flotante** (`WhatsAppFab`) en todas las páginas menos `links`.
- **Título del documento** por página e idioma, puesto en el cliente.
- **Meta global en `index.html`:** título y descripción de Cyber Positioning,
  `og:image` con el logo, `lang` inicial `es`.

## 8. Marca y assets

- **Tokens** (`src/styles/tokens.css`): se mantienen los nombres. Se ajustan
  `--color-ink` (línea 8) de `#0f1a2b` a `#11192a` y `--color-gold` (línea 9)
  de `#c6a15b` a `#c0a365` según los logos de CP. `--color-gold-hover`
  (línea 20) se oscurece en la misma proporción y `--color-porcelain`
  `#edeff3` queda igual. Los `rgba(15, 26, 43, …)` derivados, como
  `--shadow-raised` en la línea 52, pasan a `rgba(17, 25, 42, …)`.
- **Tipografías:** se mantienen Newsreader, Inter e IBM Plex Mono. El wordmark
  de CP es serif y es una imagen, así que no se agrega una fuente nueva.
- **Assets:** de los zips se copian a `public/brand/` los logos, los avatares
  de perfil y los iconos de sección, con nombres en kebab-case. Los PNG se
  optimizan.
- **Favicon:** se regenera desde el avatar de perfil de CP (SVG si se puede
  vectorizar limpio; si no, PNG 32/16 y apple-touch 180).
- **Imagen OG:** 1200×630 con el logo horizontal sobre Tinta.

## 9. Housekeeping

- Agregar `temp/` a `.gitignore`.
- `package.json`: el nombre pasa a `cyberpositioning-site`.
- Reescribir el `README.md` para la estructura nueva (dos marcas, rutas,
  config y pendientes).

## 10. Pendientes que la UI muestra explícitamente

Fotos y bios del equipo, historia de la agencia, material de producción,
razón social para la política, revisión del copy EN y revisión legal de la
política. Se siguen las convenciones del README: no se inventan datos ni se
ponen placeholders que parezcan reales.

## 11. Verificación

- `npm run build` (incluye `tsc -b`) sin errores. Las claves i18n tipadas
  garantizan que ES y EN estén completos.
- Tests unitarios, con Vitest como dev dependency, de la lógica pura:
  - `resolveRoute(pathname)`: cada ruta ES y EN, barra final, 404 en ES y EN.
  - `alternatePath(page, language)` para el switch.
  - `buildWhatsAppUrl`: con y sin servicio, en ES y EN, y encoding correcto.
- Revisión manual en `npm run preview` a 375px y en desktop:
  - Todas las rutas y el switch de idioma en cada una.
  - Plegables con mouse, teclado y apertura por hash.
  - Embed de Cal.com, `tel:` y WhatsApp.
  - Página Links sin menú ni flotante, y la 404.
