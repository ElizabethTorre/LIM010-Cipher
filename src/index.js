/* Acá va tu código */
const contraseña=document.getElementById('pass'); //Almaceno la contraseña en una variable
const verificar=document.getElementById('iniciar');
const clave='laboratoria'.toUpperCase(); // Clave convertida a mayúscula
let p1=document.getElementById('p1'); //Pantalla 1: INICIO, solicita la contraseña
let p2=document.getElementById('p2'); //Pantalla 2: Muestra el espacio para ingresar el mensaje
let p3=document.getElementById('p3'); //Pantalla 3: Devuelve el resultado cifrado o descifrado
let p4=document.getElementById('p4'); //Pantalla 4: Despedida
let header=document.getElementById('Título');

let cont=1; //Contador de intentos
verificar.addEventListener('click',()=>{
const pass=contraseña.value; //Captura el valor de la contraseña ingresada
    if(pass == clave){
    p1.classList.add('oculto');
    p2.classList.remove('oculto');
    document.getElementById('body').style.backgroundImage='url(\'../img/img1.jpeg\')';
    }
    else if (cont>2) {
      document.getElementById('rpta').innerHTML=' Ha intentado demasiadas veces. REFRESCAR!';
      verificar.disabled=true; //deshabilito el boton 'Iniciar Sesión'
      contraseña.disabled=true; //deshabilito el input text
    }
    else{
      document.getElementById('rpta').innerHTML=' ERROR! Introduzca una clave válida.';
      contraseña.value=''; // Dejo vacío
      contraseña.focus();
      cont++;
    }
})


//Para cifrar el mensaje
document.getElementById('cifrar').addEventListener('click',() => {

//Captar mensaje
const mensaje = document.getElementById('mensaje').value;
//Captar el valor de offset
let offset = document.getElementById('offset').value;
//Condición para ingresar sólo offset>0;
if(offset<1 || offset==''){
  document.getElementById('negativo').innerHTML=' Introduzca un valor mayor a cero.';
  document.getElementById('offset').value='';
  document.getElementById('offset').focus();
  return document.getElementById('result').value = '';
}
//Condición de no avanzar si el textarea está vacío
else if(mensaje==''){
  document.getElementById('mensaje').focus();
  document.getElementById('negativo').innerHTML='';
}
else{
  p2.classList.add('oculto');
  p3.classList.remove('oculto');
  document.getElementById('accion').innerHTML=' Cifrado';
  
  //Variables para llevar a cabo el cifrado

  document.getElementById('negativo').innerHTML='';
  cipher.encode(offset, mensaje);
  //For para recorrer el mensaje captado
    /*for(let i=0; i<mensaje.length; i++){
      //Obtener el número del codigo ASCII de cada letra cifrada
      // Para mayusculas
      if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90 ) {
        cifradoCesar = (mensaje.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }
      // Para minusculas
      else if(mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
        cifradoCesar=(mensaje.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
      }
      // Para otros caracteres
      else {
        cifradoCesar=(mensaje.charCodeAt(i));
      }
      // Obtener la letra cifrada
      let mensajeCifrado= String.fromCharCode(cifradoCesar);
      //Acumular las letras cifradas, para formar la palabra cifrada
      cifrado+=mensajeCifrado;
    }
  //Mostrar el mensaje cifrado en el output
return document.getElementById('result').value = cifrado;*/
}
})


//Para descifrar el mensaje
document.getElementById('descifrar').addEventListener('click',() =>{
//Captar mensaje
const mensaje = document.getElementById('mensaje').value;
//Captar n, numero fijo para cifrar
let offset = document.getElementById('offset').value;
if(offset<1 || offset==''){
  document.getElementById('negativo').innerHTML=' Introduzca un valor mayor a cero.';
  document.getElementById('offset').value='';
  document.getElementById('offset').focus();
  return document.getElementById('result').value = '';
}
else if(mensaje==''){
  document.getElementById('mensaje').focus();
  document.getElementById('negativo').innerHTML='';
}
else{
  p2.classList.add('oculto');
  p3.classList.remove('oculto');
  document.getElementById('accion').innerHTML=' Descifrado';
  //Variables para llevar a cabo el cifrado

  document.getElementById('negativo').innerHTML='';
  cipher.decode(offset,mensaje);

    /*for(let i=0; i<mensaje.length; i++){
      //Obtener el número del codigo ASCII de cada letra descifrada
      // Para mayusculas
      if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90){
        cifradoCesar=(mensaje.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90;
      // Para minusculas
      } else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
        cifradoCesar=(mensaje.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122;
      }
      //otros
      else {
        cifradoCesar=(mensaje.charCodeAt(i));
      }
      // Obtener la letra descifrada
      let mensajeDescifrado= String.fromCharCode(cifradoCesar);
      //Acumular las letras descifradas
      descifrado+=mensajeDescifrado;
    }
return document.getElementById('result').value = descifrado;*/
}
})

document.getElementById('volver').addEventListener('click',() =>{
  p3.classList.add('oculto');
  p2.classList.remove('oculto');
})
document.getElementById('salir').addEventListener('click',() =>{
  header.classList.add('oculto');
  p3.classList.add('oculto');
  p4.classList.remove('oculto');
  document.getElementById('body').style.background='#ff5733';
})
