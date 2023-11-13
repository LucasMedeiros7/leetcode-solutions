/**
 * @param {string} key
 * @param {string} message
 * @return {string}
*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";

var decodeMessage = function (key, message) {
  let keyArr = key.replaceAll(' ', '');
  let decodeMap = {};
  let alphabetPosition = 0;

  for (let i = 0; i < keyArr.length; i++) {
    let key = keyArr[i];
    if (!decodeMap.hasOwnProperty(key)) {
      decodeMap[key] = alphabet[alphabetPosition];
      alphabetPosition++;
    }
  }

  decodeMap[' '] = ' ';
  let messageDecoded = '';

  for (let i = 0; i < message.length; i++) {
    messageDecoded += decodeMap[message[i]];
  }

  return messageDecoded;
};