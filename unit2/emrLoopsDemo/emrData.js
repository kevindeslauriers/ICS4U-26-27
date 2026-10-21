// Shared EMR practice data for the loop demos.
// "type": "module" in package.json lets the demo files import from here.

export const drugs = [
  { id: "DB00682", name: "Warfarin", category: "Anticoagulant", prescriptionOnly: true },
  { id: "DB00945", name: "Aspirin", category: "Antiplatelet", prescriptionOnly: false },
  { id: "DB01050", name: "Ibuprofen", category: "NSAID", prescriptionOnly: false },
  { id: "DB00331", name: "Metformin", category: "Antidiabetic", prescriptionOnly: true }
];

export const interactions = [
  { drugA: "DB00682", drugB: "DB00945", severity: "major", description: "Increased risk of bleeding." },
  { drugA: "DB00682", drugB: "DB01050", severity: "major", description: "Increased risk of bleeding." },
  { drugA: "DB00945", drugB: "DB01050", severity: "moderate", description: "Ibuprofen may reduce the antiplatelet effect of aspirin." }
];

export const patient = {
  id: "P1001",
  firstName: "Maya",
  lastName: "Chen",
  allergies: ["Penicillin"],
  currentMedications: ["DB00682", "DB00945"]
};

export const findDrugById = (id) => drugs.find((drug) => drug.id === id);

// Builds an object such as { major: 2, moderate: 1 } from a list of interactions.
export const countBySeverity = (list) =>
  list.reduce((counts, i) => {
    counts[i.severity] = (counts[i.severity] || 0) + 1;
    return counts;
  }, {});
