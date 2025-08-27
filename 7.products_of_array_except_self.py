from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        for i, _ in enumerate(nums):
            for j, _ in enumerate(nums):
                temp_product = 1
                if i != j:
                    temp_product *= nums[i] * nums[j]
            res.append(temp_product)
        return res


# print(Solution().productExceptSelf([1, 2, 3, 4]))  # [24,12,8,6]
