const me = Symbol("Alberto");
console.log(me);
const clone = Symbol("Alberto");
console.log(clone);
console.log(me == clone);
console.log(me === clone);
const office = {
  Tom: "CEO",
  Mark: "CTO",
  Mark: "CIO",
};
for (const person in office) {
  console.log(person);
}
const office2 = {
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CIO",
};

for (const person in office2) {
  console.log(person);
}
const symbols = Object.getOwnPropertySymbols(office2);
console.log(symbols);
symbols.map((symbol) => office2[symbol]);
