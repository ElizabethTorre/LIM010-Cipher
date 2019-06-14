const contraseña = document.getElementById('pass'); //Almaceno la contraseña en una variable
const verificar = document.getElementById('iniciar');
const clave = 'laboratoria'.toUpperCase(); // Clave convertida a mayúscula
let p1 = document.getElementById('p1'); //Pantalla 1: INICIO, solicita la contraseña
let p2 = document.getElementById('p2'); //Pantalla 2: Muestra el espacio para ingresar el mensaje
let p3 = document.getElementById('p3'); //Pantalla 3: Devuelve el resultado cifrado o descifrado
let p4 = document.getElementById('p4'); //Pantalla 4: Despedida
let header = document.getElementById('Titulo');

let cont = 1; //Contador de intentos
const enter = (e) => { //Obedecer a la tecla enter
  e.preventDefault();
  const pass = contraseña.value; //Captura el valor de la contraseña ingresada
  if (pass == clave) {
    p1.classList.add('oculto');
    p2.classList.remove('oculto');
    document.getElementById('body').style.backgroundImage = 'url(\'../img/img1.jpeg\')';
  }
  else if (cont > 2) {
    document.getElementById('rpta').innerHTML = ' Ha intentado demasiadas veces. REFRESCAR!';
    verificar.disabled = true; //deshabilito el boton 'Iniciar Sesión'
    contraseña.disabled = true; //deshabilito el input text
  }
  else {
    document.getElementById('rpta').innerHTML = ' ERROR! Introduzca una clave válida.';
    contraseña.value = ''; // Dejo vacío
    contraseña.focus();
    cont++;
  }
}
document.getElementById('enter').addEventListener('submit', enter);

//Para cifrar el mensaje
document.getElementById('cifrar').addEventListener('click', () => {
  //Captar mensaje
  const mensaje = document.getElementById('mensaje').value;
  //Captar el valor de offset
  let offset = document.getElementById('offset').value;
  //Condición para aceptar offset ingresado
  if (offset == 0 || offset == '') {
    document.getElementById('negativo').innerHTML = ' Introduzca un valor diferente a cero.';
    document.getElementById('offset').value = '';
    document.getElementById('offset').focus();
    return document.getElementById('result').value = '';
  }
  //Condición de no avanzar si el textarea está vacío
  else if (mensaje == '') {
    document.getElementById('mensaje').focus();
    document.getElementById('negativo').innerHTML = '';
  }
  //Si no todo es válido se procede a cifrar
  else {
    p2.classList.add('oculto');
    p3.classList.remove('oculto');
    document.getElementById('accion').innerHTML = ' Cifrado'; //Se complementa con "Mensaje"
    document.getElementById('negativo').innerHTML = '';
    document.getElementById('result').value = cipher.encode(offset, mensaje);
  }
})

//Para descifrar el mensaje
document.getElementById('descifrar').addEventListener('click', () => {
  //Captar mensaje
  const mensaje = document.getElementById('mensaje').value;
  //Captar el valor de offset
  let offset = document.getElementById('offset').value;
  //Condición para aceptar offset ingresado
  if (offset == 0 || offset == '') {
    document.getElementById('negativo').innerHTML = ' Introduzca un valor diferente a cero.';
    document.getElementById('offset').value = '';
    document.getElementById('offset').focus();
    return document.getElementById('result').value = '';
  }
  //Condición de no avanzar si el textarea está vacío
  else if (mensaje == '') {
    document.getElementById('mensaje').focus();
    document.getElementById('negativo').innerHTML = '';
  }
  //Si no todo es válido se procede a cifrar
  else {
    p2.classList.add('oculto');
    p3.classList.remove('oculto');
    document.getElementById('accion').innerHTML = ' Descifrado';
    document.getElementById('negativo').innerHTML = '';
    document.getElementById('result').value = cipher.decode(offset, mensaje);
  }
})

document.getElementById('volver').addEventListener('click', () => {
  p3.classList.add('oculto');
  p2.classList.remove('oculto');
})

document.getElementById('salir').addEventListener('click', () => {
  header.classList.add('oculto');
  p3.classList.add('oculto');
  p4.classList.remove('oculto');
  document.getElementById('body').style.background = '#ff5733';
  document.getElementById('footer').style.background = '#ff5733';
})
