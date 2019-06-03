# Proyecto N°1: Cifrado César
# Título: Que nadie lo sepa

## Índice

- [Índice](#índice)
- [Resumen](#resumen)
- [Investigación UX](#investigación-UX)
  - [¿Por qué usarlo?](#por-qué-usarlo)
- [Diagrama de flujo](#diagrama-de-flujo)
- [Prototipo en papel](#prototipo-en-papel)
- [Feedback](#feedback)
- [Prototipo en Balsamic](#prototipo-en-balsamic)

## Resumen

Este proyecto trata de darle al usuario acceso(mediante un correcto inicio de sesión) a una herramienta que **cifra o descifra mensajes**.
Sigue la lógica del [cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar).

## Investigación UX
Éste producto tiene como usuarios a los docentes de colegios, universidades y otros.
Tiene como objetivo el poder guardar información en modo cifrado y descifrarlo en el momento que sea necesario, de modo que si alguien accede a éste no sepa de qué trata y así mantener la información a salvo.

**¿Por qué usarlo?**:

Una de las cosas a las que un docente se expone en su día a día al tener archivos de futuras prácticas, exámenes, notas y otros en memorias usb y/o la nube es que por un descuido externos puedan acceder a ésta información y se filtre. Tener la posibilidad de encriptar archivos de alta importancia y descifrarlo sólo cuando lo necesite es una de las mejores maneras de proteger la información.

## Diagrama de flujo

![image](https://user-images.githubusercontent.com/51327685/58820374-13146c80-85f8-11e9-96d5-56aa4108ac2f.png)
**Figura 1.** Trabajado por squad en el bootcamp, es la idea que acordamos en que va a funcionar nuestra web, salvo algunas modificaciones personalizadas.
## Prototipo en papel

![image](https://user-images.githubusercontent.com/51327685/58822028-1c073d00-85fc-11e9-8a5a-ae460d1b4043.png)

![image](https://user-images.githubusercontent.com/51327685/58823701-f11ee800-85ff-11e9-8124-9e2a04257b1d.png)

## Feedback

Lo realizamos con una compañera del squad, puedo rescatar que algunos comandos(botones) no tenían asignados nombres claros, por ejemplo el botón **"Continuar”** se confundía con el botón **“Salir”**, así que cambié **“Continuar” por “Volver”**.

## Prototipo en Balsamic







  | Tiempos           | Fechas         | Detalles                           |
  | :---------------: | :------------: | :--------------------------------- |
  | **1er Sprint**    | 30/05 al 07/06 |Planificación del sprint 1, prototipado de baja fidelidad (papel y lapiz) + iteración (herramienta [balsamiq](https://balsamiq.com/)), _code review_ (revisión de código), _peer feedback_ (retroalimentación por parejas)  _retrospectiva_ (identificar, documentar e internalizar las lecciones aprendidas en la 1ra semana), planificación del sprint 2  |
  | **2do Sprint**    | 07/06 al 14/06 | _Code review_ (revisión de código), _peer feedback_ (retroalimentación por parejas),  _retrospectiva_ (identificar, documentar e internalizar las lecciones aprendidas en la 2da semana), _demo_ (presentación) y _feedback_ final del proyecto |

## Requerimientos del proyecto




#### Funcionalmente (JavaScript ES6 - pruebas unitarias)




## Entrega

El proyecto será entregado subiendo tu código a GitHub (_commit/push_) y la interfaz será
desplegada usando GitHub pages. Recuerda también completar el archivo `README.md` con la
información solicitada.

## Parte opcional o “Hacker edition”

Esta sección es **opcional** y solo debería realizarse una vez **terminado todo lo anterior**.
Acá podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.
Si te queda tiempo, puedes explorar algunos de estos ejemplos:

- Cifra/descifra minúsculas.
- Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...).
- Permite usar un `offset` negativo.

## Recursos y temas relacionados

### Para la planificación:

- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente
para comenzar a entender cómo organizar tu trabajo.

### Para UX:

- [El proceso de diseño](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
- [Balsamiq](https://balsamiq.com/)


der la importancia del proceso de prototipado durante la creación de un proyecto digital.
- Conocer los principios básicos del diseño visual.

### A nivel del Desarrollo Front-end

#### HTML5

- Utilizar etiquetas semánticas  de HTML5 y elementos de formulario.
- Validar que tu marcado HTML5 esté correctamente implementado a través del
[validador de html](https://validator.w3.org/).

#### CSS3

- Utilizar diversos tipos de selectores en CSS: de elemento, de clase, de id, etc.
- Comprender el modelo de cajas (border, margin, padding)
- Definir reglas de estilos

#### DOM (Document Object Model)

- Utilizar eventos del DOM que le permitan al usuario interactuar con la aplicación.
- Utilizar los métodos de selección del DOM.
- Actualizar de manera dinámica el contenido de la aplicación a través de innerHTML o
textContent

#### JavaScript (ES6)

- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo if-else, do-while** (bucles y condicionales).
- _Implementar funciones_ dada una descripción de su comportamiento.
- Verifica que tus funciones hagan las cosas para las que fueron creadas
(**pruebas unitarias (_test_) con Mocha**)

#### Git-Github

- Configurar tu cuenta de git
- _Forkear_ y _clonar_ el repositorio del proyecto.
- Mantener actualizado los cambios  (commit, pull, push)
- Desplegar tu proyecto en gh-pages
