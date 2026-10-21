// Object.entries(obj) returns an ARRAY of [key, value] pairs.
// Each pair is a two element array: entry[0] is the key, entry[1] is the value.
// Run: node entriesDemo.js
import { patient, interactions, countBySeverity } from "./emrData.js";

const counts = countBySeverity(interactions);

console.log("1. The pairs");
console.log(Object.entries(counts));

console.log("\n2. Loop over the pairs");
for (const entry of Object.entries(counts)) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

console.log("\n3. Add a label with a ternary");
for (const entry of Object.entries(counts)) {
  const label = entry[0] === "major" ? " (review before prescribing)" : "";
  console.log(`${entry[0]}: ${entry[1]}${label}`);
}

console.log("\n4. Print a patient summary, skipping the arrays");
for (const entry of Object.entries(patient)) {
  if (typeof entry[1] === "string") {
    console.log(`${entry[0]}: ${entry[1]}`);
  }
}

// Try it: loop over Object.entries(patient) and print only the keys whose
// values are arrays, with the array contents, for example
// "allergies: Penicillin".
