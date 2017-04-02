---
date: 2017-02-26T14:35:30-03:00
title: Como crear un articulo para el blog
draft: false
author: matiasvj
categories: ["Tutoriales"]
image: /img/como-crear-articulo.jpg
description: Bienvenidos al blog de freeCodeCamp Montevideo, en esta oportunidad explicaré como crear un artículo o post de una forma fácil.
---

### Introducción

Para crear un artículo o post hay dos maneras que podrás optar según sea el caso, una forma es utilizar la interfaz de GitHub para crear el archivo correspondiente al post, y la otra es teniendo el código en tu maquina y trabajando de forma local. Todo dependerá de tus preferencias y como te sientas mas cómodo trabajando.

### Crear mediante GitHub

Esta es la manera mas directa ya que no requiere tener el código en tu máquina y por ende no es necesario instalar nada.

##### Realizar un fork del repositorio de fccmontevideo.com

Lo primero que debes hacer es navegar al **[repo](https://github.com/FreeCodeCampMontevideo/fccmontevideo.com)** y darle al botón <img class="inline-image" src="/img/fork-button.png"> que aparece en la parte superior derecha, para esto es necesario que tengas con una cuenta de GitHub, si aún no tienes este es un buen momento para **[registrarte](https://github.com/join)**.

##### Crear archivo y escribir tu post

Luego deben navegar hacia la carpeta `site/content/blog` del repositorio y darle al botón <img class="inline-image" src="/img/create-new-file-button.png"> para crear tu post, esto abrirá una ventana donde tienes que escribir el contenido en formato **[markdown](https://guides.github.com/features/mastering-markdown/)**.

Antes de comenzar a escribir el articulo como tal debes especificar ciertos datos necesarios para que todo funcione correctamente.

![](/img/post-metadata.png)

En este caso se puede apreciar que tengo que especificar el nombre del archivo a crear `nombre-post.md` en minusculas y separando cada palabra con `-` e indicar algunos datos necesarios para el post, esta información es la que aparece entre los signos de `---` (frontmatter)

- title: titulo del post
- date: fecha de creación del post
- draft: si el post es un borrador o no
- author: nick del autor del post **([configurar autor](#configurar-autor))**
- categories (opcional): lista categorías para el post

Luego de especificar estos datos comienza el post en si mismo. En este caso también podemos apreciar el marcador `<!--more-->` que tiene la funcionalidad de indicar cual es el resumen del post que aparecerá en el listado, como se aprecia en la siguiente captura.

![](/img/post-list-view.png)

Ahora puedes comenzar a escribir tu post, GitHub ofrece la posibilidad de ver un preview de como quedaría el archivo pero ten en cuenta que esa preview es solo del formato markdown y que puede variar levemente según los estilos que estén aplicados en el sitio de fcc.
Una vez finalizado el post puedes guardar el archivo, esto generará un commit en tu versión del repositorio de fccmontevideo.

![](/img/save-post.png)

Luego podrás crear un pull request(PR) para que tu post sea incluido en el sitio dando click en el botón **Compare & pull request** y completando los datos requeridos que especifiquen el nombre del PR y una descripción. Una vez que tu cambios se acepten en el repo de fcc tu artículo quedara publicado en el blog.

![](/img/post-pull-request.png)

##### Configurar autor

Para que aparezca tu nombre y avatar como el autor del post se requiere una serie de pasos previos muy sencillos y que debes realizarlos por única vez.

- Debes crear un archivo en la carpeta `site/data/members` y nombrarlo como tu nick mas la extencion `.toml (ej: matiasvj.toml)`.
- Agregar la información para los campos de **nick, name y avatar**.

> Para crear el archivo del autor sigue el mismo proceso visto anteriormente para crear el post.

```
nick = "matiasvj"
name = "Matías Verdier"
avatar = "https://avatars2.githubusercontent.com/u/5176883?v=3"
```

También puedes agregar mas información que creas pertinente que podamos usar luego en otras secciones del sitio como podría ser un perfil de cada usuario o similar.

```
nick = "matiasvj"
name = "Matías Verdier"
email = "verdier.matias@gmail.com"
avatar = "https://avatars2.githubusercontent.com/u/5176883?v=3"
company = "Oracle - NetSuite"
bio = "Full Stack Web Developer apasionado por aprender y compartir el conocimiento"

web = "https://matiasverdier.com"
github = "MatiasVerdier"
twitter = "matiasvj"
linkedin = "https://uy.linkedin.com/in/matiasvj"
google = "https://plus.google.com/u/0/+MatiasVerdierJaime"

[links]
youtube = "https://www.youtube.com/channel/UCDVIsMWkPRkU7qh_jCwIo9g"
medium = "https://medium.com/@matiasvj"

```

### Crear de forma local

Trabajar de forma local es prácticamente igual a la opción anterior ya que los pasos para crear el archivo correspondiente al post aplican de la misma manera.

##### Requerimientos previos

Es necesario primero instalar algunas dependencias como **[git](https://git-scm.com/download)**, **[node.js](https://nodejs.org/en/)** y **[hugo](https://gohugo.io/)**.
También es de utilidad tener conocimientos básicos de los comandos de git o instalar algún cliente gráfico como **[source tree](https://www.sourcetreeapp.com/)** o similar para facilitar la tarea.

Para mas información puede ver la **[guía de contribución](https://github.com/MatiasVerdier/fccmontevideo.com/blob/staging/CONTRIBUTING.md)** paso a paso.

##### Ventajas de trabajar local

Trabajar de forma local tiene algunas ventajas ya que el proyecto dispone de una serie de herramientas que permiten acelerar el desarrollo, ademas puedes tener contacto con el código e investigar como esta desarrollado el sitio.

- Live preview del sitio con tus cambios
- Usar tu editor o IDE preferido
- Practicar el uso de git

### Conclusión

Como puedes ver es relativamente fácil poder crear un articulo para el blog de la comunidad y que todos puedan beneficiarse de los conocimientos que puedas aportar.

Espero que este tutorial te haya sido de utilidad y que comentes cualquier sugerencia o duda para mejorar este articulo, el sitio y la comunidad en general.

Gracias :)
