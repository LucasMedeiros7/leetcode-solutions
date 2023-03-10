// 14. Longest Common Prefix - LeetCode

/**
 * @param {string[]} words
 * @return {string}
 */
var longestCommonPrefix = function(words) {
  if (words.length === 0) return '';
  if (words.length === 1) return words[0];

  const firstStr = words[0];
  let prefix = '';
  let letterPosition = 0;

  while (letterPosition < firstStr.length) {
    let repeat = 0;
    for (let i = 1; i < words.length; i++) {
      const isEqual = firstStr[letterPosition] === words[i][letterPosition];
      if (isEqual) repeat++;
    }
    const isValidPrefix = repeat === (words.length - 1);
    if (!isValidPrefix) return prefix;
    prefix += firstStr[letterPosition];
    letterPosition++;
  }
  return prefix;
};


// Second solution (A little more efficient)

/**
 * @param {string[]} words
 * @return {string}
 */
const longestCommonPrefix = function(words) {
  if (words.length === 0) return '';
  let prefix = words[0];
  for (let i = 1; i < words.length; i++) {
    while(words[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
    }
  }
  return prefix;
};
