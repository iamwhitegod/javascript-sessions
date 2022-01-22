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

/*
// If statement example
let acctBal = 20560,
  requestWithdrawal = Number(prompt("Enter amount you want to withdraw"));
userInputPin = Number(prompt("Enter Transaction PIN"));

const transactionPin = 1234;

// Conditional statement

if (userInputPin === transactionPin) {
  // Continue with withdrawal
  if (requestWithdrawal > acctBal) {
    alert(
      `Insufficient Funds, You do not have up to ${requestWithdrawal} in  your acct. Please try again later`
    );
  } else {
    acctBal = acctBal - requestWithdrawal;
    alert(
      `Your withdraw of ${requestWithdrawal} was successful. Current acctBal is ${acctBal}`
    );
  }
} else {
  alert("Incorrect Transaction PIN");
}

//
/**
  - Type conversion and coercion
  - Truthy and Falsy Values
  - Equality Operators == vs ====
  - Boolean logic
  - Logical Operators




  - Javascript History & Releases ES5, ES6+ and ESNext
 */

// Boolean logic

/**
 * Basic boolean logic: The AND, OR, NOT operators
 */

/*
// If statement example

// Acount balance
let acctBal = 0.0,
  // 1) Get amount user wants to withdraw
  requestWithdrawal = Number(prompt("Enter amount you want to withdraw")),
  // 2) Ask user for transaction PIN
  userInputPin = Number(prompt("Enter Transaction PIN"));

const transactionPin = 1234;

// 3) Validate transaction PIN
if (userInputPin === transactionPin) {
  // 4) Check if the withdrawal amount < acct bal && requestWithdrawal is less than 0
  if (requestWithdrawal > acctBal || 0 >= acctBal) {
    alert(
      `Insufficient Funds, You do not have up to ${requestWithdrawal} in  your acct. Please try again later`
    );
  } else {
    acctBal = acctBal - requestWithdrawal;
    alert(
      `Your withdraw of ${requestWithdrawal} was successful. Current acctBal is ${acctBal}`
    );
  }
} else {
  alert("Incorrect Transaction PIN");
}




const number = 5;
*/

/*
- The switch Statement
- Statements and Expressions
- The Conditional (Ternary Operator)
*/

/*
// The Switch Statement

const day = "mondays";

switch (day) {
  case "monday":
    console.log("Sent report and attend standup meeting");
    break;
  case "tuesday":
    console.log("Planning course Structure");
    break;
  case "wednesday":
    console.log("Write samples code");
  case "thrusday":
    console.log("Record videos and edit");
    break;
  case "friday":
    console.log("Write sales copy for facebook ads");
  default:
    console.log("Its the weekend bro.... I dont work during weekend");
}
*/

/*
// Ternary Operator
const age = 32;

const message = `${
  age > 18
    ? `You are ${age} years old, you will be Jailed if you commit any crime.`
    : `You are ${age} years old, that means you're a minor`
}`;
console.log(message);
*/

// Unary Operator

// Unary plus Operator +
// Unary minus Operator -
// Prefix and Postfix Increment operators ++
// Prefix and Postfix Decrement OPerator --

let a = 10;
a = +a; // 10
a = -a; // -10
// console.log(a);

let b = "10";
b = +b;

// console.log(b);

const f = false;
const t = true;

let dan = 8;
++dan;
// console.log(dan);

let dan2 = 8;
--dan2;
// console.log(dan2);

let x = 10,
  y = 20;

let z = --x + y;
// console.log(z);

// console.log(-f);
// console.log(-t);

let i = 10;
i--;
// console.log(i);

let i2 = 10;
i2--;
// console.log(i2);

let r = 10,
  j = 20;
let m = r-- + j;
// console.log(m);
// console.log(r);

r = 10;
let n = --r + j;
// console.log(n);
// console.log(r);

let g = "456";
// console.log(--g);

// Assignment Operator

let counter = 0;
counter = counter + 1;
console.log(counter);

let counter2 = 30;
counter2 += 5;
counter2 -= 5;
counter2 *= 5;
counter2 /= 5;
counter2 %= 5;
console.log(counter2);

// Comparism Operator
// > greater than
// < lesser than
// >= greater or equal to
// <= lesser or equal to
// > && ===
// < && ===
// console.log(7 < 10);
// console.log(7 > 10);
// console.log(7 == 7);

// console.log("alice" < "bob");

// console.log("20" > 20);

console.log(null == undefined);
console.log(true > 0); // true
console.log(false < 1);
console.log(true > false); //true
console.log(false > true);
console.log("NaN" == 1);
console.log(NaN == NaN);
console.log(!true !== 0);
console.log(NaN !== NaN);
