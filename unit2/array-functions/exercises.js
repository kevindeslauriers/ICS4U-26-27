import { drugs } from './data.js'
 
const dailyTotal = (drug) => drug.dose * drug.timesDaily;


// () => {return {name1:5, sizer:3}}
// () => ({name1:5, sizer:3})

// const drugNames = drugs.map(d=>d.name); 
// console.log(drugNames);

// const test = drugs.map(drug=>`${drug.name} (${drug.dose} mg)`);
// const test2 = drugs.map(drug=>`${drug.name} (${drug.drugClass})`); 

// const largeDoses = drugs.filter(drug => drug.dose > 100)
//                         .map(drug=>`${drug.name} (${drug.dose} mg)`);

// const antiDrugs = drugs.filter(drug => drug.drugClass.includes('anti'))
//                         .map(drug=>drug.name);                        


// const sortedDrugs = [...drugs].sort((a,b)=>a.dose - b.dose)
//                             .map(drug=>`${drug.name} (${drug.dose} mg)`);
// [...array] spread which makes a copy of the array so original array is not affected
// console.log(sortedDrugs)
// console.log(drugs)

const nums = [1,10,12,100, 7, 9, 23]

const sortedNums = nums.sort()  // no argument then it treast a and b like string
console.log(sortedNums)


