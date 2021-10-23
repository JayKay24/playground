const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
function fibMemo(n, memo = new Map()) {
  if (memo.has(n)) return memo.get(n);
  
  if (n <= 2) return 1;
  
  memo.set(n, fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
  
  return memo.get(n);
}
fibMemo(8)
fibMemo(7)
fibMemo(50)
fibMemo(8)
fibMemo(6)