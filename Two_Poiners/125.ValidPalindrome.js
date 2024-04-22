// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //
  const updatedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = updatedString.split("").reverse().join("");
  return updatedString === reversedString;
};

// const result = isPalindrome("A man, a plan, a canal: Panama");
// const result = isPalindrome("race a car");
const result = isPalindrome(" ");
console.log(result);
