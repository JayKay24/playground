.editpr
const bestSumMemo = (targetSum, numbers, memo = new Map()) => {
  if (memo.has(targetSum)) return memo.get(targetSum);

  if (targetSum === 0) return [];

  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = targetSum - num;

    const remainderResult = bestSumMemo(remainder, numbers, memo);
    
    if (remainderResult !== null) {
      const combination = [...remainderResult, num];

      if (shortestCombination === null || shortestCombination.length > combination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo.set(targetSum, shortestCombination);

  return memo.get(targetSum);
};
bestSumMemo(100, [1, 5, 25]);