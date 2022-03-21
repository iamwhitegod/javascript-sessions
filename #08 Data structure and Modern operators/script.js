'use strict';

// 1) Array Destructing
// const arr = [1, 2, 3, 4, 5, 6];
// const a = arr[0],
//   b = arr[1],
//   c = arr[2];

// console.log(a, b, c);

// const [a, b, c] = arr;
// console.log(a, b, c);

// const namesArr = ['John', 'Mary', 'Miranda', 'Reji', 'Bala'];

// const [john, , , Reji] = namesArr;
// console.log(john, Reji);

// function arr2() {
//   return namesArr;
// }

// const [first, , third, fourth] = arr2();
// console.log(first, third, fourth);

// Nested array destructing

// const numbers = [1, 2, 61, 34];

// const [, second, [nestFirst, nestSecond]] = numbers;
// console.log(second, nestFirst, nestSecond);

// const [first = 90, second = 10] = numbers;
// console.log(first, second);

// 2) Object Destructing
// const person = {
//   firstName: 'Godswill',
//   lastName: 'Woko',
//   age: 21,
//   address: {
//     country: 'Nigeria',
//     state: 'River State',
//     city: 'PortHarcourt',
//     street: 'Izuoma new layout, Oyigbo rivers state.',
//   },
// };

// const { firstName, lastName, address } = person;
// console.log(firstName, lastName, address);

// const { firstName: userName, lastName: surName } = person;
// console.log(userName, surName);

// Nested Objects

// const {
//   firstName,
//   address: { country: c, state: s, city: cy, street: str },
// } = person;
// console.log(firstName, c, s, cy, str);

// Destructing objest parameters in functions

// function user({ firstName, age, address: { city } }) {
//   console.log(`My name is ${firstName} and I am ${age}. I live in ${city}`);
// }

// user(person);

// 3) Spread operator
// const strin = 'Whitegod';
// const strinArr = [...strin];
// console.log(strinArr);

// const combined = [...numbers, ...namesArr];
// console.log(combined);

// function nums(nums) {
//   console.log(nums);
// }

// nums([23, ...numbers]);

// Objects
// const newPerson = { yearOfBirth: 1999, ...person, job: 'Developer' };
// console.log(newPerson);

// 4) REST pattern and parameter

// const [first, ...others] = namesArr;
// const [, second, , ...others] = namesArr;

// const { firstName, ...others } = person;
// console.log(firstName, others);

// function add(...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) sum += nums[i];
//   console.log(sum);
// }

// function add(...nums) {
//   let mius = 0;
//   for (let i = 0; i < nums.length; i++) mius -= nums[i];
//   console.log(mius);
// }

// add(2, 3);
// add(3, 4, 5, 6, 7, 8);
// add(32, 45, 7, 8, 1, 9, 0, 0);

// function add(...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) sum += nums[i];
//   console.log(sum);
// }

// add(...numbers);

/*
const weekdays = ['Mon', 'Tues', 'Weds', 'Thrus', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Clasnsico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  getAllPizza() {
    console.log('Get all Pizza');
  },
};
*/

// Short Circuiting (&& and ||)

// Use ANY data type, return ANY data type, short circuit

// OR Operator
// console.log(true || false);
// console.log(3 || false);
// console.log(0 || '5');
// console.log(undefined || null);
// console.log(5 || false);
// console.log('' || []);

// const fendiShoe = 14000;
// const product = fendiShoe <= 15000 || 'Adidas';
// console.log(product);

// AND Operator
// console.log('' && '9');
// console.log('Whitegod' && true && null && 67);

// const form = document.createElement('form');

// console.log(form && 'submitted data');

// const order =
//   restaurant.openingHours.fri.open && restaurant.orderPizza('tomato');
// console.log(order);

// The Nullish Coalesing Operator()

// const score = 0;
// const highscore = 345;

// // null, undefined similarly, don't 0, "", false
// console.log(score ?? highscore);

// Looping Arrays The for-of Loop

// for (let i = 0; i < restaurant.mainMenu.length; i++) {
//   console.log(restaurant.mainMenu[i]);
// }

// for (let [index, elem] of restaurant.starterMenu.entries()) {
//   console.log(`${index + 1} ${elem}`);
// }

// Enhanced Object Literals

// Looping Objects The for-in loop

// The Nullish Coalescing Operator()

/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;

const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// Nullish: null and undefined ( Not 0 or "");
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

// Optional Chaining (?.)

/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['Mon', 'Tues', 'Weds', 'Thrus', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  console.log(day);

  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(9, 0) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Whitegod', email: 'hello@whitegod.io' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty');

console.log('--------- Looping Objects ----------');
// Looping Objects Object Keys, Values, and Entries

// properties Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day}, `;
}

console.log(openStr);

// properties Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

// [Key , values]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Looping Objects The for-in loop
for (const property in restaurant) {
  console.log(restaurant[property]);
}
*/

// WORKING WITH STRING Part 1

/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('8737'[3]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(8));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('You got the middle seat')
    : console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('whitegod'));
console.log(typeof new String('whitegod'));
console.log(typeof new String('whitegod').slice(1));
*/

/****************************************************** */

/*
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalzation in name
const passenger = 'wHiteGod'; // Whitegod
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@whitegod.io';
const loginEmail = ' Hello@Whitegod.Io \n';

// const emailLower = loginEmail.toLowerCase();
// const trimmedEmail = emailLower.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Practise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome on Board!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('I have a laptop, some Food and a pocket knife'.split(' '));

console.log('Whitegod Kingsley'.split(' '));

const [firstname, lastname] = 'Whitegod Kingsley'.split(' ');
console.log(firstname, lastname);

const newName = ['Mr', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('Rejoice ann smith davis');
capitalizeName('whitegod kingsley');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Whitegod'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(42459038928309483));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planeInline = function (n) {
  console.log(`There are ${n} places in line ${'✈️'.repeat(n)}`);
};

planeInline(7);
*/
/////////////////////////////////
// Sets
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet)

// Maps
