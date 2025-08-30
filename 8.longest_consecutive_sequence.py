class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        if not nums:
            return 0

        sorted_list = sorted(nums)
        longest_streak = 1
        current_streak = 1

        for i in range(len(sorted_list) - 1):
            if sorted_list[i] == sorted_list[i + 1] - 1:
                current_streak += 1
            elif sorted_list[i] == sorted_list[i + 1]:
                pass
            else:
                longest_streak = max(longest_streak, current_streak)
                current_streak = 1

        return max(longest_streak, current_streak)


# print(Solution().longestConsecutive([2, 20, 4, 10, 3, 4, 5]))
