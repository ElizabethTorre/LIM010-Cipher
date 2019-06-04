/* Acá va tu código */
const contraseña=document.getElementById('pass');
const verificar=document.getElementById('iniciar');
const clave='laboratoria'.toUpperCase();

let cont=1;
verificar.addEventListener('click',function() {
const pass=contraseña.value;
    if(pass == clave){
      alert('Bienvenido');
      document.getElementById('rpta').innerHTML='';
    }
    else if (cont>2) {
      document.getElementById('rpta').innerHTML=' Ha intentado demasiadas veces. Refrescar!';
      verificar.disabled=true;
      contraseña.disabled=true;
    }
    else{
      //alert('Introduzca una clave valida.');
      document.getElementById('rpta').innerHTML=' Introduzca una clave valida.';
      contraseña.value='';
      contraseña.focus();
      cont++;
    }
})


//Para cifrar el mensaje
function cifrarMensaje() {
  //Captar mensaje
const mensaje = document.getElementById('Message').value;
  //Captar n, numero fijo para cifrar
let offset = document.getElementById('offSet').value;
//const num=parseInt(offset);
if(offset<1){
  document.getElementById('negativo').innerHTML=' Introduzca un valor mayor a cero.';
  document.getElementById('offSet').value='';
  document.getElementById('offSet').focus();
  return document.getElementById('result').value = '';
}
else{
  //Variables para llevar a cabo el cifrado
let cifrado='';
let cifradoCesar = 0;
document.getElementById('negativo').innerHTML='';
//For para recorrer el mensaje captado
    for(let i=0; i<mensaje.length; i++){

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
      else if(mensaje.charCodeAt(i) >= 32 && mensaje.charCodeAt(i) <= 64){
        cifradoCesar=(mensaje.charCodeAt(i))
      }

      // Obtener la letra cifrada
      let mensajeCifrado= String.fromCharCode(cifradoCesar);
  //Acumular las letras cifradas, para formar la palabra cifrada
      cifrado+=mensajeCifrado;
    }
  //Mostrar el mensaje cifrado en el output
    return document.getElementById('result').value = cifrado;
}

}

//Para descifrar el mensaje
function descifrarMensaje() {
  //Captar mensaje
  const mensaje = document.getElementById('Message').value;
  //Captar n, numero fijo para cifrar
  let offset = document.getElementById('offSet').value;
  if(offset<1){
    document.getElementById('negativo').innerHTML=' Introduzca un valor mayor a cero.';
    document.getElementById('offSet').value='';
    document.getElementById('offSet').focus();
    return document.getElementById('result').value = '';
  }
  else{
  //Variables para llevar a cabo el cifrado
  let descifrado='';
  let cifradoCesar = 0;
  document.getElementById('negativo').innerHTML='';

    for(let i=0; i<mensaje.length; i++){

  //Obtener el número del codigo ASCII de cada letra descifrada
      // Para mayusculas
      if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90){
        cifradoCesar=(mensaje.charCodeAt(i) - 65 - parseInt(offset)) % 26 + 65;

      // Para minusculas
      } else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
        cifradoCesar=(mensaje.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122;
      }
      // Para otros caracteres
      else if(mensaje.charCodeAt(i) >= 32 && mensaje.charCodeAt(i) <= 64){
        cifradoCesar=(mensaje.charCodeAt(i))
      }
  // Obtener la letra descifrada
      let mensajeDescifrado= String.fromCharCode(cifradoCesar);
  //Acumular las letras descifradas
      descifrado+=mensajeDescifrado;
    // console.log(descifrado);
    }
    return document.getElementById('result').value = descifrado;
  }
}
