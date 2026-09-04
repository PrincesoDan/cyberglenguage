# **Brief de desarrollo**

# **Brief de desarrollo** **Plataforma de auditoría web GEO con IA**

# 1\. Resumen ejecutivo

Se busca desarrollar una plataforma web que analice el sitio de un usuario y le entregue una **auditoría automatizada de posicionamiento GEO** (Generative Engine Optimization): qué tan bien preparado está su sitio para ser encontrado, entendido y **citado por herramientas de IA generativa** (ChatGPT, Gemini, Claude, Perplexity, etc.).

El usuario ingresa la URL de su web, obtiene un **puntaje de 0 a 100**, y a cambio de su contacto recibe un **reporte con recomendaciones concretas** y un llamado a agendar una consultoría.

**Enfoque deliberado:** el producto se posiciona alrededor de **GEO**, no como una auditoría SEO genérica. El mercado de auditoría SEO está saturado (SEMrush, Ahrefs, SEOptimer, etc.); GEO es una categoría emergente y es la ansiedad del momento para dueños de sitios ("¿me menciona la IA o soy invisible?"). Todo el marketing y la interfaz lideran con GEO. Las señales de SEO técnico **sí se evalúan**, pero se presentan como los *cimientos* que ayudan a que la IA encuentre y cite el sitio, no como el titular.

# 2\. Objetivo de negocio

La web **no es el producto final: es un imán de clientes (lead magnet)**. La auditoría gratuita atrae a interesados en mejorar su posicionamiento para luego venderles consultoría GEO personalizada. Por lo tanto, dos cosas son críticas:

- **Capturar el contacto del usuario** (nombre \+ email) durante el flujo.  
- Un **CTA claro para agendar una consultoría**, más una escalera de conversión posterior (ver sección 5).

  # 3\. Usuario objetivo

Dueños de negocios o de sitios web, con **poco o ningún conocimiento técnico** de SEO/GEO. El lenguaje del reporte y de la interfaz debe ser **claro y sin jerga**, explicando el "qué" y el "por qué" de cada recomendación.

# 4\. Alcance del MVP

### 4.1 Análisis del sitio \+ puntaje (0–100)

El sistema recibe una URL, rastrea el sitio y calcula un **puntaje global**, desglosado en **sub-puntajes por categoría** (ej. SEO técnico, estructura de contenido, señales GEO). El desglose hace el puntaje más útil y creíble.

### 4.2 Auditoría con recomendaciones (impulsada por IA)

A partir de los hallazgos del análisis, un modelo de IA (API de Claude, OpenAI o Gemini) genera **recomendaciones en lenguaje claro, personalizadas y priorizadas** según lo detectado en esa web específica. Ver nota de costos en la sección 6.4: **esta llamada a la IA se dispara solo después de capturar el email.**

### 4.3 Reporte descargable (PDF)

El usuario descarga la auditoría como **PDF con branding de la marca**: puntaje, sub-puntajes, hallazgos y recomendaciones priorizadas.

### 4.4 Captura de leads

Los datos de cada lead (nombre, email, URL analizada, puntaje, sub-puntajes, fecha) deben **guardarse y/o enviarse** a un destino a definir (hoja de cálculo, CRM o notificación por email). Incluir **checkbox de consentimiento y enlace a política de privacidad** (requisito legal al capturar emails).

### 4.5 Agendar una llamada

Integración para agendar consultoría (**Calendly o Cal.com embebido**), visible como CTA principal tras la auditoría.

# 5\. Flujo de usuario (optimizado para conversión)

1. **Landing enfocada en GEO.** El usuario ingresa la URL de su web. El titular ataca directo la inquietud ("¿Te encuentran las IAs?").

2. **Análisis con proceso visible.** En lugar de un spinner mudo, se muestra el proceso paso a paso ("revisando tu página principal… buscando datos estructurados… evaluando si tu contenido es citable"). Reduce el abandono en la espera y hace que el puntaje se sienta *ganado* y creíble.

3. **Resultado inmediato \+ teaser bloqueado.** Se muestra el **puntaje gratis** junto con un adelanto bloqueado: *"Puntaje: 42\. Encontramos 3 problemas críticos y 7 oportunidades"* con los detalles borrosos/con candado. Se regala **un (1) hallazgo concreto real** del sitio para demostrar valor; el resto queda bloqueado. El número solo sacia la curiosidad; los detalles bloqueados generan el picor que hace dejar el email.  
   - *Opcional recomendado:* **benchmark de sector** ("Tu puntaje es 42; el promedio de tu rubro es 61") para generar urgencia.

4. **Muro de captura de lead.** Para ver la auditoría completa y descargar el PDF, se pide **nombre \+ email** (aquí se captura el lead y **recién aquí se dispara la llamada a la IA**).

5. **Auditoría completa \+ escalera de CTAs.** El usuario recibe el reporte con recomendaciones priorizadas y varias puertas de conversión, no solo una:  
   - CTA principal: **agendar consultoría**.  
   - CTA secundario de menor fricción: ej. descargar checklist o recibir un mini-teardown por email.

6. **Re-análisis.** El usuario puede **volver a correr la auditoría** tras hacer cambios y ver si el puntaje subió. Genera re-engagement y demuestra el valor del trabajo en vivo.

> **Nota sobre nurturing (fuera del build técnico, pero a coordinar):** reservar una consultoría es un compromiso alto y la mayoría no lo hará en caliente. El lead capturado debería entrar a una secuencia de emails automatizada (entrega del reporte → tips útiles → empuje a la consultoría). Definir si esto lo maneja el desarrollador vía la integración de CRM/email o la dueña por separado.

# 6\. Motor de auditoría — consideraciones técnicas

Este es el punto técnico más importante y debe aterrizarse entre desarrollador y consultora.

### 6.1 Qué se evalúa

- **SEO técnico (cimientos):** meta títulos y descripciones, encabezados (H1/H2…), datos estructurados (schema.org), velocidad de carga, versión móvil, sitemap, robots.txt, HTML semántico, enlaces internos.  
- **Señales GEO (foco):** presencia de datos estructurados, contenido claro y "citable", formato de preguntas/respuestas (FAQ), densidad factual, señales de autoría/autoridad (E-E-A-T), archivo `llms.txt`, y qué tan directamente el contenido responde preguntas.

### 6.2 Reto de crawling (importante para la cotización)

Muchos sitios modernos son **SPAs con JavaScript** o **bloquean bots**. Un `fetch` simple vería una página vacía y puntuaría mal por la razón equivocada. Es probable que se necesite un **navegador headless** (ej. Playwright/Puppeteer) para renderizar antes de analizar. Considerar esto en el stack y en el costo.

### 6.3 La rúbrica la define la consultora

**Qué señales se miden y cuánto pesa cada una lo define la consultora** (es su expertise). El desarrollador construye el motor que ejecuta esa rúbrica. La rúbrica puede entregarse o desarrollarse en conjunto.

### 6.4 Control de costos de API

El **escaneo técnico es barato**; la **generación de recomendaciones con IA es lo caro**. Diseño recomendado:

- Escaneo técnico → **gratis**, muestra puntaje y teaser.  
- Llamada al modelo de IA → **solo después de capturar el email**. Así el gasto de API ocurre solo sobre leads reales y se limita el abuso de bots/competidores.  
- Considerar **límites** (ej. auditorías por usuario/día, rate limiting por IP).

### 6.5 Calibración del puntaje

Definir a propósito la curva del puntaje: la mayoría de los sitios debería caer en una banda **\~40–65** ("hay trabajo por hacer, pero es arreglable"). Muy bajo desanima y parece estafa; muy alto elimina la razón para contratar. Es decisión conjunta con la consultora.

# 7\. Propuesta inicial de dimensiones de puntaje

Punto de partida ajustable según criterio de la consultora:

- Señales GEO / preparación para IA — ej. **40%**  
- Estructura y calidad del contenido — ej. **30%**  
- SEO técnico y rendimiento — ej. **30%**

  # 8\. Requisitos generales

- **Idiomas:** inglés y español (interfaz y reportes). Detectar idioma o permitir seleccionarlo.  
- **Responsive:** debe verse bien en móvil y escritorio.  
- **Branding:** aplicar identidad visual de la marca (logo, colores, tipografía). *Indicar si existe guía de marca o hay que definirla.*  
- **Legal:** consentimiento explícito para captura de email \+ política de privacidad.

  # 9\. Stack, hosting y costos

- **Stack:** abierto a la propuesta del desarrollador; se agradece recomendación según costo/mantenimiento.  
- **Hosting y dominio:** a definir quién los provee y administra.  
- **Costos recurrentes a estimar:** costo de API de IA por auditoría, y costo de infraestructura para el crawl (headless browser).

  # 10\. Fuera de alcance (roadmap futuro)

- **Verificación en vivo de citaciones reales** en herramientas de IA (consultar las APIs de esos modelos para ver si el sitio ya es citado). Técnicamente posible pero más complejo y costoso → **v2**.  
- **Servicio de implementación/optimización** de la web del cliente por parte del equipo → objetivo a futuro.  
- **Monitoreo recurrente** ("revisamos tu puntaje GEO cada mes y te avisamos si baja") como posible producto de suscripción → v2. *(Convierte la consultoría única en ingreso recurrente; vale la pena tenerlo en el horizonte del diseño.)*  
- **Comparación con competidores** ("tu puntaje GEO vs. tus 3 competidores directos") → posible feature de pago.  
- **Generador de `llms.txt`** como regalo/gancho descargable → opcional, alto valor percibido.

  # 11\. Lo que necesitamos del desarrollador

1. **Propuesta de stack**, hosting y justificación (costo/mantenimiento).  
2. **Estimación de costos recurrentes:** API de IA por auditoría \+ infraestructura de crawl.  
3. **Cotización desglosada** (ej. MVP vs. funcionalidades opcionales) con **tiempo estimado de entrega**.  
4. **Recomendaciones técnicas** sobre el motor de análisis (sección 6): qué señales GEO son medibles hoy de forma confiable y cuáles no.

   # 12\. Decisiones pendientes

- ¿Dónde deben llegar/guardarse los leads? (hoja de cálculo)  
- ¿Existe ya branding/guía de marca? (No)  
- ¿La secuencia de nurturing por email la manejas tú o entra en el build? (Puedo hacerlo yo)

# **Brief Branding \- Estratégica**

**”**

BRAND & SITE BRIEF

**Auctela Advisory**

Consultoría de visibilidad en IA · GEO / AEO

*Documento de identidad de marca y guía para desarrollo web.*

Preparado por Gabriela Fonseca · v1 (editable)

CÓMO USAR ESTE DOCUMENTO

# **Antes de empezar**

Este brief tiene dos capas. La capa técnica (color, tipografía, tokens de UI, assets) es copy-paste-ready para el desarrollador. La capa estratégica (mensaje, voz, estructura del sitio) es lo que hace que la marca se sienta profesional y no genérica.

* **"Auctela"** está usado como nombre de trabajo. Si aún no está 100% cerrado, reemplázalo con Buscar y Reemplazar (Ctrl/Cmd \+ H) en todo el documento.

* **Los tokens:** Todos los valores de color, tamaño y tipografía son finales y están listos para código.

01 — MARCA

# **Qué somos y cómo sonamos**

## **Posicionamiento**

Auctela Advisory es una consultoría que ayuda a marcas a aparecer y ser citadas dentro de asistentes de IA (ChatGPT, Claude, Perplexity, Gemini) mediante GEO y AEO. La IA es la herramienta y el canal; el producto es el criterio experto. No somos un software: somos asesoría.

## **Tagline**

* Principal (EN): *Get recommended by AI.*  
* Alternativas (EN): *When they ask, be the answer.* / *Be the one AI recommends.*  
* Versión ES: *Que la IA te recomiende.*

## **Propuesta de valor (una línea)**

Tus clientes ya no le piden recomendaciones a un amigo — se las piden a la IA. Hacemos que, cuando pregunten por lo que tú ofreces, la IA te recomiende a ti.

## **Mensajes clave**

1. **La mejor recomendación ya no viene de un amigo, viene de la IA.** Tú siempre supiste que una recomendación de confianza vende más que cualquier campaña. Hoy esa recomendación la da ChatGPT — y le habla directo a tu cliente en el momento en que está decidiendo.  
2. **Que la IA te nombre es la nueva mejor ubicación.** No llegas cuando el cliente ya eligió; llegas dentro de la pregunta, cuando todavía está decidiendo a quién elegir. Ahí es donde se gana o se pierde la reserva.  
3. **No es una herramienta, es estrategia.** Que la IA te recomiende no es suerte ni un truco que instalas. Es contenido, reputación y datos estructurados que le enseñan a la IA por qué eres la respuesta correcta — hecho por expertos, no por un plugin.

## **Voz y tono**

* **Es:** Experta, clara y segura. Sin hype ni promesas vacías.

* **No es:** Recargada, técnica de más, o llena de buzzwords que nadie entiende.

* **Regla:** Frases cortas. Verbos activos. Un dato concreto vale más que un adjetivo.

02 — LOGO

# **Sistema de logo**

Concepto: unas comillas convertidas en símbolo — dice "te citan" de un vistazo. Se entrega en un sistema de versiones, no una sola imagen.

## **Versiones a entregar**

* **Primaria:** logo horizontal (comillas \+ "Auctela Advisory" al lado). Para el header del sitio.

* **Apilada:** comillas arriba, nombre abajo. Para espacios cuadrados.

* **Isotipo:** solo las comillas. Para favicon, foto de perfil y app.

* **Favicon:** comillas simplificadas a 32×32 y 16×16 px.

## **Reglas de uso**

* Área de protección: dejar alrededor del logo un margen mínimo igual a la altura de las comillas.

* Tamaño mínimo: 24 px de alto para el isotipo; 120 px de ancho para la versión horizontal.

* Versión sobre fondo oscuro (Tinta): comillas en Oro o Porcelana. Sobre fondo claro: comillas en Tinta u Oro.

* **Prohibido —** No: deformar, rotar, aplicar sombras/degradados, ni cambiar los colores fuera de la paleta.

03 — COLOR

# **Paleta**

Base oscura (autoridad) \+ metálico cálido apagado (elegancia) sobre un neutro frío (claridad). Un color manda, uno destaca, dos acompañan.

|  | Nombre | HEX | Uso |
| :---- | :---- | :---- | :---- |
|  | **Tinta Profunda** | \#0F1A2B | Principal. Fondos oscuros, header, footer, titulares. \~60% del uso. |
|  | **Oro Champán** | \#C6A15B | Acento. Botones, links, detalles, el logo. Solo en dosis mínimas. \~10%. |
|  | **Porcelana** | \#EDEFF3 | Fondo claro de secciones. Da aire y limpieza. \~25%. |
|  | **Acero** | \#5C6B7C | Soporte. Textos secundarios, subtítulos, bordes. \~5%. |

## **Colores funcionales (UI)**

|  | Rol | HEX | Uso |
| :---- | :---- | :---- | :---- |
|  | **Blanco puro** | \#FFFFFF | Fondo de tarjetas y cuerpo principal. |
|  | **Éxito** | \#1E8E5A | Confirmaciones, estados positivos. |
|  | **Error** | \#C0392B | Mensajes de error y validación. |
|  | **Borde / divisor** | \#D8DCE3 | Líneas, bordes de inputs y tarjetas. |

## **Accesibilidad (contraste)**

* Texto Tinta (\#0F1A2B) sobre Porcelana o Blanco: cumple AAA. Es tu combinación por defecto para leer.

* Texto Porcelana sobre Tinta: cumple AAA. Para secciones oscuras.

* **Ojo:** Oro (\#C6A15B) NO tiene contraste suficiente para texto pequeño sobre blanco. Úsalo para detalles, íconos y botones grandes — nunca para párrafos.

04 — TIPOGRAFÍA

# **Tipografías**

Serif editorial para titulares (expertise, elegancia) \+ sans limpia para el cuerpo (claridad) \+ monoespaciada para datos y detalles técnicos (guiño a la IA). Todas gratuitas en Google Fonts.

| Rol | Fuente | Pesos | Uso |
| :---- | :---- | :---- | :---- |
| **Display** | Newsreader | 300 / 400 / 500 | Titulares y frases hero. |
| **Cuerpo** | Inter | 400 / 500 / 600 | Párrafos, navegación, botones. |
| **Mono** | IBM Plex Mono | 400 / 500 | Etiquetas, datos, eyebrows. |

## **Escala de tamaños (web)**

| Elemento | Tamaño | Peso | Fuente |
| :---- | :---- | :---- | :---- |
| **H1 / Hero** | 48–64 px | 400 | Newsreader |
| **H2** | 32–40 px | 400 | Newsreader |
| **H3** | 22–26 px | 500 | Newsreader |
| **Cuerpo** | 16–18 px | 400 | Inter |
| **Etiqueta / eyebrow** | 12–13 px | 500 · \+letter-spacing | IBM Plex Mono |

## **Import para el desarrollador**

\<link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@300;400;500\&family=Inter:wght@400;500;600\&family=IBM+Plex+Mono:wght@400;500\&display=swap" rel="stylesheet"\>

05 — TOKENS DE UI

# **Componentes para el desarrollador**

Valores listos para pegar en CSS. Ajustables, pero mantienen la coherencia visual de la marca.

| Token | Valor | Notas |
| :---- | :---- | :---- |
| **Botón primario** | bg \#C6A15B · texto \#0F1A2B | Hover: oscurecer oro \~8%. Radio 8px. |
| **Botón secundario** | borde \#0F1A2B · texto \#0F1A2B | Fondo transparente. Hover: fondo Tinta, texto Porcelana. |
| **Link** | \#C6A15B | Subrayado en hover. |
| **Tarjeta** | bg \#FFFFFF · borde \#D8DCE3 | Radio 14–16px. |
| **Radio de borde** | 8px botones · 14px tarjetas | Consistente en todo el sitio. |
| **Sombra** | 0 24px 60px \-30px rgba(15,26,43,.35) | Suave y baja. Solo en elementos destacados. |
| **Espaciado base** | escala 8px (8/16/24/32/48/64) | Padding de secciones: 64–96px vertical. |
| **Ancho de contenido** | máx. 1100–1200px centrado | Márgenes laterales 24px en móvil. |

06 — ESTRUCTURA DEL SITIO

# **Mapa de la web (landing)**

* **Hero:** logo \+ tagline \+ CTA principal ("Agenda una llamada"). El titular cuenta la promesa en una frase.

* **El problema:** qué son GEO y AEO en lenguaje simple, y por qué importan ahora.

* **Cómo trabajamos:** tu metodología en 3 pasos (ej. Auditar → Optimizar → Medir citas).

* **Servicios:** qué recibe el cliente (auditoría de visibilidad IA, contenido, datos estructurados, seguimiento de citas).

* **Prueba:** logos de clientes, resultados o un mockup de la marca siendo citada por la IA.

* **Sobre mí:** tu bio corta — recuerda que esto es consultoría, la persona importa.

* **Contacto:** CTA final \+ formulario o link a agendar.

## **Nota sobre el hero**

Como es consultoría, el hero debe transmitir criterio humano, no una app. Un titular fuerte ("Be the source AI cites") \+ un mockup de una respuesta de IA citando a un cliente es lo más memorable y explica el negocio sin texto extra.

07 — ENTREGABLES

# **Checklist de assets para el desarrollador**

* **☐** Logo en SVG (horizontal, apilado, isotipo) — versión clara y oscura.

* **☐** Logo en PNG con fondo transparente (varios tamaños).

* **☐** Favicon (32×32 y 16×16) \+ apple-touch-icon (180×180).

* **☐** Imagen OG (1200×630) para compartir el link en redes y WhatsApp.

* **☐** Paleta y tokens (este documento) \+ import de fuentes.

* **☐** Copy final de cada sección (o el borrador para que lo maquete).

08 — POR CONFIRMAR

# **Antes de lanzar**

* **☐** Nombre final de la marca (cerrar "Auctela Advisory" o variante).

* **☐** Dominio registrado (.com recomendado para consultoría).

* **☐** Handle en LinkedIn con el mismo nombre… ¿?

* **☐** Email profesional con el dominio (hola@tudominio.com).

Tinta \#0F1A2B  ·  Champán \#C6A15B  ·  Porcelana \#EDEFF3  ·  Acero \#5C6B7C

# **Brief Branding \- Colores y Logos**

[https://claude.ai/design/p/0f8fcc4a-1988-4303-be97-dfc44d363f60?file=Tablero+de+marca.dc.html\&via=share](https://claude.ai/design/p/0f8fcc4a-1988-4303-be97-dfc44d363f60?file=Tablero+de+marca.dc.html&via=share) 

# **Inspiración**

# Diseños:

[https://www.omni2design.com/](https://www.omni2design.com/) 

[https://by-kin.com/work/dentons](https://by-kin.com/work/dentons) 

[https://iventions.com/](https://iventions.com/) 

# Competidores:

[https://geoptie.com/free-geo-audit](https://geoptie.com/free-geo-audit) 

[https://www.babylovegrowth.ai/en/free-tools/ai-search-audit?websiteUrl=https%3A%2F%2Fberrios.pr](https://www.babylovegrowth.ai/en/free-tools/ai-search-audit?websiteUrl=https%3A%2F%2Fberrios.pr) 

[https://www.semrush.com/analytics/keywordoverview/?db=uk\&fid=13116015](https://www.semrush.com/analytics/keywordoverview/?db=uk&fid=13116015) 

[https://www.staycited.com/](https://www.staycited.com/) 

# 

# **Brainstorming**

Brainstorming: 

A lot of those prompts will be:

→ the same intent with different wording

→ questions nobody in your ICP would naturally ask

→ variations with no clear buying context

→ prompts that add volume without adding new insight

That’s where Prompt Research needs to go deeper than keyword expansion.

A useful prompt set should help you understand:

✅ what problem the buyer is trying to solve

✅ what stage of the decision they are in

✅ what alternatives they are considering

✅ what context changes the recommendation

✅ which conversations are actually worth tracking

