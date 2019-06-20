window.cipher = {
  encode: (offset, message) => {
    let numberAscii;
    let messageCifrado = "";
    for (let i = 0; i < message.length; i++) {
      message[i];
      const letter = message[i];
      const forMayuscula = (((letter.charCodeAt()) - 65) + offset) % 26;
      const forMinuscula = (((letter.charCodeAt()) - 97) + offset) % 26;
      if (letter.charCodeAt() < 65 || letter.charCodeAt() > 90) {
        if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
          if (forMinuscula < 0) {
            numberAscii = forMinuscula + 26 + 97;
          } else {
            numberAscii = forMinuscula + 97;
          }
        } else {
          numberAscii = letter.charCodeAt();
        }
      } else if (forMayuscula < 0) {
        numberAscii = forMayuscula + 26 + 65;
      } else {
        numberAscii = forMayuscula + 65;
      }
      const newLetter = String.fromCharCode(numberAscii);
      messageCifrado += newLetter;
    }
    return messageCifrado;
  },
  decode: (offset, message) => {
    let numberAscii;
    let messageDescifrado = "";
    for (let i = 0; i < message.length; i++) {
      message[i];
      const letter = message[i];
      const forMayuscula = (((letter.charCodeAt()) - 65) - offset) % 26;
      const forMinuscula = (((letter.charCodeAt()) - 97) - offset) % 26;
      if (letter.charCodeAt() < 65 || letter.charCodeAt() > 90) {
        if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
          if (forMinuscula < 0) {
            numberAscii = forMinuscula + 26 + 97;
          } else {
            numberAscii = forMinuscula + 97;
          }
        } else {
          numberAscii = letter.charCodeAt();
        }
      } else if (forMayuscula < 0) {
        numberAscii = forMayuscula + 26 + 65;
      } else {
        numberAscii = forMayuscula + 65;
      }
      const newLetter = String.fromCharCode(numberAscii);
      messageDescifrado += newLetter;
    }
    return messageDescifrado;
  }
};


