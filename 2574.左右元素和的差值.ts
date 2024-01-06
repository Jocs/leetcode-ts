/*
 * @lc app=leetcode.cn id=2574 lang=typescript
 *
 * [2574] 左右元素和的差值
 */

// @lc code=start
function leftRightDifference(nums: number[]): number[] {
  const leftNums: number[] = [];
  const rightNums: number[] = [];
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftNums.push(leftSum);
    leftSum += nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    rightNums.unshift(rightSum);
    rightSum += nums[i];
  }

  return leftNums.map((ln, i) => Math.abs(ln - rightNums[i]))
};
// @lc code=end

