/**
 * Generate permutations without repetitions
 *
 * @param {*[]} permutationOptions
 * @returns {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
  /**
   * If we have only one element to permutate then this element is already a permutation
   * of itself
   */
  if (permutationOptions.length === 1) return [permutationOptions];

  // Init permutations array
  const permutations = [];

  /**
   * Get all permutations for permutationOptions excluding the first element.
   * By doing this we're excluding the first element from all further smaller
   * permutations
   */
  const smallerPermutations = permutateWithoutRepetitions(
    permutationOptions.slice(1)
  );

  // Insert first option into every possible position of every smaller permutation
  const firstOption = permutationOptions[0];

  for (const smallerPermutation of smallerPermutations) {
    // Insert first option into every position of smallerPermutation
    for (
      let positionIdx = 0;
      positionIdx <= smallerPermutation.length;
      positionIdx++
    ) {
      const permutationPrefix = smallerPermutation.slice(0, positionIdx);
      const permutationSuffix = smallerPermutation.slice(positionIdx);

      permutations.push([
        ...permutationPrefix,
        firstOption,
        ...permutationSuffix,
      ]);
    }
  }

  // Return all permutations
  return permutations;
}

module.exports = {
  permutateWithoutRepetitions,
};
