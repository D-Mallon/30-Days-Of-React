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

// Ternary Operator
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Enter your age: ", (age) => {
//   age = Number(age); // Convert string to number
//   switch (true) {
//     case age >= 18:
//       console.log("You are old enough to drive");
//       break;
//     default:
//       let yearsLeft = 18 - age;
//       console.log(
//         `You are not old enough to drive. You have ${yearsLeft} years to drive.`
//       );
//   }

//   readline.question("And what is your age user #2? ", (age2) => {
//     age2 = Number(age2);
//     if (age2 > age) {
//       console.log("User #2 is older than user #1 by ", age2 - age, " years.");
//     } else if (age > age2) {
//       console.log("User #1 is older than user #2 by ", age - age2, " years.");
//     } else {
//       console.log("Both users are the same age.");
//     }
//     // Close the readline interface after all questions are answered
//     readline.close();
//   });
// });

// let a = 4;
// let b = 5;
// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("b is greater than a or the same as a");
// }

// a > b
//   ? console.log("a is greater than b")
//   : console.log("b is greater than a or the same as a");

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question("what grade number did you get? ", (grade) => {
//   grade = Number(grade);
//   switch (true) {
//     case grade >= 80 && grade <= 100:
//       console.log("A");
//       break;
//     case grade >= 70 && grade < 80:
//       console.log("B");
//       break;
//     default:
//       console.log("It wasn't either an A or a B");
//       break;
//   }
//   readline.close();
// });

// const month = "January";

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("what month is it? ", (month) => {
//   month = month.toLowerCase();

//   switch (month) {
//     case "january" || "february" || "december":
//       console.log("Winter");
//       break;
//     case "march" || "april" || "may":
//       console.log("Spring");
//       break;
//   }
//   readline.close();
// });

// Loops

// for (let i = 0; i < 6; i += 2) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 0; i < 101; i++) {
//   sum += i;
// }
// console.log(sum);

// const nums = [1, 2, 3, 4, 5];
// const lengthNums = nums.length;
// const reversedNums = [];
// for (let i = lengthNums - 1; i >= 0; i--) {
//   reversedNums.push(nums[i]);
// }
// console.log(reversedNums);

// let count = 0;
// while (count < 11) {
//   console.log(count);
//   count++;
// }
// console.log("done and count value is now", count); // 11

// const countriesAgain = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// countriesAgain.forEach((country, i, arr) => {
//   console.log(i, country, arr);
// });

const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python", "D3.js"],
};

for (const key in user) {
  console.log(key, user[key]);
}
