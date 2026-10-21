// for...of loops over the VALUES of an array (like Java's enhanced for loop).
// Run: node forOfDemo.js
import { drugs, patient, findDrugById } from "./emrData.js";

console.log("1. Every drug name");
for (const drug of drugs) {
  console.log(drug.name);
}

console.log("\n2. Maya's current medications, looked up by id");
for (const medId of patient.currentMedications) {
  const drug = findDrugById(medId);
  console.log(`${medId}: ${drug ? drug.name : "unknown drug"}`);
}

console.log("\n3. Using const in the loop is fine: each pass gets a new binding");
for (const allergy of patient.allergies) {
  console.log(`Allergy: ${allergy}`);
}

console.log("\n4. A plain object is NOT iterable");
try {
  for (const value of patient) {
    console.log(value);
  }
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
console.log("Fix: loop over Object.keys, Object.values or Object.entries (next demos).");

// Try it: loop over drugs and print only the prescription only drugs,
// in the form "Warfarin (DB00682)".
