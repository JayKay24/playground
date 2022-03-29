function linearSearch(arr, x) {
  let j = 1;
  const n = arr.length;
  
  while(j < n && arr[j - 1] !== x) {
      j++;
    }
  
  return arr[j - 1] === x ? j : 0;
}