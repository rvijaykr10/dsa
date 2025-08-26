from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, _ in enumerate(nums):
            for j, _ in enumerate(nums):
                if i != j and nums[i] + nums[j] == target:
                    if i < j:
                        return [i, j]
                    return [j, i]
        return []
