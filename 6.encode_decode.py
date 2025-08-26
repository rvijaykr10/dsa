from typing import List


class Solution:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string."""
        return "".join(f"{len(s)}#{s}" for s in strs)

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings."""
        res = []
        i = 0
        n = len(s)

        for _ in range(n):  # simulate iteration without while
            if i >= n:
                break
            # find next "#"
            j = s.find("#", i)
            if j == -1:
                break
            length = int(s[i:j])
            i = j + 1
            res.append(s[i : i + length])
            i += length

        return res
