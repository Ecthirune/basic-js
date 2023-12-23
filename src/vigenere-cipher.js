const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {  constructor(isDirect = true) {
  this.isDirect = isDirect;
}


// отдельная функция чтобы не плодить сущности
keyNormalize(message,key)
{
  
  let keyIndex = 0;
  let keyLenght = key.length;  
  let keyResult ='';


  for (let i = 0; i < message.length; i++){

    // обнуление индекса позиции символа в ключе
    if (keyIndex == keyLenght){
      keyIndex = 0;
    }

    // если буква существует - добавляем в ключ символ
    // увеличиваем индекс позиции символа ключа
    if (message[i].match(/[A-Z]/)){
      keyResult += key[keyIndex];   
      keyIndex++;   
    }
    else{
      //добавляем пробел как положено.
      keyResult += ' ';
    }
  }
  
  return keyResult;
}

encrypt(message, key) {

  //дефолт проверки
  if (!message || !key) {
    throw new Error('Incorrect arguments!');
  }
    //нормализуем ключ и месседж в заглавные
    message = message.toUpperCase();
    key = key.toUpperCase();
    
  // создаем строку ключа по символам равную сообщению  
  let keyResult = this.keyNormalize(message, key);

  let encryptedMessage = '';

  for (let i = 0; i < message.length; i++) {
    // определяем валидность символа
    if (message[i].match(/[A-Z]/)) {

        // acii таблица: алфавитные символы начинаются с 65
        // в шрифте виженера: алфавитные символы начинаются с 0
        // приравниваем первый символ месседжа и ключа к порядковому номеру
      const messageCharCode = message[i].charCodeAt(0) - 65;
      const keyCharCode = keyResult[i].charCodeAt(0) - 65;
       
      // получаем номер символа остатком от деления на 26 (количество символов в алфавите)
      const encryptedCharCode = (messageCharCode + keyCharCode) % 26;
      const encryptedChar = String.fromCharCode(encryptedCharCode + 65);
      
      encryptedMessage += encryptedChar;
      
    } else {
      encryptedMessage += message[i];
      
    }
   
  }

  return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
}

decrypt(encryptedMessage, key) {
  if (!encryptedMessage || !key) {
    throw new Error('Incorrect arguments!');
  }

  encryptedMessage = encryptedMessage.toUpperCase();
  key = key.toUpperCase();

  let keyResult = this.keyNormalize(encryptedMessage, key);
  let decryptedMessage = '';
 

  for (let i = 0; i < encryptedMessage.length; i++) {
    if (encryptedMessage[i].match(/[A-Z]/)) {
      const encryptedCharCode = encryptedMessage[i].charCodeAt(0) - 65;
      const keyCharCode = keyResult[i].charCodeAt(0) - 65;
      const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26;
      const decryptedChar = String.fromCharCode(decryptedCharCode + 65);

      decryptedMessage += decryptedChar;
      
    } else {
      decryptedMessage += encryptedMessage[i];
    }
  }

  return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
}
}

module.exports = {
  VigenereCipheringMachine


};

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
directMachine.encrypt('attack at dawn!', 'alphonse');