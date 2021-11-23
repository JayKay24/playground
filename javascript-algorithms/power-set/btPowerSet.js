/**
 * Find power-set of a set using BACKTRACKING approach
 *
 * @param {*[]} originalSet - Original set of elements we're forming power-set of
 * @param {*[][]} allSubSets - All subsets that have been formed so far (empty subset)
 * is included by default
 * @param {*[]} currentSubset - Current subset that we're forming at the moment
 * @param {*} startAt - The position of in original set we're starting to form currrent
 * subset
 *
 * @returns {*[][]} - All subsets of original set
 */
function btPowerSet(
  originalSet,
  allSubSets = [[]],
  currentSubset = [],
  startAt = 0
) {
  // Let's iterate over originalSet elements that may be added to the subset
  // without having duplicates. The value of startAt prevents adding the duplicates.
  for (let position = startAt; position < originalSet.length; position++) {
    // Let's push current element to the subset
    currentSubset.push(originalSet[position]);

    /**
     * Current subset is already valid so let's memorize it.
     * We do array destructuring here to save the clone of the currentSubset.
     * We need to save a clone since the original currentSubet is going to be
     * mutated in further recursive calls.
     */
    allSubSets.push([...currentSubset]);

    /**
     * Let's try to generate all other subsets for the current subset.
     * We're increasing the position by one to avoid duplicates in subset.
     */
    btPowerSet(originalSet, allSubSets, currentSubset, position + 1);

    // BACKTRACK. Exclude last element from the subset and try the next valid one.
    currentSubset.pop();
  }

  // Return all subsets of a set.
  return allSubSets;
}

module.exports = {
  btPowerSet,
};
