class Solution:
    def isPalindrome(self, s: str) -> bool:
        formatted_string = "".join(c.lower() for c in s if c.isalnum())
        if formatted_string == formatted_string[::-1]:
            return True
        return False


# print(Solution().isPalindrome("Was it a car or a cat I saw?"))
