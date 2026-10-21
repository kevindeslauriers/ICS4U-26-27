// Object.keys(obj) returns an ARRAY of the object's property names.
// Run: node keysDemo.js
import { patient, drugs } from "./emrData.js";

console.log("1. The keys of the patient record");
console.log(Object.keys(patient));

console.log("\n2. Loop over the keys and use bracket access to read each value");
for (const key of Object.keys(patient)) {
  console.log(`${key}: ${patient[key]}`);
}
// Notice the arrays: inside a template literal, an array prints as its
// items joined by commas (DB00682,DB00945), not as console.log shows it.

console.log("\n3. Every drug record has the same keys, so read them from the first one");
console.log(Object.keys(drugs[0]));

console.log("\n4. Keys are always strings");
const keys = Object.keys(patient);
console.log(typeof keys[0]);

// Note: patient.key would look for a property literally named "key".
// When the property name is in a variable, you must use patient[key].

// Try it: loop over Object.keys(drugs[1]) and print "category: Antiplatelet" style lines.
