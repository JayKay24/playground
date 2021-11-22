module.exports = {
  cartesianProduct: function (setA, setB) {
    // check if input sets are not empty
    // otherwise return null since we can't generate Cartesian Product out of them
    if (!setA || !setB || !setA.length || !setB.length) {
      return null;
    }

    // Init product set.
    const product = [];

    // Now, let's go through all elements of first and second set and form all possible pairs
    for (let i = 0; i < setA.length; i++) {
      for (let j = 0; j < setB.length; j++) {
        // Add current product pair to the product set.
        product.push([setA[i], setB[j]]);
      }
    }

    // Return cartesian product set
    return product;
  },
};
