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

/*
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
*/

//  Discussion later in the course
// For of loop
// For in loop
// Nested loop: loop inside another loop.
// looping backwards

// History of Javascript

/*********************
 * JavaScript Fundamentals - Part 1
 */

/******
 * Coding Challenge #1
    Mark and John are trying to compare their BMI (Body Mass Index), which is 
    calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

    Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about
    whether Mark has a higher BMI than John.
    Test data:
      * Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
      * Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
      
    GOOD LUCK � 
 */

/*
// Test Data 1
// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

// Test Data 2
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2; // BMI = mass / height ** 2 or Mass / height * height
const johnBMI = johnMass / johnHeight ** 2; // BMI = mass / height ** 2 or Mass / height * height

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

/******
 * Coding Challenge #2

  Use the BMI example from Challenge #1, and the code you already wrote, and
  improve it.

  Your tasks:
  1. Print a nice output to the console, saying who has the higher BMI. The message
  is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
  BMI (28.3) is higher than John's (23.9)!"

  Hint: Use an if/else statement �

  GOOD LUCK � 
 */

/*
// Test Data 1
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

// Test Data 2
// const markMass = 95;
// const markHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2; // BMI = mass / height ** 2 or Mass / height * height
const johnBMI = johnMass / johnHeight ** 2; // BMI = mass / height ** 2 or Mass / height * height

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's
  BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}
*/

/******
 * Coding Challenge #3

  There are two gymnastics teams, Dolphins and Koalas. They compete against each
  other 3 times. The winner with the highest average score wins a trophy!

  Your tasks:
  1. Calculate the average score for each team, using the test data below

  2. Compare the team's average scores to determine the winner of the competition,
  and print it to the console. Don't forget that there can be a draw, so test for that
  as well (draw means they have the same average score)

  3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
  team only wins if it has a higher score than the other team, and the same time a
  score of at least 100 points. Hint: Use a logical operator to test for minimum
  score, as well as multiple else-if blocks �

  4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
  both teams have the same score and both have a score greater or equal 100
  points. Otherwise, no team wins the trophy

  Test data:
    * Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    * Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    * Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
    
  GOOD LUCK �
 */

/*

// Test Data 1
// const dolphinsScore = 96 + 108 + 89;
// const dolphinsAvg = dolphinsScore / 3;

// const koalasScore = 88 + 91 + 110;
// const koalasAvg = koalasScore / 3;

// Test Data 2
// const dolphinsScore = 97 + 112 + 101;
// const dolphinsAvg = dolphinsScore / 3;

// const koalasScore = 109 + 95 + 123;
// const koalasAvg = koalasScore / 3;

// Test Data 3
const minimumAvg = 100;
const dolphinsScore = 97 + 112 + 101;
const dolphinsAvg = dolphinsScore / 3;

const koalasScore = 109 + 95 + 106;
const koalasAvg = koalasScore / 3;

console.log(dolphinsAvg, koalasAvg);

// dolphinsAvg === koalasAvg && dolphinsAvg >= 100

if (dolphinsAvg === koalasAvg && dolphinsAvg >= minimumAvg) {
  console.log("Both team draw");
} else if (dolphinsAvg === koalasAvg && koalasAvg >= minimumAvg) {
  console.log("Both team draw");
} else if (dolphinsAvg < koalasAvg && koalasAvg >= minimumAvg) {
  console.log("Koalas won the trophy 🏆");
} else if (dolphinsAvg > koalasAvg && dolphinsAvg >= minimumAvg) {
  console.log("Dolphins won the trophy 🏆");
} else {
  console.log("No team won the trophy 🏆");
}
*/

/******
 * Coding Challenge #4

  Steven wants to build a very simple tip calculator for whenever he goes eating in a
  restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
  300. If the value is different, the tip is 20%.


// bill >= 50 && bill <= 300

  Your tasks:
  1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
  this. It's not allowed to use an if/else statement � (If it's easier for you, you can
  start with an if/else statement, and then try to convert it to a ternary
  operator!)
  2. Print a string to the console containing the bill value, the tip, and the final value
  (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
  316.25”

  Test data:
    * Data 1: Test for bill values 275, 40 and 430
  
  Hints:
    * To calculate 20% of a value, simply multiply it by 20/100 = 0.2
    * Value X is between 50 and 300, if it's >= 50 && <= 300 �
    
  GOOD LUCK �
 */

/*
// const bill = 275;
// const bill = 40;
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);
*/

/*********************
 * JavaScript Fundamentals - Part 2
 */

/*
 Coding Challenge #1

    Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
    gymnastics discipline, which works differently.
    Each team competes 3 times, and then the average of the 3 scores is calculated (so
    one average score per team).

    A team only wins if it has at least double the average score of the other team.
    Otherwise, no team wins!

    Your tasks:
    1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
    2. Use the function to calculate the average for both teams
    3. Create a function 'checkWinner' that takes the average score of each team
    as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
    to the console, together with the victory points, according to the rule above.
    Example: "Koalas win (30 vs. 13)"
    4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
    5. Ignore draws this time

    Test data:
    § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
    § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

    Hints:
    § To calculate average of 3 values, add them all together and divide by 3
    § To check if number A is at least double number B, check for A >= 2 * B.
    Apply this to the team's average scores �
    GOOD LUCK �

 */

/*
const calcAverage = (score1, score2, score3) => {
  const avg = score1 + score2 + score3 / 3;
  return avg;
};

// Test Data 1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgKoalas, avgDolphins) => {
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("No team won");
  }
};

// Test Data 2
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 279);
checkWinner(avgKoalas, avgDolphins);
*/

/*
Coding Challenge #2
    Steven is still building his tip calculator, using the same rules as before: Tip 15% of
    the bill if the bill value is between 50 and 300, and if the value is different, the tip is
    20%.

    Your tasks:
    1. Write a function 'calcTip' that takes any bill value as an input and returns
    the corresponding tip, calculated based on the rules above (you can check out
    the code from first tip calculator challenge if you need to). Use the function
    type you like the most. Test the function using a bill value of 100

    2. And now let's use arrays! So create an array 'bills' containing the test data
    below

    3. Create an array 'tips' containing the tip value for each bill, calculated from
    the function you created before

    4. Bonus: Create an array 'total' containing the total values, so the bill + tip

    Test data: 125, 555 and 44
    
    Hint: Remember that an array needs a value in each position, and that value can
    actually be the returned value of a function! So you can just call a function as array
    values (so don't store the tip values in separate variables first, but right in the new
    array) �

    GOOD LUCK �

*/

/*
const bills = [125, 555, 44];
const tips = [];

function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

for (let i = 0; i < bills.length; i++) {
  const bill = bills[i];
  const tip = calcTip(bill);
  tips.push(tip);

  // tips.push(calcTip(bills[i]));
}

console.log(tips);

*/

/*
Coding Challenge #3
    Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
    implement the calculations! Remember: BMI = mass / height ** 2 = mass
    / (height * height) (mass in kg and height in meter)

    Your tasks:
    1. For each of them, create an object with properties for their full name, mass, and
    height (Mark Miller and John Smith)
    2. Create a 'calcBMI' method on each object to calculate the BMI (the same
    method on both objects). Store the BMI value to a property, and also return it
    from the method
    3. Log to the console who has the higher BMI, together with the full name and the
    respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

    Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
    tall.

    GOOD LUCK �
*/

/*
const mark = {
  fullName: "Mark Mullier",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(
  mark.calcBMI() > john.calcBMI()
    ? `${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${
        john.fullName
      }'s BMI ${john.calcBMI()}!`
    : `${john.fullName}'s BMI ${john.calcBMI()} is higher than ${
        mark.fullName
      }'s BMI ${mark.calcBMI()}!`
);
*/

/*
Coding Challenge #4
    Let's improve Steven's tip calculator even more, this time using loops!

    Your tasks:
    1. Create an array 'bills' containing all 10 test bill values
    2. Create empty arrays for the tips and the totals ('tips' and 'totals')
    3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
    tips and total values (bill + tip) for every bill value in the bills array. Use a for
    loop to perform the 10 calculations!

    Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

    Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
    tips and totals arrays �
    
    Bonus:
    4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
    an argument. This function calculates the average of all numbers in the given
    array. This is a difficult challenge (we haven't done this before)! Here is how to
    solve it:
    4.1. First, you will need to add up all values in the array. To do the addition,
    start by creating a variable 'sum' that starts at 0. Then loop over the
    array using a for loop. In each iteration, add the current value to the
    'sum' variable. This way, by the end of the loop, you have all values
    added together
    4.2. To calculate the average, divide the sum you calculated before by the
    length of the array (because that's the number of elements)
    4.3. Call the function with the 'totals' array

    GOOD LUCK �
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

for (let s = 0; s < bills.length; s++) {
  // const tip = calcTip(bills[s]);
  // const total = bills[s] + tip;
  // tips.push(tip);
  // totals.push(total);

  tips.push(calcTip(bills[s]));
  totals.push(bills[s] + calcTip(bills[s]));
}

// console.log(tips);
// console.log(totals);

const calcAverage = function (arr) {
  let sum = 0,
    average;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    average = sum / arr.length;
  }

  console.log(average, sum);
};

calcAverage(totals);
