const canConstruct = (target, wordBank) => {
  if (target.length === 0) return true;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);

      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }

  return false;
};
canConstruct("abcdef", ["ab", "c", "de", "f"]);
canConstruct("abcdef", ["ab", "c", "de", "fgh"]);
const canConstructMemo = (target, wordBank, memo = new Map()) => {
  if (memo.has(target)) return memo.get(target);

  if (target.length === 0) return true;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);

      if (canConstructMemo(suffix, wordBank, memo)) {
        memo.set(target, true);
        return memo.get(target);
      }
    }
  }

  memo.set(target, false);
  return memo.get(target);
};
canConstructMemo("eeeeeeeeeeeeeeeeeeeef", [
  "ee",
  "eeee",
  "eeeeeeeeee",
  "eeeeeeeeeeeeee",
]);
canConstructMemo("eeeeeeeeeeeeeeeeeeeef", [
  "ee",
  "eeee",
  "eeeeeeeeee",
  "eeeeeeeeeeeeee",
]);
