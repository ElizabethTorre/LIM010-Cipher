# Proyecto N°1: Cifrado César
# Título: Que nadie lo sepa

## Índice

- [Índice](#índice)
- [Resumen](#resumen)
  - [Alcance del producto](#alcance-del-producto)
- [Investigación UX](#investigación-UX)
  - [¿Por qué usarlo?](#por-qué-usarlo)
- [Diagrama de flujo](#diagrama-de-flujo)
- [Prototipo en papel](#prototipo-en-papel)
- [Feedback](#feedback)
- [Prototipo en Balsamic](#prototipo-en-balsamic)
  - [Primera vista: Inicio de Sesión](#Primera-vista-Inicio-de-Sesión)
  - [Ingresar mensaje y desplazamiento](#Ingresar-mensaje-y-desplazamiento)
  - [Ejemplo Cifrando/Descifrando mensaje](#Ejemplo-CifrandoDescifrando-mensaje)
- [Corrida desde la web](#Corrida-desde-la-web)

## Resumen

Este proyecto trata de darle al usuario acceso(mediante un correcto inicio de sesión) a una herramienta que **cifra o descifra mensajes** de contenido privado.
Sigue la lógica del [cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar).

  ![portada](https://user-images.githubusercontent.com/51327685/59573657-af6b5400-9079-11e9-837c-05c427276866.png)

**Figura 1.** Portada de la página web.

### Alcance del producto

- Permite escribir un mensaje (texto y números) para ser cifrado.

  Si bien se podría restringir el ingreso de números, para el usuario es importante poder hacerlo para mantener la fluidez del mensaje y evitar la edición.

  - En este proyecto, se puede utilizar este alfabeto simple (sin ñ/Ñ):
    
    Cifra/descifra tanto `mayúsculas` y `minúsculas`.
  
  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  a b c d e f g h i j k l m n o p q r s t u v w x y z

    Los números, espacios y otros caracteres (ñ,Ñ,á,í,ó,ú, ...) que no cumplan la condición de estar dentro del alfabeto no serán afectados.

    Ejemplo: 
    - Mensaje: Cuáles son los divisores de 6?
    - Offset: 1
    - Cifrado: Dvámft tpo mpt ejwjtpsft ef 6?
    - Descifrado: Btákdr rnm knr chuhrnqdr cd 6?

- Permite ingresar un desplazamiento `(offset)` a usar en el cifrado y/o descifrado.
    
  **`Offset positivo`**:                                   
  - Mensaje: Hola                             
  - Offset: 1
  - Cifrado: Ipmb
  - Descifrado: Gnkz

  **`Offset negativo`**:
  - Mensaje: Hola
  - Offset: -1
  - Cifrado: Gnkz
  - Descifrado: Ipmb

## Investigación UX
Éste producto tiene como usuarios a los docentes de colegios, universidades y otros.
Tiene como objetivo el poder transformar información en modo cifrado y descifrarlo en el momento que sea necesario, de manera que si alguien accede a éste no sepa de qué trata y así mantener la información a salvo.

### ¿Por qué usarlo?

Una de las cosas a las que un docente se expone en su día a día al tener archivos de futuras prácticas, exámenes, notas y otros en memorias usb y/o la nube es que por un descuido externos puedan acceder a ésta información y se filtre. Tener la posibilidad de encriptar archivos de alta importancia y descifrarlo sólo cuando lo necesite es una de las mejores maneras de proteger la información.

## Diagrama de flujo

Trabajado por squad en el bootcamp, es la idea que acordamos en que va a funcionar nuestra web, salvo algunas modificaciones personalizadas.

  ![Diagrama_flujo](https://user-images.githubusercontent.com/51327685/58891471-300d7600-86b2-11e9-9a57-36c742dda3fe.jpg)

## Prototipo en papel

Es la primera idea de cómo se visualizará la web, de la estructura que tendrá, el número de pantallas en que estará dividido y la interacción que tendrá cada una.

En éste caso, tal como se ve en la imagen, existirán 4 pantallas:

  ![NuevoDocumento 2019-06-05_1](https://user-images.githubusercontent.com/51327685/58960732-64923800-876d-11e9-996a-7dc1f6d82c87.jpg)


  ![NuevoDocumento 2019-06-05_2](https://user-images.githubusercontent.com/51327685/58960778-7c69bc00-876d-11e9-9b58-bfd0a6d0e13d.jpg)

## Feedback

Lo realizamos con una compañera del squad, la observación que me dio fue que algunos comandos(botones) no tenían asignados nombres claros, por ejemplo el botón **`Continuar`** se confundía con el botón **`Salir`**, así que cambié **`Continuar`** por **`Volver`**. Más adelante se saltó la idea de añadir un botón **`Copiar`**.

## Prototipo en Balsamic

### Primera vista: Inicio de Sesión

En ésta primera pantalla la interacción con el usuario es la solicitud de  ingresar una contraseña para iniciar sesión. La contraseña está predeterminada como **"LABORATORIA"**.

 ![1](https://user-images.githubusercontent.com/51327685/59571128-3e22a580-9067-11e9-96af-eeda2d1c9cff.png)

- **Vista: Error!**

En los 2 primeros intentos se mostrará un mensaje de _**Introduzca una clave valida.**_ debajo del botón (_'Iniciar Sesión'_); se (_limpiará y enfocará la caja que almacena la contraseña_).

NOTA: También se considera contraseña inválida si el espacio está _**vacío**_.

  ![1 1error](https://user-images.githubusercontent.com/51327685/59571137-5266a280-9067-11e9-8435-e700cbaa6613.png)

  ![1 2error](https://user-images.githubusercontent.com/51327685/59571143-74f8bb80-9067-11e9-81db-cf29dfcfd93c.png)

En el _**tercer intento**_, el mensaje será _**Ha intentado demasiadas veces. Refrescar!**_, de modo que se deshabilitan la caja para ingresar la contraseña y el botón de (_'Iniciar Sesión'_).

  ![1 3error](https://user-images.githubusercontent.com/51327685/59571147-7c1fc980-9067-11e9-9cb2-bde5d30b1081.png)

### Ingresar mensaje y desplazamiento

Si se inicia sesión exitosamente, se mostrará un espacio para ingresar el **`mensaje`**, el **`desplazamiento`** que desea y la opción de **`Cifrar`** o **`Descifrar`**.

NOTA: el desplazamiento debe ser diferente a cero y debe escribirse un mensaje.

  ![2](https://user-images.githubusercontent.com/51327685/59571151-95287a80-9067-11e9-96c7-6b3cea07022f.png)

- **Vista: Error!**

En caso de ingresar un desplazamiento inválido o dejarlo vacío se mostrará un mensaje debajo de la casilla indicando que debe ingresar un número diferente a cero, se limpia y enfoca el casillero.

  ![2 1error](https://user-images.githubusercontent.com/51327685/59571168-d3be3500-9067-11e9-8f72-48e8a6d5b6fa.png)

Tampoco está permitido intentar ejecutar el cifrado o descifrado si no se ingresa el mensaje:

  ![2 2error](https://user-images.githubusercontent.com/51327685/59571386-9fe40f00-9069-11e9-96df-d340423cbf6a.png)

### Ejemplo Cifrando/Descifrando mensaje

  ![2 ejm](https://user-images.githubusercontent.com/51327685/59571391-b0948500-9069-11e9-8083-3bc7e940bacc.png)

A continuación de muestra el resultado indicando la acción realizada con el encabezado _**Lo hemos Cifrado**_ y las opciones de:
  - **`Volver`** : Si se desea realizar una acción diferente o añadir algo al mensaje.
  - **`Salir`** : En caso de haber concluido la acción.
  - **`Copiar`** : Facilita la selección del texto resultado.

  ![3 ejm](https://user-images.githubusercontent.com/51327685/59571435-239dfb80-906a-11e9-9657-a023b6fe1300.png)

En respuesta a la opción **`Salir`**, se mostrará una pantalla de despedida.

  ![4](https://user-images.githubusercontent.com/51327685/59571563-b12e1b00-906b-11e9-8b90-21141cf876a1.png)

## Corrida desde la web

Se aplicó el mismo ejemplo del `Prototipo en Balsamic`:

  ![webPhone_1](https://user-images.githubusercontent.com/51327685/59573683-beea9d00-9079-11e9-9407-e5c4f1713c51.png)

  ![webPhone_2](https://user-images.githubusercontent.com/51327685/59573767-2acd0580-907a-11e9-9ab9-b086ab4fbca9.png)

  ![webPhone_3](https://user-images.githubusercontent.com/51327685/59573787-3ae4e500-907a-11e9-8392-fa0167a52e66.png)


