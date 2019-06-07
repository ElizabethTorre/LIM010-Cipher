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

  ![Diagrama_flujo](https://user-images.githubusercontent.com/51327685/58891471-300d7600-86b2-11e9-9a57-36c742dda3fe.jpg)

**Figura 1.** Trabajado por squad en el bootcamp, es la idea que acordamos en que va a funcionar nuestra web, salvo algunas modificaciones personalizadas.
## Prototipo en papel

  ![NuevoDocumento 2019-06-05_1](https://user-images.githubusercontent.com/51327685/58960732-64923800-876d-11e9-996a-7dc1f6d82c87.jpg)


  ![NuevoDocumento 2019-06-05_2](https://user-images.githubusercontent.com/51327685/58960778-7c69bc00-876d-11e9-9b58-bfd0a6d0e13d.jpg)

## Feedback

Lo realizamos con una compañera del squad, puedo rescatar que algunos comandos(botones) no tenían asignados nombres claros, por ejemplo el botón **"Continuar”** se confundía con el botón **“Salir”**, así que cambié **“Continuar” por “Volver”**.

## Prototipo en Balsamic

### Primera vista: Inicio de Sesión
En ésta primera pantalla se le pide ingresar una contraseña al usuario para iniciar sesión, la contraseña está predeterminada como **"LABORATORIA"**.

 ![New Mockup 1](https://user-images.githubusercontent.com/51327685/59106610-6f2f0780-88fc-11e9-9b65-09d81fef03cf.png)

### Vista: Error!
Se mostrará un mensaje de **"Introduzca una clave valida."** debajo del espacio para la contraseña los 2 primeros intentos.Se (_limpiará y enfocará la caja_) para la contraseña.

NOTA: También se considera contraseña inválida si el espacio está **"vacío"**.

  ![New Mockup 1 copy](https://user-images.githubusercontent.com/51327685/59106679-9be31f00-88fc-11e9-90c6-c3e8ec1a9137.png)

  ![New Mockup 1 copy 3](https://user-images.githubusercontent.com/51327685/59106707-b0271c00-88fc-11e9-81a2-3d89e56e156c.png)

En el tercer intento, el mensaje será **"Ha intentado demasiadas veces. Refrescar!"**, de modo que se deshabilitan la caja para ingresar la contraseña y el botón de (_'Iniciar Sesión'_).

  ![New Mockup 1 copy 2](https://user-images.githubusercontent.com/51327685/59106745-c7660980-88fc-11e9-8d4d-a9fa6126be03.png)

###Ingresar mensaje:
Si se inicia sesión exitosamente, se mostrará un espacio para ingresar el mensaje, el **desplazamiento** que desea y la opción de **Cifrar** o **Descifrar**.

NOTA: el desplazamiento sólo puede ser mayor a cero.

  ![New Mockup 2](https://user-images.githubusercontent.com/51327685/59106778-d8af1600-88fc-11e9-8cea-6f706a8cb483.png)

En caso de que el número ingresado en el desplazamiento sea menor o igual a cero, se mostrará un mensaje debajo de la casilla indicando que debe ingresar un número mayor a cero, se limpia y enfoca el casillero.

  ![New Mockup 2 copy](https://user-images.githubusercontent.com/51327685/59106817-ea90b900-88fc-11e9-8f3c-7b442e9c6d05.png)

Una vez ingresado correctamente los datos, se mostrará la pantalla de resultado, con la opción de **Volver** o **Salir**.

  ![New Mockup 3](https://user-images.githubusercontent.com/51327685/59106852-fbd9c580-88fc-11e9-8301-c9ce830709ca.png)

Si se elige **Salir**, se mostrará una pantalla de despedida.

  ![New Mockup 5](https://user-images.githubusercontent.com/51327685/59106890-12801c80-88fd-11e9-8140-8b4db8b5319c.png)
