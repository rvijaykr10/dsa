from typing import List


class Solution:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string."""
        res = []
        for s in strs:
            res.append(str(len(s)) + "#" + s)
        return "".join(res)

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings."""
        res = []
        i = 0
        while i < len(s):
            # find the length prefix
            j = i
            while s[j] != "#":
                j += 1
            length = int(s[i:j])
            # move past '#'
            i = j + 1
            # extract the actual string
            res.append(s[i : i + length])
            # move pointer
            i = i + length
        return res
