window.cipher = { //cipher es un objeto con 2 métodos:encode y  decode . WINDOW quiere decir que está exportado
  encode: (offset, mensaje) => {
    /* Acá va tu código que cifra*/
    let cifrado='';
    let cifradoCesar = 0;
    if(offset< 0){
      for(let i=0; i<mensaje.length; i++){
     if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90){
      cifradoCesar=(mensaje.charCodeAt(i) - 90 + parseInt(offset)) % 26 + 90;
    // Para minusculas
    } else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
      cifradoCesar=(mensaje.charCodeAt(i) - 122 + parseInt(offset)) % 26 + 122;
    }
        else {
      cifradoCesar=(mensaje.charCodeAt(i));
    }
       // Obtener la letra descifrada
    let mensajeCifrado= String.fromCharCode(cifradoCesar);
    //Acumular las letras descifradas
    cifrado+=mensajeCifrado;
    }
    }
    else{
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
    /* Acá va tu código que descifra*/
    let descifrado='';
    let cifradoCesar = 0;
    if(offset<0){
      for(let i=0; i<mensaje.length; i++){
        if(mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90){
         cifradoCesar=(mensaje.charCodeAt(i) - 65 - parseInt(offset)) % 26 + 65;
       // Para minusculas
       } else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122){
         cifradoCesar=(mensaje.charCodeAt(i) - 97 - parseInt(offset)) % 26 + 97;
       }
           else {
         cifradoCesar=(mensaje.charCodeAt(i));
       }
          // Obtener la letra descifrada
       let mensajeDescifrado= String.fromCharCode(cifradoCesar);
       //Acumular las letras descifradas
       descifrado+=mensajeDescifrado;
       }
    }
    else{
      for(let i=0; i<mensaje.length; i++){
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
    }
    return descifrado;
  }
};
