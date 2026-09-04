# CyberLanguage — Landing

Landing de **CyberLanguage**, consultoría de visibilidad en IA (GEO / AEO).

La página es el **imán de clientes**, no el producto: su trabajo es capturar el
contacto de quien quiere saber si la IA lo recomienda, y llevarlo a agendar una
consultoría. El brief completo está en
[`info/Briefs_ Auctela Advisory.md`](info/Briefs_%20Auctela%20Advisory.md); casi
todo el contenido y los tokens de esta landing salen de ahí, y cada archivo cita
la sección de la que viene.

> **Ojo con el nombre:** el brief está escrito con el nombre de trabajo *Auctela
> Advisory*. La marca definitiva es **CyberLanguage** — el propio brief autoriza
> el reemplazo en su sección "CÓMO USAR ESTE DOCUMENTO".

---

## Cómo montarlo en local

**Requisitos:** Node **20.19+** o **22.12+** (lo exige Vite 7; ver
`node_modules/vite/package.json` → `engines`). Probado en Node 23.1.0 / npm 11.4.2.

```bash
npm install     # solo la primera vez
npm run dev     # servidor de desarrollo → http://localhost:5173
```

Eso es todo: no hay backend, ni base de datos, ni variables de entorno que
configurar. La landing es 100% estática.

### Los tres comandos que hay

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload en `http://localhost:5173` |
| `npm run build` | Chequea tipos (`tsc -b`) y compila a `dist/`. Falla si hay error de TypeScript |
| `npm run preview` | Sirve lo que hay en `dist/` en `http://localhost:4173`, para revisar el build real |

Para revisar algo tal como se va a publicar, corre `npm run build` y después
`npm run preview` — no `dev`.

---

## Stack

| | |
|---|---|
| **React 19** + **TypeScript** | Sin router: es una sola página con anclas |
| **Vite 7** | Build y servidor de desarrollo |
| **CSS plano** | Sin Tailwind ni CSS-in-JS. Un `.css` por componente + tokens globales |

**Cero dependencias de runtime más allá de React.** Los iconos son SVG inline y
las fuentes se cargan por CDN de Google Fonts desde `index.html`.

---

## Qué hay hecho

### Estructura de la página

El orden lo define [`src/App.tsx`](src/App.tsx):

| Sección | Componente | Contenido |
|---|---|---|
| Header | `Header.tsx` | Logo, navegación, switch ES/EN, CTA de agenda |
| Hero | `Hero.tsx` | Titular, propuesta de valor y la tarjeta de auditoría |
| El problema | `Problem.tsx` | Qué son GEO y AEO, y por qué importan ahora |
| Cómo trabajamos | `Method.tsx` | La metodología en 3 pasos |
| Servicios | `Services.tsx` | Los 4 servicios |
| Banda de cierre | `StrategyBand.tsx` | "No es una herramienta, es estrategia" |
| Contacto | `Contact.tsx` | CTA final |
| Footer | `Footer.tsx` | Logo, descriptor y copyright |

**Faltan dos secciones que el brief pide** y que quedaron fuera por no tener los
datos (está anotado en `src/App.tsx:11-16`): **"Prueba"** (logos de clientes,
resultados o un mockup de la marca siendo citada) y **"Sobre mí"** (la bio de la
consultora — el brief insiste en que, siendo consultoría, la persona importa).
Cuando lleguen esos contenidos van entre `<Services />` y `<Contact />`.

### El widget de auditoría — es una maqueta

Esto es importante y es fácil de malinterpretar al verlo funcionando.

[`AuditWidget.tsx`](src/components/AuditWidget.tsx) reproduce el flujo completo
del brief §5: formulario → proceso paso a paso → puntaje con teaser bloqueado.
Pero **es solo interfaz**. No rastrea el sitio, no calcula nada, no llama a
ninguna IA y no envía los datos a ningún lado.

El puntaje que muestra es **42 fijo**, tomado literalmente del ejemplo del brief
(`AuditWidget.tsx:22`). En pantalla sale marcado como demo. Todo el motor de
auditoría del brief §6 — crawling con navegador headless, rúbrica, llamada al
modelo, PDF, captura del lead — **está por construir**.

### Bilingüe ES / EN

Todo el texto vive en [`src/i18n/es.ts`](src/i18n/es.ts) y
[`src/i18n/en.ts`](src/i18n/en.ts), tipados contra la misma interfaz `Copy`
(`src/i18n/types.ts`), así que si agregas una clave en un idioma y no en el otro,
`npm run build` falla. **No hay texto suelto dentro de los componentes.**

El idioma arranca detectando el del navegador — cualquier cosa que no sea inglés
cae a español (`LanguageContext.tsx:23-26`) — y el switch del header lo cambia a
mano.

### Marca

Los tokens están en [`src/styles/tokens.css`](src/styles/tokens.css) con los
valores literales del brief. **No inventes valores ahí**: si falta un color o un
tamaño, se define primero en el brief.

```
Tinta #0F1A2B · Champán #C6A15B · Porcelana #EDEFF3 · Acero #5C6B7C
Newsreader (títulos) · Inter (texto) · IBM Plex Mono (etiquetas)
```

Los iconos entregados en `info/*.jpg` venían como JPG de ~200px con el fondo
horneado, así que no servían sobre secciones de otro color ni para favicon. Están
redibujados como SVG vectoriales en
[`src/components/BrandIcons.tsx`](src/components/BrandIcons.tsx), y ahí se explica
de qué archivo sale cada uno:

| Icono | Dónde se usa |
|---|---|
| `LogoMark` — el prompt `>` con el cursor | Header, footer y favicon |
| `AnswerMark` — `[•]`, la respuesta de la IA | Píldora del hero |
| `PointMark` — el punto sobre la línea | Encabeza "El problema" |
| `QuoteMark` — las comillas | Banda de cierre |

La parte estructural de cada SVG usa `currentColor`, así que hereda Porcelana
sobre fondo oscuro y Tinta sobre fondo claro — que es la regla de uso del brief.
El acento va siempre en Oro. Los JPG originales siguen intactos en `info/`.

El favicon completo (SVG + PNG 32/16 + apple-touch-icon 180) está en `public/`,
generado a partir del isotipo.

---

## Qué falta

### 1. Configuración — la landing se degrada sola

[`src/config.ts`](src/config.ts) tiene tres valores vacíos a propósito. Mientras
lo estén, **la UI no inventa destinos**: avisa que falta el dato.

| Constante | Qué pasa mientras esté vacía |
|---|---|
| `SCHEDULING_URL` | El botón "Agenda una llamada" sale **deshabilitado** y se muestra "Enlace de agenda pendiente de configurar" |
| `CONTACT_EMAIL` | No se muestra ningún email en Contacto |
| `PRIVACY_POLICY_URL` | El consentimiento se muestra sin enlace a la política |

Llenar `SCHEDULING_URL` con el link de Calendly o Cal.com es el cambio de una
línea que activa el CTA principal de toda la página.

**`PRIVACY_POLICY_URL` es requisito legal**, no un detalle: el brief §4.4 y §8
exigen consentimiento explícito con enlace a la política antes de capturar
emails. Hoy el checkbox existe pero no tiene a dónde apuntar.

### 2. Copy pendiente de la consultora

Hay texto que salió derivado del brief y que ella tiene que confirmar. Está
marcado con `TODO` en el código — `grep -rn "TODO" src/` los lista todos:

- **La metodología de 3 pasos** (`Method.tsx:5-7`): el brief entrega
  "Auditar → Optimizar → Medir citas" explícitamente como *ejemplo*. Hay que
  cerrar la definitiva antes de publicar.
- **Las bajadas de Servicios** (`Services.tsx:6-7`): los cuatro títulos son
  literales del brief, pero las descripciones están derivadas de otras secciones.
- **Revisión del copy en inglés** (`en.ts:6`).

### 3. Assets

- **Imagen OG 1200×630** para compartir el link en redes y WhatsApp. Es el
  `TODO` que queda en `index.html:24`. Sin ella, el link se comparte sin
  previsualización.

### 4. Un bug conocido

La píldora del descriptor en el hero **se desborda en móvil**. El texto solo ya
mide ~396px y en un iPhone quedan ~342px útiles, así que se sale de pantalla en
cualquier teléfono. Se arregla con `flex-wrap: wrap` y `max-width: 100%` en
`.hero__badge` (`src/components/Hero.css`), pero está sin tocar.

### 5. Todo el producto

El motor de auditoría del brief §6 completo: crawling, rúbrica de puntaje,
recomendaciones con IA, PDF con branding, guardado del lead y la integración de
agenda. Nada de eso existe todavía — hoy hay una landing con una maqueta del
flujo.

---

## Estructura de archivos

```
index.html              Metadatos, favicons e import de fuentes
public/                 Favicon (SVG + PNG 32/16) y apple-touch-icon
src/
  main.tsx              Entrypoint: monta React dentro de <LanguageProvider>
  App.tsx               El orden de las secciones
  config.ts             URLs pendientes (agenda, email, política)
  components/           Un .tsx + su .css por sección
    BrandIcons.tsx      Los cuatro SVG de marca
    AuditWidget.tsx     La maqueta del flujo de auditoría
    ScheduleButton.tsx  CTA de agenda (se deshabilita solo si falta la URL)
  i18n/                 Todo el texto, en es.ts y en.ts
  lib/url.ts            Normalización y validación de URL y email
  styles/
    tokens.css          Los tokens del brief — la fuente de verdad de la marca
    global.css          Reset, tipografía base y clases compartidas
info/                   El brief original y los assets de marca entregados
```

### Convenciones

- **El texto va en `i18n/`, nunca dentro de un componente.**
- **Los valores de marca van en `tokens.css`**, y salen del brief.
- Los comentarios explican **por qué**, y citan la sección del brief que lo pide.
- Si un dato no existe todavía, **la UI lo dice** en vez de apuntar a un link
  inventado. No rellenar con placeholders que parezcan reales.
