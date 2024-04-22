// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  var res = {};
  var str = "";
  var len = strs.length;
  for (var i = 0; i < len; i++) {
    str = Array.from(strs[i]).sort().join("");
    if (!res[str]) res[str] = [];
    res[str].push(strs[i]);
  }
  return Object.values(res);
};

const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result);
