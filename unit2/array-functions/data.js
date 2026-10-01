// ICS4U  Unit 2  shared test data
// Put this file next to your exercises file, then import it:
//
//     import { drugs } from './data.js';
//
// The .js on the end is required. Your package.json needs "type": "module".

export const drugs = [
  { name: 'warfarin', dose: 5, timesDaily: 2, drugClass: 'anticoagulant' },
  { name: 'metformin', dose: 500, timesDaily: 2, drugClass: 'antidiabetic' },
  { name: 'lisinopril', dose: 10, timesDaily: 1, drugClass: 'ace inhibitor' },
  { name: 'aspirin', dose: 81, timesDaily: 1, drugClass: 'antiplatelet' },
  { name: 'atorvastatin', dose: 40, timesDaily: 1, drugClass: 'statin' },
  { name: 'gabapentin', dose: 300, timesDaily: 3, drugClass: 'anticonvulsant' },
  { name: 'amoxicillin', dose: 500, timesDaily: 3, drugClass: 'antibiotic' },
  { name: 'furosemide', dose: 20, timesDaily: 2, drugClass: 'diuretic' },
];

// Daily totals, for checking your own answers:
//   warfarin 10, metformin 1000, lisinopril 10, aspirin 81,
//   atorvastatin 40, gabapentin 900, amoxicillin 1500, furosemide 40
