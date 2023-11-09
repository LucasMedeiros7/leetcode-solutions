// 20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const dict = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) {
      stack.push(s[i]);
    } else if (!stack.length || dict[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length == 0;
};

console.log(isValid('{[]}'), true);
console.log(isValid('()[]{}'), false);
console.log(isValid('(]()'), false);
console.log(isValid('()[]{}'), true);
