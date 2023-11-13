/**
 * @param {string} key
 * @param {string} message
 * @return {string}
*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";

var decodeMessage = function (key, message) {
  let map = {};
  let alphabetPosition = 0;
  let keyArr = key.replaceAll(' ', '');

  for (let i = 0; i < keyArr.length; i++) {
    if (!map.hasOwnProperty(keyArr[i])) {
      map[key] = alphabet[alphabetPosition];
      alphabetPosition++;
    }
  }

  map[' '] = ' ';
  let decodedMessage = '';

  for (let i = 0; i < message.length; i++) {
    decodedMessage += map[message[i]];
  }

  return decodedMessage;
};