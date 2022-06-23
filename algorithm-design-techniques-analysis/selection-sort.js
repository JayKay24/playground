function selectionSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
      let k = i;
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[j] < arr[k]) k = j;
        }

      if(k !== i) swap(arr, i, k);
    }

  return arr;
}

function swap(arr, idx1, idx2) {
  [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
}
