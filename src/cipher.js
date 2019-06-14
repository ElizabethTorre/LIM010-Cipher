window.cipher = { //cipher es un objeto con 2 métodos:encode y  decode . WINDOW quiere decir que está exportado
  encode: (offset, mensaje) => {
    //Variables para llevar a cabo el cifrado
    let cifrado='';
    let cifradoCesar = 0;

    //CIFRADO CON OFFSET NEGATIVO

    if(offset< 0){

      for(let i=0; i<mensaje.length; i++){
      //Para mayúsculas
      if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90){
      cifradoCesar=(mensaje.charCodeAt(i) - 90 + parseInt(offset)) % 26 + 90;
      }
      // Para minúsculas
      else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
      cifradoCesar=(mensaje.charCodeAt(i) - 122 + parseInt(offset)) % 26 + 122;
      }
      //Otros caracteres
      else {
      cifradoCesar=(mensaje.charCodeAt(i));
      }
      // Obtener la letra descifrada
      let mensajeCifrado= String.fromCharCode(cifradoCesar);
      //Acumular las letras descifradas
      cifrado+=mensajeCifrado;
      }
    }

    //CIFRADO CON OFFSET POSITIVO

    else{

      for(let i=0; i<mensaje.length; i++){
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
    }
    return cifrado;
  },

  decode: (offset, mensaje) => { // DECODE es una propiedad conocida como MÉTODO(propiedad que tiene una función) del objeto CIPHER
    //Variables para llevar a cabo el cifrado    
    let descifrado='';
    let cifradoCesar = 0;

    //DESCIFRADO CON OFFSET NEGATIVO

    if(offset<0){

      for(let i=0; i<mensaje.length; i++){
        // Para mayúsculas
        if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90){
         cifradoCesar=(mensaje.charCodeAt(i) - 65 - parseInt(offset)) % 26 + 65;
        }
        // Para minusculas
        else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
         cifradoCesar=(mensaje.charCodeAt(i) - 97 - parseInt(offset)) % 26 + 97;
        }
        // Otros caracteres
        else {
         cifradoCesar=(mensaje.charCodeAt(i));
        }
        // Obtener la letra descifrada
        let mensajeDescifrado= String.fromCharCode(cifradoCesar);
        //Acumular las letras descifradas
        descifrado+=mensajeDescifrado;
       }
    }

    //DESCIFRADO CON OFFSET POSITIVO

    else{

      for(let i=0; i<mensaje.length; i++){
      // Para mayusculas
      if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90){
        cifradoCesar=(mensaje.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90;
      }
      // Para minusculas
      else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
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
    }
    return descifrado;
  }
};