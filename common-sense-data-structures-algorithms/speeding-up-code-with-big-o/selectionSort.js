function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
      let lowestNumberIdx = i;
      
      for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[lowestNumberIdx]) {
              lowestNumberIdx = j;
            }
        }
      
      if (lowestNumberIdx !== i) {
          [array[i], array[lowestNumberIdx]] = [array[lowestNumberIdx], array[i]];
        }
    }
  
  return array;
}