"use strict";

/**
 * Javascript Fundamentals - Part 2
 *
 * Topics - Day 1
 *
 * 1) Activating Strict Mode
 * 2) Functions
 * 3) Function declarations and expressions
 * 4) Arrow functions
 * 5) Functions calling other Functions
 * 6) Reviewing Functions
 */

/**
 * Activating Strict Mode
 *
 * Strict Mode helps us avoid accidential error
 * and unknowing introducing bugs in our code.
 *
 * Strict mode forbids us to do certains and
 * it creates visible errors in the developer
 * console.
 *
 */

// let hasDriversLiense = false;
// const passTest = true;

// if (passTest) hasDriversLiense = true;
// if (hasDriversLiense) console.log("You can now drive");

// Functions

/**
 * A function is a reuseable block of code.
 */

// function logger() {
//   console.log("Logged something to the console");
// }

// // Invoking | Running | calling
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice was made with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleOranges = fruitProcessor(4, 16);
// console.log(appleOranges);

// fruitProcessor(0, 7);

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

///////////////////////////////////
///////////////////////////////////
// Function declaration and expressions

////////////////////////
// Function declaration

// const age = calAge(1986);
// console.log(age);

// function calAge(birthYear) {
//   return 2022 - birthYear;
// }

/////////////////////////
// // Function Expression

// const calAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// console.log(calAge2(1999));

/////////////////////////////
// Arrow functions
// const calAge = (birthYear) => {
//   return 2022 - birthYear;
// };

// const age = calAge(2001);
// console.log(age);

/////////////////////////////////
// Function calling other functions

// function a() {
//   console.log("Letter A");
//   c();
// }

// function b() {
//   console.log("Letter B");
// }

// function c() {
//   b();
//   console.log("Letter C");
// }

// a();

/**
 * Javascript Fundamentals - Part 2
 *
 * Topics - Day 2
 *
 * 1) Introduction to arrays
 * 2) Basic array operations
 * 3) Coding challenge
 * 4) Introduction to Objects
 * 5) Dots vs Bracket Notation
 * 6) Object Methods
 * 7) Coding Challenge
 */

/*

// Arrays are ordered list of values called elements 
// that are seperated by commas.

const names = new Array("Mary", "John", "Mike", "Joel");
console.log(names);

const cars = ["BMW", "BENZ", "TOYOTA", "LEXUS", "RANGE ROVER"];
console.log(cars);

const numbers = [1, 2, 3, 5, 6, 8];
console.log(numbers);

const mixedArray = [
  23,
  "I'm an array",
  true,
  null,
  undefined,
  function arrfunc() {},
  false,
  {},
];
console.log(mixedArray);

const admittedStudents = ["Mary", "John", "Mike", "Joel"];
const countries = ["Nigeria", "Ghana"];

/////////////////////////////////
// Basic Operation with arrays

// 1) Accessing elements of an arrays
// console.log(admittedStudents[0]);
// console.log(admittedStudents[1]);
// console.log(admittedStudents[2]);
// console.log(admittedStudents[3]);

// 2) Change the value of an element in an array
admittedStudents[0] = "Peace";
console.log(admittedStudents);

// 3) Getting size of an array
console.log(admittedStudents.length);
console.log(mixedArray.length);

// 4) Adding an elment to the end of an array
const arr = [];

// Adds Value to the end of the array

arr.push(function name() {});
arr.push("The push method adds value to the end of an array");
arr.push(2022);
console.log(arr);

// 5) Removing an elment from the end of an array
const name = admittedStudents.pop();
console.log(name);
console.log(admittedStudents.pop());
console.log(admittedStudents);

console.log(arr.pop());
console.log(arr);

// 5) Adding an elment in the beginning of an array

cars.unshift("Honda");
countries.unshift("South Africa");
console.log(cars);
console.log(countries);

// 6) Removing an elment from the beginning of an array

const honda = cars.shift();
console.log(honda);

const country = countries.shift();
console.log(country);
*/

// Objects

/**
 * Objects are an unordered collection of Key-values pairs
 * Each of key-value pair is called a property
 */

/*
// Object Literal syntax
const obj = {};
console.log(obj);

// Object constructor function
const myObj = new Object();
console.log(myObj);

const person = {
  firstName: "John",
  lastName: "Eze",
  job: "Teacher",
  age: 39,
  height: 6,
};

// 1) Accessing Properties of an Objects

// Dots vs Bracket Notation

// objectName.property

// DOT NOTATION
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// Bracket Notation

// objectName[property]

console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);

const address = {
  "House no": 3902,
  street: "Afam Road",
  state: "Rivers Statement",
  country: "Nigeria",
  34: 34,
};

console.log(address["House no"]);

// 2) Modifying Objects

person.age = 34;
console.log(person.age);

address["House no"] = 1234;
console.log(address);

// 3) Adding new property to an Object
person.gadget = ["HP Laptop", "Iphone", "Earpod"];
console.log(person);

// 4) Deleting a property from an Object
delete person.gadget;
console.log(person);

delete person.age;
console.log(person);

delete person.height;
console.log(person);

// Methods

person.greet = function () {
  console.log("Hello, how are you doing?");
};

person.greet();

person.walk = function () {
  console.log("I am walking");
};

person.walk();

const car = {
  model: "BMW",
  price: 6000,
  color: "red",
  speed: 0,
  isTurn: false,
  brake: function () {
    if (this.speed > 0) {
      this.speed = this.speed - 10;
      console.log(`Car is slowing down. Speed is ${this.speed} Km/s`);
    } else {
      console.log(`Car has stopped moving. Speed is ${this.speed}`);
    }
  },
  move: function () {
    this.speed = this.speed + 10;
    console.log(`Car is moving at ${this.speed} Km/s`);
  },
};

console.log(car);
*/

/**
 * Javascript Fundamentals - Part 2
 *
 * Topics - Day 3
 *
 * 1) Iteration - The for loop
 * 2) Looping arrays, breaking and continuing
 * 3) Looping backwards and loops in loops
 * 4) The While Loop
 * 5) Coding Challenge
 *
 */

// Loops

// While loop
// Do while loop
// For loop

// const monthlySavingTarget = 30000;
// let savings = 0;

// while (savings <= monthlySavingTarget) {
//   console.log(savings);
//   savings += 1000;
// }

// console.log("Loop has finish executing");

// Create an array of five random numbers between 1 and 10
// 1) Create array,
// 2) Array should have five random
// 3) Numbers should be between 1 and 10

// let randomNumbersArray = [];
// let count = 0;
// const size = 5;

// while (count < size) {
//   // statements
//   randomNumbersArray.push(Math.round(Math.random() * 10));
//   count++;
//   console.log(`The current size a the array is ${count}`);
// }

// console.log(randomNumbersArray, "Loop has finished executing");

// do-while loop
// Do-While loop is also called a post-test loop

/*
const target = 2000;
let savings = 0;

do {
  // Statements
  savings += 2000;
  console.log("Current savings is " + savings);
} while (savings < target);

console.log("Loop as finish executing...");

const MIN = 1;
const MAX = 20;

let secretNumber = Math.floor(Math.random() * (MAX - MIN) + 1);

let guesses = 0, // For the number of guesses
  hint = "", // For the hint
  number;

do {
  // get input from user
  let userInput = prompt(
    `Please enter a number between ${MIN} and ${MAX} ${hint}`
  );
  // get the integer
  number = parseInt(userInput);
  // incease the number of guesses
  guesses++;

  // Check input number with the secretNumber
  // Provide hint to the user if needed
  if (number > secretNumber) {
    hint = ", and less than " + number;
  } else if (number < secretNumber) {
    hint = ", and greater than " + number;
  } else if (number == secretNumber) {
    alert("Bravo!, you're correct after " + guesses + " guesses");
  }
} while (number != secretNumber);

alert("Loop has finished executing");
*/

// For loop
// Initializer, Condition, Counter (Increasmenter and decreasementer)

for (let i = 10; i > 5; i--) {
  // Statements
  console.log(i);
}

// Create an array of five random numbers between 1 and 10

let randomNumbersArray = [];

for (let i = 0; i < 5; i++) {
  // statements
  randomNumbersArray.push(Math.round(Math.random() * 10));
  console.log(`The current size the array is ${i + 1}`, randomNumbersArray);
}

//  Discussion later in the course
// For of loop
// For in loop
// Nested loop: loop inside another loop.
// looping backwards
