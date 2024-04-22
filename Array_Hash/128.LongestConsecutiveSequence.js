// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let count = 1;
  let result = 1;
  const ascArr = nums.sort((a, b) => a - b);
  for (let i = 1; i < ascArr.length; i++) {
    let prevEle = ascArr[i - 1];
    let currEle = ascArr[i];
    if (currEle === prevEle + 1) {
      count += 1;
      result = result > count ? result : count;
    } else if (currEle === prevEle) {
      continue;
    } else {
      result = result > count ? result : count;
      count = 1;
    }
  }
  return result;
};

// const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
// const result = longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
const result = longestConsecutive([1, 2, 0, 1]);
console.log(result);
