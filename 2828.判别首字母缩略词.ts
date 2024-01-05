/*
 * @lc app=leetcode.cn id=2828 lang=typescript
 *
 * [2828] 判别首字母缩略词
 */

// @lc code=start
function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    const char = words[i][0];
    if (char !== s[i]) {
      return false;
    }
  }

  return true;
};
// @lc code=end

