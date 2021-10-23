const countConstruct = (target, wordBank) => {
  if (target.length === 0) return 1;

  let totalCount = 0;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);

      totalCount += countConstruct(suffix, wordBank);
    }
  }

  return totalCount;
};
const countConstructMemo = (target, wordBank, memo = new Map()) => {
  if (memo.has(target)) return memo.get(target);

  if (target.length === 0) return 1;

  let totalCount = 0;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);

      totalCount += countConstructMemo(suffix, wordBank, memo);
    }
  }

  memo.set(target, totalCount);
  return memo.get(target);
};
countConstructMemo("abcdef", ["ab", "abc", "cd", "def"]);
