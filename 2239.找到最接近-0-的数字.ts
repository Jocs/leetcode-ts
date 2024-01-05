/*
 * @lc app=leetcode.cn id=2239 lang=typescript
 *
 * [2239] 找到最接近 0 的数字
 */

// @lc code=start
function findClosestNumber(nums: number[]): number {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const distance = Math.abs(num - 0);

      if (hash[distance] == null) {
        hash[distance] = []
      }

      hash[distance].push(num);
    }

    const min = Math.min(...Object.keys(hash).map(s => +s));

    return Math.max(...hash[min]);
};
// @lc code=end

