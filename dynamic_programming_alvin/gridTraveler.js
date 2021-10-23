const gridTraveler = (r, c) => {
  if (r === 1 && c === 1) return 1;

  if (r === 0 || c === 0) return 0;

  return gridTraveler(r - 1, c) + gridTraveler(r, c - 1);
};

const gridTravelerMemo = (m, n, memo = new Map()) => {
  const key = `${m},${n}`;

  if (memo.has(key)) return memo.get(key);

  if (m === 1 && n === 1) return 1;

  if (m === 0 || n === 0) return 0;

  memo.set(key, gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo));
  
  return memo.get(key);
};
gridTravelerMemo(18, 18)