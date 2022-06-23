function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
      const currentVal = arr[i];

      let j = i - 1;
	  console.log(`i=${i}, j=${j}, currentVal=${currentVal}`);
      while(j > -1 && arr[j] > currentVal) {
		  console.log(`i=${i}, j=${j}, currentVal=${currentVal}`);
          arr[j + 1] = arr[j];
          j--;
        }

      arr[j + 1] = currentVal;
	  console.log(`${arr}\n\n`);
    }

  return arr;
}
