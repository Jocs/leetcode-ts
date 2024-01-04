/*
 * @lc app=leetcode.cn id=2423 lang=typescript
 *
 * [2423] 删除字符使频率相同
 */

// @lc code=start
function hasSameFrequency(hash: Record<string, number>): boolean {
  let count = 0;
  for (const key in hash) {
    if (hash[key] === 0) {
      continue;
    }
    if (count === 0) {
      count = hash[key];
    }

    if (hash[key] !== count) {
      return false;
    }
  }

  return true;
}

function equalFrequency(word: string): boolean {
    const len = word.length;
    const hash = {};

    for (let i = 0; i < len; i++) {
      const char = word[i];

      if (hash[char] == null) {
        hash[char] = 1;
      } else {
        hash[char]++;
      }
    }

    
    for (const key in hash) {
      if (hasSameFrequency({
        ...hash,
        [key]: hash[key] - 1
      })) {
        return true;
      }
    }

    return false;
};
// @lc code=end

