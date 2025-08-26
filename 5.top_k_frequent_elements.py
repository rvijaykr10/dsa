from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        result = []
        hash = {}
        for num in nums:
            if num not in hash:
                hash[num] = 1
            else:
                hash[num] += 1

        res_list = list(hash.items())
        res_sort = sorted(res_list, key=lambda x: x[1], reverse=True)

        for n in res_sort:
            if len(result) < k:
                result.append(n[0])
        return result
