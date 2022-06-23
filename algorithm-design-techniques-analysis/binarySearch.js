function binarySearch(arr, x) {
  let low = 1, high = arr.length, j = 0;

  while(low <= high && j === 0) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid - 1] === x) {
        j = mid;
      } else if (x < arr[mid - 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }

	console.log(arr.slice(low - 1));
  }

  return j;
}
