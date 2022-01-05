function sample(array) {
  const first = array[0];
  const middle = array[Math.floor(0 + (array.length - 1 - 0) / 2)];
  const last = array[array.length - 1];
  
  return [first, middle, last];
}

sample([1, 2, 3]);
sample([1, 2, 3, 4]);
sample([1, 2, 3, 4, 5]);