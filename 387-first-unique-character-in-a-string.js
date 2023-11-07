/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let counter = charCount.get(char) || 0;
    charCount.set(char, counter + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) == 1) {
      return i;
    }
  }

  return -1;
};
