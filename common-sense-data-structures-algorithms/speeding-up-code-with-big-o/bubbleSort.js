function bubbleSort(array) {
  let unsortedUntilIdx = array.length - 1;
  let sorted = false;
  
  while (!sorted) {
      sorted = true;
      
      for (let i = 0; i < unsortedUntilIdx; i++) {
          if (array[i] > array[i + 1]) {
              [array[i + 1], array[i]] = [array[i], array[i + 1]];
              
              sorted = false;
            }
        }
      
      unsortedUntilIdx--;
    }
  
  return array;
}
bubbleSort([65, 55, 45, 35, 25, 15, 10])