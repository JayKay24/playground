function canSum(target, numbers) {
  if (target === 0) return true;

  if (target < 0) return false;

  for (const num of numbers) {
    const remainder = target - num;

    if (canSum(remainder, numbers)) return true;
  }

  return false;
}
canSum(7, [2, 4]);
canSum(8, [2, 3, 5]);
function canSumMemo(targetSum, numbers, memo = new Map()) {
  if (memo.has(targetSum)) return memo.get(targetSum);

  if (targetSum === 0) return true;

  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;

    if (canSumMemo(remainder, numbers, memo)) {
      memo.set(targetSum, true);

      return true;
    }
  }

  memo.set(targetSum, false);

  return memo.get(targetSum);
}
canSumMemo(7, [2, 4]);
canSumMemo(8, [2, 3, 5]);
canSumMemo(8, [2, 3]);
canSumMemo(8, [2, 3]);
