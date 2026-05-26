CLAUDE.md — NEXIX · Proyecto isidromotors

Leer este archivo completo antes de ejecutar cualquier tarea.


1. QUÉ ES ESTE PROYECTO
isidromotors es la web base demo de NEXIX para el sector automotriz (dealers de vehículos).
Esta web NO es un proyecto de un cliente real — es el template master del que se derivan
todas las webs de dealers que NEXIX vende y despliega.
El modelo de negocio es:

Esta web base está terminada y funciona como demo de ventas
Cuando se cierra un cliente dealer, se copia esta web y se personaliza con sus datos
Cada dealer tiene su propio repositorio GitHub y su propia carpeta en /proyectos
El trabajo de Claude es replicar + personalizar, NO construir desde cero


2. ESTRUCTURA DE CARPETAS
isidromotors/               ← proyecto base (este repo)
├── src/
├── public/
│   └── imagenes/           ← carros PNG sin fondo del template
├── proyectos/              ← una carpeta por cada dealer cliente
│   ├── nombre-dealer-1/    ← coincide EXACTAMENTE con el nombre del repo GitHub
│   │   ├── logo.png        ← logo del negocio (puede ser .svg, .webp)
│   │   └── info.txt        ← nombre, dirección, teléfono, redes del dealer
│   ├── nombre-dealer-2/
│   │   ├── logo.png
│   │   └── info.txt
│   └── ...
└── CLAUDE.md               ← este archivo
Regla crítica: El nombre de cada carpeta dentro de /proyectos coincide
exactamente con el nombre del repositorio GitHub de ese dealer.

3. FLUJO DE TRABAJO — REPLICAR UN DEALER
Cuando Dante te pase una o varias URLs de repositorios GitHub junto con
los nombres de carpetas de /proyectos, tu tarea es:
Paso 1 — Leer la carpeta del dealer
Antes de tocar cualquier código, abre la carpeta del dealer en /proyectos:

Lee el info.txt → extrae nombre del negocio, dirección, teléfono, redes sociales
Identifica el logo (png/svg/webp) y su ruta exacta

Paso 2 — Clonar el repo del dealer
bashgit clone [URL_DEL_REPO] proyectos/[nombre-dealer]/repo
Si el repo ya existe localmente, hacer git pull para actualizarlo.
Paso 3 — Copiar el proyecto base
Copia toda la estructura del proyecto isidromotors base hacia el repo del dealer.
No modifiques el proyecto base — trabaja solo dentro del repo del dealer.
Paso 4 — Personalizar con los datos del dealer
Cambia ÚNICAMENTE estos elementos (nada más):

Nombre del negocio → en navbar, hero badge, footer, título de la página (<title>)
Logo → reemplaza el logo placeholder por el de la carpeta del dealer

El logo siempre debe mostrarse con el nombre del negocio al lado o debajo, de forma estética
Si el logo ya incluye el nombre, solo ajusta tamaño y posición


Dirección → en footer y sección de contacto
Teléfono → en footer, contacto y botón de WhatsApp flotante
Redes sociales → actualiza los links de Instagram, Facebook, WhatsApp
Color de acento del círculo → si el dealer tiene color de marca definido en info.txt,
úsalo. Si no, mantén el rojo #C0392B del template

Paso 5 — Commit y push al repo del dealer
bashcd proyectos/[nombre-dealer]/repo
git add .
git commit -m "feat: personalización inicial para [nombre-dealer]"
git push origin main
Paso 6 — Reportar
Al terminar cada dealer, muestra un resumen:
✓ [nombre-dealer]
  Repo: [url]
  Cambios: nombre, logo, dirección, teléfono, redes
  Color de acento: [color usado]
  Estado: pusheado a main

4. SISTEMA DE DISEÑO — NO MODIFICAR SIN AUTORIZACIÓN
Estas decisiones de diseño están fijas para todo el template. No las cambies
a menos que Dante lo indique explícitamente.
Tipografía
css/* Display / Headlines */
font-family: 'Cormorant Garamond', serif;
font-weight: 300; /* normal */
font-style: italic; /* para palabras de acento */

/* UI / Body / Navegación */
font-family: 'Inter', sans-serif;
font-weight: 300, 400, 500;
Google Fonts import obligatorio:
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap
Paleta de colores
css:root {
  --bg-hero: #F4F2EF;          /* fondo hero y páginas internas */
  --text-primary: #1A1A1A;     /* textos principales */
  --text-secondary: #3A3A3A;   /* subtítulos */
  --text-muted: #888888;       /* texto de apoyo */
  --text-hint: #AAAAAA;        /* hints, disclaimer */
  --accent: #C0392B;           /* rojo de acento (círculo, italic highlights) */
  --border-light: #E0DDD8;     /* bordes sutiles */
  --white: #FFFFFF;            /* fondos de cards/searchbar */
}
Hero — estructura fija

Fondo: #F4F2EF
Layout: 2 columnas — 45% texto izquierda / 55% visual derecha
Headline: "Muévete diferente." — "diferente." en italic rojo
Subfrase: "Vehículos para quienes exigen más."
Search bar: Marca / Modelo / Año + botón lupa negro
Categorías: Sedan · SUV · Deportivos · Camionetas
Círculo rojo derecha con slider de 3 carros (drive transition)
Redes sociales verticales izquierda: Instagram, Facebook, WhatsApp (iconos reales con colores de marca)
Navbar: transparente, solo logo + hamburger ≡

Navbar

background: transparent sobre el hero
Solo logo + ícono ≡ (hamburger)
Sin links visibles en barra superior
Fondo sólido #1A1A1A cuando hay scroll (implementar con JS)

Disclaimer demo

Barra muy fina en el bottom del hero
font-size: 9px, letter-spacing: 0.18em, color: #AAAAAA
Texto: "SITIO DE DEMOSTRACIÓN · DATOS Y VEHÍCULOS FICTICIOS · NO ES WEB OFICIAL"
Sin pill ni fondo oscuro — solo texto sutil


5. REGLAS GENERALES DE TRABAJO

Siempre lee este archivo completo antes de empezar cualquier tarea
Nunca modifiques el proyecto base isidromotors cuando estés trabajando en un dealer
Nunca inventes datos — usa solo lo que está en info.txt y el logo de la carpeta
Si la carpeta de un dealer no tiene info.txt o no tiene logo, detenerte y avisar antes de continuar
Cuando Dante diga "trabaja en [nombre]", busca primero la carpeta en /proyectos/[nombre]
Los cambios van primero al repo del dealer, nunca al repo base
Cuando termines un dealer, siempre pide confirmación antes de pasar al siguiente
Si algo no está claro en el info.txt, pregunta — no asumas

TUS INPUTS
- URL: [PEGAR URL AQUÍ]
- Captura de pantalla: [ADJUNTAR IMAGEN AQUÍ]

---

ROL
Eres un frontend engineer de élite especializado en replicar páginas web con precisión pixel-perfect. Tu objetivo es producir un único archivo index.html que sea visualmente indistinguible de la captura de pantalla proporcionada.

---

FASE 1 — RECONOCIMIENTO (No escribas código aún)

1.1 — Scrapea el HTML fuente
Ejecuta en terminal:
curl -s -L \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
  -H "Accept-Language: es-419,es;q=0.9" \
  -H "Accept: text/html,application/xhtml+xml,application/xhtml+xml" \
  "[URL]" -o page_source.html

1.2 — Extrae assets del HTML descargado
Del archivo page_source.html identifica y lista:
- Todas las URLs de imágenes (src, srcset, data-src, background-image)
- Fuentes tipográficas (Google Fonts links, @font-face, font-family declarations)
- Variables CSS o design tokens (colores, espaciados, radios)
- Estructura de secciones y su orden vertical exacto

1.3 — Analiza la captura de pantalla pixel a pixel
Mirando la captura adjunta, documenta para CADA sección visible:
- Nombre/tipo de sección (navbar, hero, grid, banner, footer, etc.)
- Color de fondo exacto
- Textos literales presentes (cópialos exactamente, sin traducir ni resumir)
- Tipo y estilo de botones (filled, outline, ghost, link)
- Layout (centrado, izquierda, grid 2col, fullwidth, etc.)
- Imágenes presentes y su posición relativa al texto

---

FASE 2 — MAPA DE SECCIONES

Antes de codear, escribe un mapa ordenado de TODAS las secciones de la página:
SECCIÓN 1: [nombre] | fondo: [color] | layout: [tipo]
SECCIÓN 2: [nombre] | fondo: [color] | layout: [tipo]
...
Confirma que el orden del mapa coincide exactamente con la captura de pantalla de arriba hacia abajo.

---

FASE 3 — CONSTRUCCIÓN

Estructura: Un único archivo: todo el CSS en <style> y todo el JS en <script> embebidos. Sin frameworks externos. Solo HTML5 + CSS3 + Vanilla JS. Semántica correcta: <nav>, <main>, <section>, <footer>, <article>.

Imágenes: Usa las URLs REALES extraídas del HTML fuente (no placeholders). Si la URL es relativa, conviértela a absoluta con el dominio base. Atributo loading="lazy" en imágenes fuera del viewport inicial. Siempre incluir alt descriptivo.

Tipografía: Copia el font-stack exacto que usa el sitio original. Si usa Google Fonts, incluye el <link> en el <head>. Respeta los pesos (font-weight), tamaños y line-height originales.

Colores: Define TODAS las variables en :root { --color-xxx: #xxxxxx; }. Extrae los colores exactos del HTML/CSS fuente, no los adivines.

Botones: Identifica todas las variantes de CTA presentes en la captura. Respeta border-radius, padding, font-size y estados hover originales. Implementa transition suave (0.2s-0.3s ease) en todos los botones.

Navbar: Position: sticky, top: 0, z-index: 9999. Replica estructura exacta: logo + links + íconos si los hay. Si en la captura tiene blur o transparencia, implementar con backdrop-filter.

Responsive: Implementa breakpoints en 1200px, 1024px, 768px, 480px. En mobile: stacks verticales, imágenes full-width, tipografía reducida ~20%.

---

FASE 4 — QA CHECKLIST

Antes de entregar, verifica cada punto:
- Todas las secciones de la captura están presentes y en el mismo orden vertical
- Ningún texto fue inventado — todos copiados literalmente de la captura o el HTML
- Imágenes cargan desde URLs reales (no placeholders ni base64 innecesario)
- Los colores de fondo de cada sección coinciden con la captura
- Los botones tienen el estilo correcto (filled vs outline vs ghost)
- El navbar es sticky y funciona en scroll
- El footer replica todas las columnas y links visibles en la captura
- La página es responsive y no rompe en mobile
- No hay errores en consola del navegador

ENTREGABLE FINAL: Un único archivo: index.html
Cuando termines, abre el archivo en el navegador, toma un screenshot y compáralo lado a lado con la captura original. Si hay diferencias visibles, corrígelas antes de entregar.