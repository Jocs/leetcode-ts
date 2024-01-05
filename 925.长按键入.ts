/*
 * @lc app=leetcode.cn id=925 lang=typescript
 *
 * [925] 长按键入
 */

// @lc code=start
interface IChopedName {
  chop: string;
  remain: string;
}
function chopName(name: string): IChopedName {
  let i = 0;
  const char = name[i++];
  while (name[i] === char) {
    i++;
  }

  return {
    chop: name.substring(0, i),
    remain: name.substring(i)
  }
}
function isLongPressedName(name: string, typed: string): boolean {
    do {
      const nameChop = chopName(name);
      const typedChop = chopName(typed);

      if (typedChop.chop.length < nameChop.chop.length || typedChop.chop[0] !== nameChop.chop[0]) {
        return false;
      }

      name = nameChop.remain;
      typed = typedChop.remain;
    } while (name.length && typed.length)

    if (name.length !== 0 || typed.length !== 0) {
      return false;
    }

    return true;
};
// @lc code=end

