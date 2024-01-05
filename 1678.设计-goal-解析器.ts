/*
 * @lc app=leetcode.cn id=1678 lang=typescript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
function interpret(command: string): string {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};
// @lc code=end

