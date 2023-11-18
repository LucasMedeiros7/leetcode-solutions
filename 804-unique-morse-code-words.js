// 804. Unique Morse Code Words

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  return words.reduce((acc, curr) => acc.add(toMorseLetter(curr)), new Set()).size
};

function toMorseLetter(word) {
  const morseLts = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  return [...word].map(l => morseLts[l.charCodeAt() - 97]).join('');
}
