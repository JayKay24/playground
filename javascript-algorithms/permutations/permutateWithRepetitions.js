/**
 * Generate permutations with repetitions
 * 
 * @param {*[]} permutationOptions
 * @param {number} permutationLength
 * @returns {*[]}
 */
function permutateWithRepetitions(
  permutationOptions,
  permutationLength = permutationOptions.length
) {
  /**
   * If permutation length is equal to 1 then every element of permutationOptions
   * is a permutation subset
   */
  if (permutationLength === 1) {
    return permutationOptions.map((permutationOption) => [permutationOption]);
  }

  // Init permutations array
  const permutations = [];

  // Get permutations of smaller size that are made of all permutation options
  const smallerPermutations = permutateWithRepetitions(
    permutationOptions,
    permutationLength - 1
  );

  // Recursively go through all options and join it to smaller permutations
  permutationOptions.forEach((currentOption) => {
    // Concatenate currentOption to smaller permutations.
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption, ...smallerPermutation]);
    });
  });

  // Return permutations
  return permutations;
}

module.exports = {
  permutateWithRepetitions,
};
