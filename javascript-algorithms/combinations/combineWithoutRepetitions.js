/**
 * Generate combinations without repetitions
 *
 * @param {*[]} comboOptions - original set that we will take elements from.
 * @param {number} comboLength - the Length of combinations we're going to make.
 * @returns {*[]}
 */
function combineWithoutRepetitions(comboOptions, comboLength) {
  /**
   * If the length of combinations is 1 then each element of original set is
   * a combination.
   */

  if (comboLength === 1)
    return comboOptions.map((comboOption) => [comboOption]);

  // Init combinations array.
  const combos = [];

  // Extract characters one by one and concatenate them to combinations of smaller size.
  // We need to extract characters since we don't want to have duplicates.
  comboOptions.forEach((currentOption, optionIdx) => {
    // Get all smaller combinations WITHOUT the current element from original set.
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(optionIdx + 1),
      comboLength - 1
    );

    // Concatenate current element (currentOption) to all smaller combinations.
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption, ...smallerCombo]);
    });
  });

  return combos;
}

module.exports = {
  combineWithoutRepetitions,
};
