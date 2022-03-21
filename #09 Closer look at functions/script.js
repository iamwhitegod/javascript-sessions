"use strict";

/*
/////////////////////////////////
/// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

////////////////////////////////
//// How Passing Arguments Works: VAlues vs Reference

const flight = "LH234";

const whitegod = {
  name: "Whitegod Kingsley",
  passport: 23095849209,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 23095849209) {
    // alert("Checked In");
  } else {
    // alert("Wrong passport!");
  }
};

checkIn(flight, whitegod);
console.log(flight);
console.log(whitegod);

// Is the same thing as doing...
const flightNum = flight;
const passenger = whitegod;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(whitegod);
checkIn(flight, whitegod);

////////////////////////////////
//// Functions accepting callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// Js uses callbacks all the time
const high5 = function () {
  console.log("👋");
};

document.addEventListener("click", high5);

// console.log(document);
["whitegod", "Martha", "Adam"].forEach(high5);

/////////////////////////////////////
//// Function returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetMorning = greet("Morning");
greetMorning("Whitegod");
greetMorning("Steven");

greet("Hello")("Whitegod");

// Challenge

const greetArrowFun = (greeting) => (name) =>
  console.log(`${greeting} ${name}`);

greetArrowFun("Evening")("Eminspire");
*/

/*
///////////////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} book a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Whitegod Kingsley");
lufthansa.book(324, "Eminpsire IB");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Call method

book.call(eurowings, 23, "Whitgod Kingsley");

book.call(lufthansa, 239, "Mary Cooper");

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "IB John");

// Apply Method
book.apply(swiss, [600, "George Willson"]);
console.log(swiss);

// The bind Method
// book.call(eurowings, 23, "Whitgod");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steve Williams");
bookLH(34, "WHitegod Kingsley");
bookLX(90, "Lord Godswill");

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

  */

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log("This will never run again");
};

// runOnce();

// IIFE

(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
// console.log(notPrivate);

/////////////////////////////
/// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
