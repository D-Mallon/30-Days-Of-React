let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replaceAll(/[.,]/g, "").split(" ");
console.log(words);

console.log(words.length);

// 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (shoppingCart[0] == "Meat") {
  console.log("Meat is first up in the shopping cart");
} else {
  shoppingCart.unshift("Meat");
  console.log("Meat is added to the shopping cart");
  console.log(shoppingCart);
}
shoppingCart.push("Sugar");
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
let textEg = "abcdef";
console.log(textEg.slice);
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function (num) {
  return num % 2 == 0;
});
console.log(evenNumbers);
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countries = ["France", "Belgium", "Ethiopia2"];
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia", 0);
  console.log("just added it there actually..");
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
