# Como Contribuir

Cualquier contribución es bienvenida no importa si es grande o pequeña.
Sigue estos pasos para contribuir de manera adecuada:

1. Encuentra un issue que necesite ayuda buscando por el tag [Help Wanted](https://github.com/FreeCodeCampMontevideo/fccmontevideo.com/labels/help%20wanted).

2. Deja un comentario en el issue para hacernos saber que estas interesado en trabajar en él.

3. Sigue los [Pasos para Contribuir](#pasos-para-contribuir) para comenzar a trabajar.

--------------------------------------------------------------------------------

## Pasos para Contribuir

- [Requisitos Previos](#requisitos-previos)
- [Hacer Fork del Proyecto](#hacer-fork-del-proyecto)
- [Crear una Rama](#crear-una-rama)
- [Configurar fccmontevideo](#configurar-fccmontevideo)
- [Hacer Cambios](#hacer-cambios)
- [Crear un Pull Request](#crear-un-pull-request)
- [Pasos Comunes](#pasos-comunes)
- [Pasos Siguientes](#pasos-siguientes)
- [Otros Recursos](#otros-recursos)

### Requisitos Previos

| Requisito                                   | Versión    |
| ------------------------------------------- | ---------- |
| [GO](https://golang.org/dl/)                | `~ ^1.7.5` |
| [Hugo](https://gohugo.io/)                  | `~ ^0.18.1`|
| [Node.js](http://nodejs.org)                | `~ ^6`     |
| npm (viene con Node)                        | `~ ^3`     |


### Hacer Fork del Proyecto

#### Preparar tu sistema

1. Instalar [Git](https://git-scm.com/).
2. (Opcional) [Configurar una clave SSH](https://help.github.com/articles/generating-an-ssh-key/) para GitHub.
3. Crear una carpeta donde alojar el proyecto una vez clonado

#### Hacer un Fork

1. Ve a la dirección principal del repositorio: <https://github.com/FreeCodeCampMontevideo/fccmontevideo.com>
2. Clic en el botón "Fork" en la esquina superior derecha ([Más Información](https://help.github.com/articles/fork-a-repo/))
3. Después de terminado el proceso de fork tendrás una copia del repositorio en `tuUsuario/fccmontevideo.com` en GitHub

#### Clonar el Fork a tu máquina local

1. Abrir la Terminal / Línea de Comandos en la carpeta donde vas a alojar el proyecto (_ej.: `/Desktop/Proyectos/`_)
2. Clonar el repositorio

```shell
$ git clone https://github.com/tuUsuario/fccmontevideo.com
```

##### (asegúrate de remplazar `tuUsuario` por tu nick de GitHub)

Esto descargara el proyecto entero en tu máquina.

#### Configurar repositorio Upstream

1. Cambiarte a la carpeta recién creada (`cd fccmontevideo.com`)
2. Añadir como repositorio remoto el repo original:

```shell
$ git remote add upstream https://github.com/FreeCodeCampMontevideo/fccmontevideo.com
```

¡Felicitaciones, ahora tienes una copia local del repositorio de FCC Montevideo!

#### Mantener tu Fork

Ahora que tienes una copia local de tu fork hay algunas cosas que necesitas hacer para mantenerlo actualizado.

##### **Rebasar desde Upstream**

Debes hacer esto antes de crear una nueva rama para un Pull Request:

1. Asegúrate de estar en la rama `staging`

  > ```shell
  > $ git status
  > On branch staging
  > Your branch is up-to-date with 'origin/staging'.
  > ```


  > ```shell
  > $ git checkout staging
  > ```

2. Has un pull contra el remoto `upstream`

  > ```shell
  > $ git pull --rebase upstream staging
  > ```

  > Esto actualizara tu repo con todos los cambios de la rama staging oficial, sin realizar ningún commit adicional en tu repositorio local.

3. (_Opcional_) Forzar el push de tu rama staging actualizada a tu Fork en GitHub

  > ```shell
  > $ git push origin staging --force
  > ```

  > Esto sobrescribirá la rama staging en tu fork.

### Crear una Rama

Antes de comenzar a trabajar, necesitas crear una rama específica para el issue o funcionalidad que vas a trabajar. Tu harás push de los cambios en esta rama.


#### Nombrar tu Rama

Nombra tu rama algo así como `fix/xxx` o `feature/xxx` donde `xxx` es una descripción corta de los cambios que pretendes añadir al repo. Por ejemplo `fix/email-login` será una rama donde tu arreglaras algo específico del login con email.


#### Agregar tu Rama

Para crear una rama en tu maquina local (y cambiarte hacia ella):

```shell
$ git checkout -b [nombre_de_tu_rama]
```

y hacer push hacia GitHub:

```shell
$ git push origin [nombre_de_tu_rama]
```

##### Si necesitas más ayuda acerca de las ramas, echa un vistazo a _[esto](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)_.


### Configurar fccmontevideo
Una vez que tengas el proyecto, antes de iniciar la aplicación debes instalar todas las dependencias:

```bash
# Instalar dependencias NPM
npm install
```

```bash
# Iniciar la aplicación
npm start
```

Se abrirá una ventana en tu navegador en la ruta <http://localhost:3000> con el sitio corriendo.

### Hacer cambios
Esto va por tu cuenta.

### Crear un Pull Request

#### Qué es un Pull Request?

Un pull request (PR) es un método para enviar los cambios realizados hacia el repositorio de fccmontevideo(o a cualquier otro que desees).
Tu harás los cambios en copias de los archivos de fccmontevideo en tu Fork personal, y luego solicitaras que esos cambios se incluyan en el repositorio oficial.


#### Importante: Siempre realiza los cambios en una rama

Si te quedas con solo una cosa de este documento debe ser esta: Nunca, **JAMAS** hagas cambios sobre la rama `staging`.
SIEMPRE crea una rama nueva antes de comenzar a editar los archivos. Esto es crítico, ya que si tu PR no es aceptada tu copia de staging quedará inconsistente y la única manera de arreglarla será borrar tu fork y volver a realizarlo.

#### Métodos

Hay dos métodos para crear un PR en fccmontevideo:

-   Editar los archivos en una copia local (recomendado)
-   Editar los archivos mediante la interface de GitHub

##### Método 1: Editar mediante un Fork local _(Recomendado)_

Este es el método recomendado. Lee acerca de [Como Configurar y Mantener tu copia local de fccmontevideo.com](#mantener-tu-fork).

1.  Ejecutar el paso de mantenimiento rebasando los cambios desde `staging`.
2.  Asegúrate de que estas en la rama `staging` usando `git status`:

```bash
$ git status
On branch staging
Your branch is up-to-date with 'origin/staging'.

nothing to commit, working directory clean
```

1.  Si no estás en la rama staging o si tu directorio de trabajo no está limpio de cambios, descarta o has commit de los cambios en los que estás trabajando y cámbiate a la rama staging `git checkout staging`

2.  Crea una nueva rama a partir de `staging` con git: `git checkout -B
    branch/nombre_de_rama` **Nota:** El nombre de las ramas es importante. Usa un nombre como
    `fix/descripcion_corta` o `feature/descripcion_corta_de_funcionalidad`. Revisa los [[Pasos para Contribuir](#pasos-para-contribuir) para más detalle.

3.  Edita tu archivo(s) localmente con el editor de tu preferencia.

4.  Revisa tu `git status` para ver los archivos que aún no han sido agregados para el commit.

5.  Agrega los archivos editados: `git add destino/del/archivo.ext` También puedes hacer: `git
    add .` para agregar todos los archivos sin agregar. Ten cuidado, porque puedes agregar archivos que no quieres accidentalmente. Revisa tu `git status` primero.

6.  Has commit de tus cambios: `git commit -m "Descripción breve de tus cambios"`. No agregues el número de issue en el mensaje de commit.

7.  Has push de tus cambios hacia tu Fork: `git push -u origin branch/nombre_rama`

8.  Ve hacia [Pasos Comunes](#pasos-comunes)

##### Método 2: Editar mediante la interface de GitHub

Nota: Editar mediante la interfaz de GitHub no es recomendado ya que no es posible actualizar tu Fork sin borrarlo y volverlo a crear.

### Pasos Comunes

1.  Una vez que hayas hecho commit de tus cambios GitHub te consultara si quieres crear un Pull Request en tu Fork.

2.  Por defecto tu pull request debería ser contra la rama `staging` del repo principal.

3.  Enviar el PR.

4.  El título de tu PR debe ser descriptivo de los cambios e indicar que cosas se arreglan con la misma.

    -   **No agregar el número de issue en el título del PR.**

5.  En el cuerpo de PR debes incluir información más detallada resumiendo los cambios que realizaste y por qué.

    -   Si el PR pretende resolver algún issue entonces al final de la descripción debes agregar la palabra `closes` y #xxxx (donde xxxx es el número de issue). Esto le dice a GitHub que cierre el issue si se hace merge del PR.

6.  Indicar si has testeado los cambios en tu copia local del repo.


### Pasos Siguientes

#### Si tu PR es aceptada

Una vez que tu PR es aceptada, debes borrar la rama que creaste para enviar el PR.
Esto mantiene tu Fork limpio.

Puedes hacer esto presionando un botón en la interfaz de GitHub. Puedes borrar la rama de tu copia local con: `git branch -D branch/rama_a_borrar`

#### Si tú PR es rechazada

¡No te sientas mal!, Seguramente recibiste un buen feedback de parte de los moderadores explicando por qué tu PR fue rechazada y los cambios necesarios para ser aceptada.

Muchos Pull Request, especialmente los primeros Pull Request, requieren correcciones o actualización.
Si usaste la interfaz de GitHub para crear el PR necesitaras cerrarla, crear una nueva rama y volverla a enviar.

Si tienes una copia local del repo, puedes hacer los cambios solicitados y actualizar tu commit con: `git commit --amend` Esto actualizara tu ultimo commit. Cuando hagas push de los cambios a tu Fork debes forzar el push para sobrescribir el commit viejo: `git push --force`

Asegúrate de comentar en la conversación del PR que has realizado los cambios solicitados por el moderador.

### Otros recursos

-   [Escribir buenos mensajes en los commits](http://forum.freecodecamp.com/t/writing-good-git-commit-messages/13210)
