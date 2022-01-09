function countOnes(outerArray) {
  let count = 0;
  
  for (const innerArray of outerArray) {
      for (const number of innerArray) {
          if (number === 1) count++;
        }
    }
  
  return count;
}
countOnes([[0, 1, 1, 1, 0], [0, 1, 0, 1, 0, 1], [1, 0]]);