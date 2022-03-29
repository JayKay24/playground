function twoNumberProducts(array) {
  const products = [];
  
  for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
          products.push(array[i] * array[j]);
        }
    }
  
  return products;
}
twoNumberProducts([1, 2, 3, 4, 5])
function twoNumberProducts2(array1, array2) {
  const products = [];
  
  for (let i = 0; i < array1.length; i++) {
      for(let j = 0; j < array2.length; j++) {
        
          products.push(array1[i] * array2[j]);
        }
    }
  
  return products;
}
twoNumberProducts2([1, 2, 3, 4, 5], [10, 100, 1000]);