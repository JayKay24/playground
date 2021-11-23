// Import dependencies
const { btPowerSet } = require("./btPowerSet");

// Set up ingredients
const ingredients = ["banana", "oranges", "apple"];

// Generate all possible salad mixes out of our ingredients
const saladMixes = btPowerSet(ingredients);

console.log(saladMixes);
