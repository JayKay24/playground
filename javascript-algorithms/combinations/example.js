// Import dependencies.
const { combineWithoutRepetitions } = require("./combineWithoutRepetitions");
const { combineWithRepetitions } = require("./combineWithRepetitions");

/**
 * Combination WITHOUT repetitions.
 * Let's generate all possible teams compositions that may work on the next projects
 */

const teamSize = 3;
const candidates = ["Bill", "John", "Kate", "Jane", "Mike"];
const possibleTeams = combineWithoutRepetitions(candidates, teamSize);

console.log(possibleTeams);

/**
 * Combinations WITH repetitions.
 * Let's generate all possible combinations of ice cream scoops.
 */
const iceCreamFlavours = ["banana", "mint", "pistachio", "vanilla"];
const numberOfScoops = 3;
const scoopCombinations = combineWithRepetitions(
  iceCreamFlavours,
  numberOfScoops
);

console.log(scoopCombinations);
