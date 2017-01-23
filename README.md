# fccmontevideo.com

Este sitio usa como base el proyecto **[Victor-Hugo](https://github.com/netlify/victor-hugo)**

## Comenzar

Asegúrate de tener instalada la última versión de [Node.js](https://nodejs.org), npm y [Hugo](https://gohugo.io/)

```bash
// En Mac
brew install hugo
```
Lo siguiente es clonar este repositorio e instalar las dependencias del proyecto:

```bash
// Clonar el repo
git clone https://github.com/FreeCodeCampMontevideo/fccmontevideo.com

// Moverse dentro de carpeta creada
cd fccmontevideo.com

// Instalar las dependencias
npm install

// Iniciar el servidor de desarrollo
npm start
```

Luego visita http://localhost:3000/ para ver el sitio - BrowserSync recargara el navegador automáticamente cuando los estilos u otro contenido cambie.

Para generar la versión estática del sitio en la carpeta `/dist` usar:

```bash
npm run build
```

## Estructura de carpetas

```
|--site                // Lo que está dentro de esta carpeta es lo que Hugo usa para generar el sitio
|  |--content          // Contenido del sitio como posts, paginas, etc
|  |--data             // Archivos con datos como pueden ser JSON o YAML
|  |--layouts          // Acá van los templates
|  |  |--partials      // Acá van ciertas partes reutilizable que se pueden incluir en los templates (ej: header, footer, etc)
|  |  |--index.html    // El index del sitio
|  |--static           // Los archivos que estén acá terminan en el root del sitio
|--src                 // Archivos que se procesan con webpack
|  |--css              // Los archivos en esta carpeta terminan en /css/... luego de generados
|  |--js               // app.js será generado a partir de /js/app.js con babel
```

## Conceptos Básicos

Puedes leer más acerca de cómo funcionan los templates en Hugo aquí:

https://gohugo.io/templates/overview/

Una de las paginas más útiles es la que tiene las funcionalidades disponibles en Hugo:

https://gohugo.io/templates/functions/

Los assets como imágenes o fuentes deben ir directamente  en `site/static`.

Los archivos en esta carpeta terminan en el root del sitio. Por ejemplo, si tienes `site/static/favicon.ico` una vez generado el sitio estará disponible en `/favicon.ico` y así sucesivamente.

El archivo `src/js/app.js` es el punto de entrada para webpack y será compilado en `/dist/app.js`.

Puedes usar las funcionalidades de ES6/ES2015.

Cualquier archivo CSS en `src/css/` será compilado usando [PostCSS Next](http://cssnext.io/)
a la carpeta `/dist/css/{nombre_de_archivo}.css`.
