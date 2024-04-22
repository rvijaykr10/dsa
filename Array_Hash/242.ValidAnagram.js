// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const sortedS = s.split("").sort().join("");
//   const sortedT = t.split("").sort().join("");
//   return sortedS === sortedT;
// };

const result = isAnagram("rat", "car");
console.log(result);
