const allConstruct = (target, wordBank) => {
  if (target.length === 0) return [[]];

  const result = [];

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);

      result.push(...targetWays);
    }
  }

  return result;
};
const allConstructMemo = (target, wordBank, memo = new Map()) => {
  if (memo.has(target)) return memo.get(target);

  if (target.length === 0) return [[]];

  const result = [];

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);

      result.push(...targetWays);
    }
  }

  memo.set(target, result);
  return memo.get(target);
};
allConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"]);
allConstructMemo("aaaa", ["a", "aa", "aaaa"]);
allConstructMemo("aaaa", ["a", "aa", "aaaa", "aaa"]);
