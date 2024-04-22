// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   var hash = {};
//   var len = nums.length;
//   for (var i = 0; i < len; i++) {
//     if (nums[i] in hash) return [hash[nums[i]], i];
//     hash[target - nums[i]] = i;
//   }
//   return [-1, -1];
// };
var twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
  return [-1, -1];
};

const result = twoSum([3, 2, 4], 6);
console.log(result);
