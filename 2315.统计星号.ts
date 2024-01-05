/*
 * @lc app=leetcode.cn id=2315 lang=typescript
 *
 * [2315] 统计星号
 */

// @lc code=start
function countAsterisks(s: string): number {
    let count = 0;
    let isIn = false;

    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (!isIn && char === '*') {
        count++;
      }

      if (char === '|') {
        isIn = !isIn;
      }
    }

    return count;
};
// @lc code=end

