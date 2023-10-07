/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let num = 0;

  for (const type of jewels.split('')) {
    const quantity = stones.split('').reduce((acc, curr) => {
      if (curr === type) return acc += 1;
      return acc;
    }, 0)
    num += quantity;
  }

  return num;
};