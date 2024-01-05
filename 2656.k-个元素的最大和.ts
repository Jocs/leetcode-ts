/*
 * @lc app=leetcode.cn id=2656 lang=typescript
 *
 * [2656] K 个元素的最大和
 */

// @lc code=start
function maxNumber(nums: number[]): number {
  let max = -Infinity;
  for (const num of nums) {
    max = Math.max(max, num);
  }

  return max;
}

function maximizeSum(nums: number[], k: number): number {
  const maxNum = maxNumber(nums);

  return ((maxNum + k - 1) + maxNum ) * k / 2
};
// @lc code=end

