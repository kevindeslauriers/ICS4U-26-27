// Object.values(obj) returns an ARRAY of the object's property values.
// Run: node valuesDemo.js
import { drugs, interactions, countBySeverity } from "./emrData.js";

const counts = countBySeverity(interactions);
console.log("1. Counts by severity");
console.log(counts);

console.log("\n2. Just the numbers");
console.log(Object.values(counts));

console.log("\n3. Total with for...of (total is reassigned, so it must be let)");
let total = 0;
for (const count of Object.values(counts)) {
  total += count;
}
console.log(`Total interactions: ${total}`);

console.log("\n4. The same total with reduce (no reassignment, so const works)");
const sum = Object.values(counts).reduce((acc, count) => acc + count, 0);
console.log(`Total interactions: ${sum}`);

console.log("\n5. Values keep their types");
for (const value of Object.values(drugs[0])) {
  console.log(`${typeof value}: ${value}`);
}

// Try it: use Object.values and for...of to print the largest count in counts.
