function findBoundaries(arr, target) {
  if(arr.length === 0) return [-1, -1];
  const results = [];
  results.push(getLeftBoundary(arr, target));
  results.push(getRightBoundary(arr, target));

  return results;
}

function getLeftBoundary(arr, target, leftIdx = 0, rightIdx = arr.length - 1) {
  if(leftIdx > rightIdx) return -1;
  const midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
  if(arr[midIdx] === target) {
      if(midIdx - 1 < 0 || arr[midIdx - 1] < arr[midIdx]) return midIdx;
      return getLeftBoundary(arr, target, leftIdx, midIdx - 1);
    } else if(arr[midIdx] < target) {
      return getLeftBoundary(arr, target, midIdx + 1, rightIdx);
    } else {
      return getLeftBoundary(arr, target, leftIdx, midIdx - 1);
    }
}

function getRightBoundary(arr, target, leftIdx = 0, rightIdx = arr.length - 1) {
  if(leftIdx > rightIdx) return -1;
  const midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
  if(arr[midIdx] === target) {
      if(midIdx + 1 >= arr.length || arr[midIdx + 1] > arr[midIdx]) return midIdx;
      return getRightBoundary(arr, target, midIdx + 1, rightIdx);
    } else if(arr[midIdx] < target) {
      return getRightBoundary(arr, target, midIdx + 1, rightIdx);
    } else {
      return getRightBoundary(arr, target, leftIdx, midIdx - 1);
    }
}

