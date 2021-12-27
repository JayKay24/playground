function hasDuplicates(array) {
  const existingNumbers = [];
  
  for(let i = 0; i < array.length; i++) {
      if (existingNumbers[array[i]] === 1) return true;
      
      existingNumbers[array[i]] = 1;
    }
  
  return false;
}