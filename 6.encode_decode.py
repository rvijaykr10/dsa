from typing import List


class Solution:
    def encode(self, strs: List[str]) -> str:
        res = []
        for s in strs:
            res.append(f"{len(s)}#{s}")
        return "".join(res)

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        while i < len(s):
            j = i
            while j < len(s) and s[j] != "#":
                j += 1
            if j == len(s):
                raise ValueError("Malformed input: '#' delimiter not found.")
            str_length = int(s[i:j])
            j += 1
            word = s[j : j + str_length]
            res.append(word)
            i = j + str_length
        return res


# input_list = ["I", "code"]

# print(Solution().encode(input_list))
# print(Solution().decode("1#I4#code"))
