// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return nums.length !== [...new Set(nums)].length;
};
// var containsDuplicate = function (nums) {
//   const hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (Object.hasOwn(hash, nums[i])) {
//       return true;
//     } else {
//       hash[nums[i]] = 1;
//     }
//   }
//   return false;
// };

const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(result);
