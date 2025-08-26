from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash = {}
        for str in strs:
            sorted_key = "".join(sorted(str))
            if sorted_key not in hash:
                hash[sorted_key] = [str]
            else:
                hash[sorted_key].append(str)

        return list(hash.values())
