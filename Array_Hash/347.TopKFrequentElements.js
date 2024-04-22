// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hash = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      //
      hash[nums[i]] += 1;
    } else {
      hash[nums[i]] = 1;
    }
  }
  const descOrder = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  descOrder.forEach((element, index) => {
    if (index <= k - 1) {
      result.push(+element[0]);
    }
  });
  return result;
};

const result = topKFrequent([3, 0, 1, 0], 1);
console.log(result);
