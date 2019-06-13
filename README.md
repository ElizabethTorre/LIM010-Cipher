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
- [Parte opcional o “Hacker edition”](#parte-opcional-o-“Hacker-edition”)
  - [Alcance del producto](#acance-del-producto)

## Resumen

Este proyecto trata de darle al usuario acceso(mediante un correcto inicio de sesión) a una herramienta que **cifra o descifra mensajes** de contenido privado.
Sigue la lógica del [cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar).



**Figura 1.** Portada de la página web.

## Investigación UX
Éste producto tiene como usuarios a los docentes de colegios, universidades y otros.
Tiene como objetivo el poder transformar información en modo cifrado y descifrarlo en el momento que sea necesario, de manera que si alguien accede a éste no sepa de qué trata y así mantener la información a salvo.

**¿Por qué usarlo?**:

Una de las cosas a las que un docente se expone en su día a día al tener archivos de futuras prácticas, exámenes, notas y otros en memorias usb y/o la nube es que por un descuido externos puedan acceder a ésta información y se filtre. Tener la posibilidad de encriptar archivos de alta importancia y descifrarlo sólo cuando lo necesite es una de las mejores maneras de proteger la información.

## Diagrama de flujo

  ![Diagrama_flujo](https://user-images.githubusercontent.com/51327685/58891471-300d7600-86b2-11e9-9a57-36c742dda3fe.jpg)

**Figura 2.** Trabajado por squad en el bootcamp, es la idea que acordamos en que va a funcionar nuestra web, salvo algunas modificaciones personalizadas.

## Prototipo en papel

Es la primera idea de cómo se visualizará la web, de la estructura que tendrá, el número de pantallas en que estará dividido y la interacción que tendrá cada una.

En éste caso, tal como se ve en la imagen, existirán 4 pantallas:

  ![NuevoDocumento 2019-06-05_1](https://user-images.githubusercontent.com/51327685/58960732-64923800-876d-11e9-996a-7dc1f6d82c87.jpg)


  ![NuevoDocumento 2019-06-05_2](https://user-images.githubusercontent.com/51327685/58960778-7c69bc00-876d-11e9-9b58-bfd0a6d0e13d.jpg)

## Feedback

Lo realizamos con una compañera del squad, la observación que me dio fue que algunos comandos(botones) no tenían asignados nombres claros, por ejemplo el botón **"Continuar”** se confundía con el botón **“Salir”**, así que cambié **“Continuar” por “Volver”**.

## Prototipo en Balsamic

### Primera vista: Inicio de Sesión
En ésta primera pantalla la interacción con el usuario es la solicitud de  ingresar una contraseña para iniciar sesión, la contraseña está predeterminada como **"LABORATORIA"**.

 ![New Mockup 1](https://user-images.githubusercontent.com/51327685/59106610-6f2f0780-88fc-11e9-9b65-09d81fef03cf.png)

### Vista: Error!
En los 2 primeros intentos se mostrará un mensaje de **"Introduzca una clave valida."** debajo del botón (_'Iniciar Sesión'_); se (_limpiará y enfocará la caja que almacena la contraseña_).

NOTA: También se considera contraseña inválida si el espacio está **"vacío"**.

  ![New Mockup 1 copy](https://user-images.githubusercontent.com/51327685/59106679-9be31f00-88fc-11e9-90c6-c3e8ec1a9137.png)

  ![New Mockup 1 copy 3](https://user-images.githubusercontent.com/51327685/59106707-b0271c00-88fc-11e9-81a2-3d89e56e156c.png)

En el **tercer intento**, el mensaje será **"Ha intentado demasiadas veces. Refrescar!"**, de modo que se deshabilitan la caja para ingresar la contraseña y el botón de (_'Iniciar Sesión'_).

  ![New Mockup 1 copy 2](https://user-images.githubusercontent.com/51327685/59106745-c7660980-88fc-11e9-8d4d-a9fa6126be03.png)

### Ingresar mensaje:
Si se inicia sesión exitosamente, se mostrará un espacio para ingresar el **mensaje**, el **desplazamiento** que desea y la opción de **Cifrar** o **Descifrar**.

NOTA: el desplazamiento sólo puede ser mayor a cero y debe escribirse un mensaje.

  ![New Mockup 2](https://user-images.githubusercontent.com/51327685/59106778-d8af1600-88fc-11e9-8cea-6f706a8cb483.png)

En caso de que el número ingresado en el desplazamiento sea menor o igual a cero, se mostrará un mensaje debajo de la casilla indicando que debe ingresar un número mayor a cero, se limpia y enfoca el casillero.

  ![New Mockup 2 copy](https://user-images.githubusercontent.com/51327685/59106817-ea90b900-88fc-11e9-8f3c-7b442e9c6d05.png)

Una vez ingresado correctamente los datos, se mostrará la pantalla de resultado, con la opción de **Volver** o **Salir**.

  ![New Mockup 3](https://user-images.githubusercontent.com/51327685/59106852-fbd9c580-88fc-11e9-8301-c9ce830709ca.png)

Si se elige **Salir**, se mostrará una pantalla de despedida.

  ![New Mockup 5](https://user-images.githubusercontent.com/51327685/59106890-12801c80-88fd-11e9-8140-8b4db8b5319c.png)

## Parte opcional o “Hacker edition”

### Alcance del producto

- Permite escribir un mensaje (texto y números) para ser cifrado.

  Si bien se podría restringir el ingreso de números, para el usuario es importante poder hacerlo para mantener la fluidez del mensaje y evitar la edición.

  - En este proyecto, se puede utilizar este alfabeto simple (sin ñ/Ñ):
    **Cifra/descifra tanto mayúsculas y minúsculas.**
    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    a b c d e f g h i j k l m n o p q r s t u v w x y z

    Los números, espacios y otros caracteres (ñ,Ñ,á,í,ó,ú, ...) que no cumplan la condición de estar dentro del alfabeto no serán afectados.

    Ejemplo: 
              Mensaje: Cuáles son los divisores de 6?
              Offset: 1
              Cifrado: Dvámft tpo mpt ejwjtpsft ef 6?
              Descifrado: Btákdr rnm knr chuhrnqdr cd 6?

- Permite ingresar un desplazamiento (offset) a usar en el cifrado y/o descifrado.
    
    **Offset positivo:**                                     
              Mensaje: Hola                             
              Offset: 1
              Cifrado: Ipmb
              Descifrado: Gnkz

    **Offset negativo:**
              Mensaje: Hola
              Offset: -1
              Cifrado: Gnkz
              Descifrado: Ipmb