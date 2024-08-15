// Exercise 1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
/* Declare an empty array;
Declare an array with more than 5 number of elements
Find the length of your array
Get the first item, the middle item and the last item of the array
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
Change each company name to uppercase one by one and print them out
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies */

let emptyArray = [];
let fiveArray = [1, 2, 3, 4, 5];
let arrayLength = fiveArray.length; // 5
let firstItem = fiveArray.length[0]; // 1
let middleItem = fiveArray[arrayLength / 2]; // 3
let lastItem = fiveArray[arrayLength - 1]; // 5
let mixedDataTypes = [2, "food", "bear", "5", 5, true];
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log("there are", itCompanies.length, "companies in the above list.");
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
for (let i = 0; i < itCompanies.length - 1; i++) {
  console.log(itCompanies[i].toUpperCase());
}
let sentence = itCompanies.join(", ");
console.log(sentence, "are big IT companies.");
if (
  itCompanies.includes("google") // note this is case sensitive
    ? console.log("Google is found")
    : console.log("Google is not found")
);
if (itCompanies.includes("Google")) {
  console.log("Google is found");
} else {
  console.log("Google is not found");
}
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let j = 0; j < itCompanies[i].length; j++) {
    if (itCompanies[i][j] === "o") {
      count++;
    }
  }
  if (count > 1) {
    console.log(itCompanies[i], " is a company with more than one 'o'");
  }
}

let sortedITCompanies = itCompanies.sort();
console.log(sortedITCompanies);
let reverseITCompanies = sortedITCompanies.reverse();
console.log(reverseITCompanies);
reverseITCompanies.slice(0, 3);
console.log(reverseITCompanies.slice(0, 3));
console.log(reverseITCompanies.slice(reverseITCompanies.length - 3));
console.log(
  reverseITCompanies.slice(
    reverseITCompanies.length / 2,
    reverseITCompanies.length / 2 + 1
  )
);
let removeFirstCompany = reverseITCompanies.shift();
console.log(reverseITCompanies);
let removeMiddleCompany = reverseITCompanies.splice(
  reverseITCompanies.length / 2,
  1
);
console.log(reverseITCompanies);
removeLastITCompany = reverseITCompanies.pop();
console.log(removeLastITCompany);
console.log(reverseITCompanies);
reverseITCompanies.splice(0, reverseITCompanies.length);
console.log(reverseITCompanies);
