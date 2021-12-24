// Variables

/*
var activites = "Whitegod is teach samuel how to code"; // String
// 300; // Number or Floating Point
300.49; // Number or Floating Point
true; // Boolean
false; // Boolean
null; // Null empty value
undefined; // empty value;

// 1) Initialing a variable
let init = "Initial missile Lunch codes";

// 1b Different variables
const myAge = 65;
// 2) Assigning values to a variable

// 3) Reassigning (mutate) values to a variables
// myAge = 70;

// 4) Naming convention for variables

// i) Do not use preserved keyboards for variable name declaration
// ii) Variable name should never start with a number
// iii) Use camelCase naming convention
// iv Use under score to join variable names

// const currentAccount = 23456;
// const current_acount = 23456;
// const $currentAccount = 23445;
// const 7currentAcount = 34543;
// const function = function () {};

// BOOLEAN

*/

/* Boolean 

Boolean is a JavaScript primitive type that has two values of
TRUE or FALSE
*/

/*
let isActive = false;
let hasCompletedTask = true;
// console.log(isActive);

let a = Boolean(undefined);
// console.log(a);

let b = new Boolean("Hello world");

console.log(b.valueOf());

// OPerators in JavaScript

// Assignment Operator
const cartTotalPrice = 16700;
// Addition & Subtraction Operator
// const num = 4 + 89;
// const num = 4 - 89;
// Multiplication & Division

// const num = 4 * 15;
// const num = 4 / 15;
// const num = 4 ** 15;
const num = 5 % 3;
console.log(num);

// const numToString = "5Hellow World";
// const numToString = 5 - "Hello World";
// console.log(numToString);

// Function declaration
function greeting() {
  console.log("Hello World, This is my first function");
}
greeting();

// Objects Literals
const samuel = {
  firstName: "Samuel",
  lastName: "Eze",
  hasNewMessages: true,
};

// Arrays
const studentData = ["Samuel", "Eze", true];
console.log(typeof samuel);
console.log(typeof studentData);

*/

/*
   - Values and Variables
   - Let, const, var
   - Data types
   - Basic Operators
*/

/**
 * Strings and Template literals
 * Control structure (Taking desicions without if & if statement)
 * Type conversion and coercion
 */

// Strings and Template literals

/**
 * JavaScript strings are primitives values
 * Strings are also immutable. it means you can progress
 * a string, and get a new string
 */

/*
const longStr =
  greeting +
  " " +
  name +
  ", What programming language \n are you learning \t how to code with" +
  " , is it " +
  proLang +
  "?";
console.log(longStr);
*/

/*
const proLang = "JavaScript";
console.log(proLang[4]);

console.log(24 + " Years old");
console.log(24 === "24");
*/

let greeting = "Hi";
greeting = "Holla";

const name = "Samuel";
const sentence = `${greeting} ${name}, How are you doing today?`;

// console.log(sentence);

// Control struture

const time = 13;
let greet;

// if (time < 12) {
//   greet = "Morning";
//   console.log(`Good ${greet} samuel.`);
// } else {
//   greet = "Afternoon";
//   console.log(`Good ${greet} samuel.`);
// }

/*

let day = "tuesday";

if (day === "monday") {
  // If block equals true run logic below.
  console.log("You have Lectures by 8pm");
} else if (day === "tuesday") {
  // If block equals true run logic below.
  console.log("Study for test and pratice Maths");
} else if (day === "wednesday") {
  // If block equals true run logic below.
  console.log("Take dog for a walk");
} else if (day === "thrusday") {
  // If block equals true run logic below.
  console.log("Go to the GYM");
} else {
  console.log("Watch TV.");
}
*/

// console.log(5 + "5");

// Falsy values 0, "", null, undefined, false

// if (0) {
//   console.log("Condition equals true");
// }

// Loops, Arrays, Objects literals

// If statement example
let acctBal = 20560;
let requestWithdrawal = Number(prompt("Enter amount you want to withdraw"));
if (requestWithdrawal > acctBal) {
  console.log(
    `Insufficient Funds, You do not have up to ${requestWithdrawal} in  your acct. Please try again later`
  );
} else {
  acctBal = acctBal - requestWithdrawal;
  console.log(
    `Your withdraw of ${requestWithdrawal} was successful. Current acctBal is ${acctBal}`
  );
}
