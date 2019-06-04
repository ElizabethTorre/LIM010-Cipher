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

### Primera vista: Inicio de Sesión
En ésta primera pantalla se le pide ingresar una contraseña al usuario para iniciar sesión, la contraseña está predeterminada como **"LABORATORIA"**.

![New Mockup 1](https://user-images.githubusercontent.com/51327685/58885897-9db4a480-86a8-11e9-9bf3-88a336be6cd7.png)

### Vista: Error!
Se mostrará un mensaje de **"Introduzca una clave valida."** debajo del espacio para la contraseña los 2 primeros intentos.Se (_limpiará y enfocará la caja_) para la contraseña.

NOTA: También se considera contraseña inválida si el espacio está **"vacío"**.

![New Mockup 1 copy](https://user-images.githubusercontent.com/51327685/58886040-dc4a5f00-86a8-11e9-94a6-537384b6184e.png)

![New Mockup 1 copy 3](https://user-images.githubusercontent.com/51327685/58886134-026fff00-86a9-11e9-885b-3ee0e02e2702.png)

En el tercer intento, el mensaje será **"Ha intentado demasiadas veces. Refrescar!"**, de modo que se deshabilitan la caja para ingresar la contraseña y el botón de (_'Iniciar Sesión'_).

![New Mockup 1 copy 2](https://user-images.githubusercontent.com/51327685/58885974-c046bd80-86a8-11e9-9028-fcf2afa8cf36.png)

###Ingresar mensaje:
Si se inicia sesión exitosamente, se mostrará un espacio para ingresar el mensaje, el **desplazamiento** que desea y la opción de **Cifrar** o **Descifrar**.

NOTA: el desplazamiento sólo puede ser mayor a cero.

![New Mockup 2](https://user-images.githubusercontent.com/51327685/58886200-1ca9dd00-86a9-11e9-8949-d13a2daed2c0.png)

En caso de que el número ingresado en el desplazamiento sea menor o igual a cero, se mostrará un mensaje debajo de la casilla indicando que debe ingresar un número mayor a cero, se limpia y enfoca el casillero.

![New Mockup 2 copy](https://user-images.githubusercontent.com/51327685/58886241-2df2e980-86a9-11e9-832d-210fb71cce27.png)

Una vez ingresado correctamente los datos, se mostrará la pantalla de resultado, con la opción de **Volver** o **Salir**.

![New Mockup 3](https://user-images.githubusercontent.com/51327685/58886358-5ed31e80-86a9-11e9-8b6a-86578a417b70.png)

Si se elige **Salir**, se mostrará una pantalla de despedida.

![New Mockup 5](https://user-images.githubusercontent.com/51327685/58886390-6bf00d80-86a9-11e9-8522-c5fd01d754e7.png)
