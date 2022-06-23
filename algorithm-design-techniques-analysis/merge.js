function merge(arr1, arr2) {
  let s = 0, t = 0, k = 0;
  
  let b = [];
  while(s < arr1.length && t < arr2.length) {
      if(arr1[s] <= arr2[t]) {
          b.push(arr1[s]);
          s++;
        } else {
          b.push(arr2[t]);
          t++;
        }
    }
  
  if(s === arr1.length) {
      b.push(...arr2.slice(t));
    } else {
      b.push(...arr1.slice(s));
    }
  
  return b;
}