/*
 * @lc app=leetcode.cn id=2413 lang=typescript
 *
 * [2413] 最小偶倍数
 */

// @lc code=start
function isEven(num: number): boolean {
  return num % 2 === 0;
}
function smallestEvenMultiple(n: number): number {
    if (isEven(n)) {
      return n;
    }

    return 2 * n;
};
// @lc code=end

