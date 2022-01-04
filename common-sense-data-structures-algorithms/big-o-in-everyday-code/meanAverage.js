function averageOfEvenNumbers(array) {
  const [sum, countOfEvenNumbers] = calcEvenSumAndCount(array);
  
  return sum / countOfEvenNumbers;
  
}

function calcEvenSumAndCount(array) {
  let evenSum = 0;
  let countEven = 0;
  
  for (const int of array) {
      if (int % 2 === 0) {
          evenSum += int;
          countEven++;
        }
    }
  
  return [evenSum, countEven];
}
averageOfEvenNumbers([1, 2, 3]);
0 / 0
0 / 0
1 / 0
0 / 0