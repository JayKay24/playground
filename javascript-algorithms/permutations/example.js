// Import dependencies
const { permutateWithRepetitions } = require("./permutateWithRepetitions");
const {
  permutateWithoutRepetitions,
} = require("./permutateWithoutRepetitions");

/**
 * PERMUTATIONS WITH REPETITIONS EXAMPLE
 * Let's generate all possible password combinations using permutations with
 * repetitions
 */
const possiblePasswordSymbols = ["A", "B", "C"];
const passwordLength = 3;

const allPossiblePasswords = permutateWithRepetitions(
  possiblePasswordSymbols,
  passwordLength
);

console.log(allPossiblePasswords);

/**
 * PERMUTATIONS WITHOUT REPETITIONS EXAMPLE
 * Now let's generate all possible racing results for three racers
 */
const racers = ["John", "Bill", "Jane"];
const racingResults = permutateWithoutRepetitions(racers);

console.log(racingResults);
