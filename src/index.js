const contraseña = document.getElementById('pass');
const verificar = document.getElementById('iniciar');
const pantalla_inicioSesion = document.getElementById('pantalla_inicioSesion');
const pantalla_cifradoYdescifrado = document.getElementById('pantalla_cifradoYdescifrado');
const pantalla_resultado = document.getElementById('pantalla_resultado');
const pantalla_despedida = document.getElementById('pantalla_despedida');
const header = document.getElementById('tituloWeb');
const claveIncorrecta = document.getElementById('claveIncorrecta');
const offsetInvalido = document.getElementById('offsetInvalido');

let cont = 1;
document.getElementById('enter').addEventListener('submit', (enter) => {
  enter.preventDefault()
  const pass = contraseña.value;
  if (pass === 'LABORATORIA') {
    pantalla_inicioSesion.classList.add('oculto');
    pantalla_cifradoYdescifrado.classList.remove('oculto');
    document.getElementById('body').classList.toggle('fondo2');
  }
  else if (cont > 2) {
    claveIncorrecta.innerHTML = ' Ha intentado demasiadas veces. REFRESCAR!';
    verificar.disabled = true;
    contraseña.disabled = true;
  }
  else {
    claveIncorrecta.innerHTML = ' ERROR! Introduzca una clave válida.';
    contraseña.value = '';
    contraseña.focus();
    cont++;
  }
})

document.getElementById('cifrar').addEventListener('click', () => {
  const mensaje = document.getElementById('mensaje').value;
  let offset = parseInt(document.getElementById('offset').value);
  if (offset === 0 || offset === '') {
    offsetInvalido.innerHTML = ' Introduzca un valor diferente a cero.';
    document.getElementById('offset').value = '';
    document.getElementById('offset').focus();
    return document.getElementById('result').value = '';
  }
  else if (mensaje === '') {
    document.getElementById('mensaje').focus();
    offsetInvalido.innerHTML = '';
  }
  else {
    pantalla_cifradoYdescifrado.classList.add('oculto');
    pantalla_resultado.classList.remove('oculto');
    document.getElementById('accion').innerHTML = ' Cifrado';
    offsetInvalido.innerHTML = '';
    document.getElementById('result').value = cipher.encode(offset, mensaje);
  }
})

document.getElementById('descifrar').addEventListener('click', () => {
  const mensaje = document.getElementById('mensaje').value;
  let offset = parseInt(document.getElementById('offset').value);
  if (offset === 0 || offset === '') {
    offsetInvalido.innerHTML = ' Introduzca un valor diferente a cero.';
    document.getElementById('offset').value = '';
    document.getElementById('offset').focus();
    return document.getElementById('result').value = '';
  }
  else if (mensaje === '') {
    document.getElementById('mensaje').focus();
    offsetInvalido.innerHTML = '';
  }
  else {
    pantalla_cifradoYdescifrado.classList.add('oculto');
    pantalla_resultado.classList.remove('oculto');
    document.getElementById('accion').innerHTML = ' Descifrado';
    offsetInvalido.innerHTML = '';
    document.getElementById('result').value = cipher.decode(offset, mensaje);
  }
})

document.getElementById('volver').addEventListener('click', () => {
  pantalla_resultado.classList.add('oculto');
  pantalla_cifradoYdescifrado.classList.remove('oculto');
})

document.getElementById('salir').addEventListener('click', () => {
  header.classList.add('visible');
  pantalla_resultado.classList.add('oculto');
  pantalla_despedida.classList.remove('oculto');
  document.getElementById('body').classList.remove('fondo1', 'fondo2');
  document.getElementById('body').classList.add('fondoNaranja');
  document.getElementById('footer').classList.toggle('fondoNaranja');
})

document.getElementById('copiar').addEventListener('click', (copiar) => {
  copiar.preventDefault();
  document.getElementById('result').select();
  document.execCommand('copy');
})