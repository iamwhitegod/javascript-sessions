'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//NOTES Start to write code in global context isn't a good practice
// It is always best to create a function

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acct) {
  acct.balance = acct.movements.reduce((prev, mov) => prev + mov, 0);
  labelBalance.textContent = `${acct.balance}€`;
};

const calcDisplaySummary = function (acct) {
  const incomes = acct.movements
    .filter(mov => mov > 0)
    .reduce((prev, mov) => prev + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acct.movements
    .filter(mov => mov < 0)
    .reduce((prev, mov) => prev + mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acct.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acct.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((prev, int) => prev + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// const user = 'Whitegod Kingsley';
const createUserNames = function (accts) {
  accts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

////////////////////////////////
// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message

    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieveAcc &&
    currentAccount.balance >= amount &&
    recieveAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    recieveAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

/*
// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
*/

// SPLICE

/*
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);
*/

// REVERSE

/*
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join("-"));
*/

////////////////////////////////
// Looping Arrays forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-------- FOREACH ----------");

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(--400)

// .....

////////////////////////////////
// forEach WIth Maps and Sets

// Map
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterlmg"],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////
// The map Method

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "Deposited" : "Withdrew"} ${Math.abs(
      mov
    )}`
);

// console.log(movementsDescriptions);
*/

///////////////////////////////////////
// The filter Method

/*
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];

for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const widthdrwals = movements.filter((mov) => mov < 0);
console.log(widthdrwals);
*/
///////////////////////////////////////
// The reduce Method

// console.log(movements);

// accumulator --> Snowball
// const balance = movements.reduce(function (prev, cur, i, arr) {
//   console.log(`Iteration ${i}: ${prev}`);
//   return prev + cur;
// }, 0);

// const balance = movements.reduce((prev, cur, i, arr) => prev + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value
/*
const max = movements.reduce((prev, cur) => {
  if (prev > cur) return prev;
  else return cur;
}, movements[0]);

console.log(max);
*/

///////////////////////////////////////
// The Magic of Chaining Methods

/*
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => mov * eurToUsd)
  .reduce((prev, cur) => prev + cur, 0);
console.log(totalDepositUSD);
*/

/*
///////////////////////////////////////
// The find Method
const firstWidthdrawal = movements.find((mov) => mov < 0);
console.log(firstWidthdrawal);

const eurToUsd = 1.1;
const highestDepositUSD = movements
  .map((mov) => mov * eurToUsd)
  .find((mov) => {
    if (mov > 2500) return mov;
  });
console.log(highestDepositUSD);
*/

/*
///////////////////////////////////////
// some and every
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some((mov) => mov === -130));
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every((mov) => mov > 0));

// Separate callback
const desposit = (mov) => mov > 0;

console.log(movements.every(desposit));
console.log(movements.some(desposit));
console.log(movements.filter(desposit));

///////////////////////////////////////
// flat and flatMap

const arr2 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr2.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((prev, cur) => prev + cur, 0);

// flatMap
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

///////////////////////////////////////
// Sorting Arrays

// Strings
const owners = ["Jonas", "Whitegod", "Zach", "Adam, 'Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
// console.log(movements)

// return < 0, A, B, C (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a,b) => {
//   if(a >  b) return 1;
//   if(a < b) return -1
// });


// movements.sort((a ,b) => a - b);

// Descending

// movements.sort((a, b ) => {
//   if(a > b) return -1;
//   if(a < b) return 1;
// })
// movements.sort((a, b) => b - a)
// console.log(movements);

///////////////////////////////////////
// More Ways of Creating and Filling Arrays

const arr3 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1,2,3,4,5,6,7))

// Empty arrays + fill method

const x = new Array(7)


x.fill(3, 4)
console.log(x)



console.log("--------- Array.from ---------")

// Array.from

const z = Array.from({length: 8}, (_,i ) => i + 1)
console.log(z)


const myNames = ['whitgod', "john", "samuel", 'Mary', "precious"]
console.log(myNames.toString())
*/

////////////////////////////////////////////////
///////////////////////////////////////////////
//// Numbers, Dates, Intl and Timers

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Converting and Checking Numbers
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1 3/10 = 3.333333333
// Base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Converting
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseFloat('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

console.log(parseInt('23'));
console.log(parseFloat('  23.5rem   '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if vaue is Number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log('--------------- Inter ------------------');

console.log(Number.isInteger(20));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(23 / 0));

// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, '23px', 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

// The Remainder Operator

// Working With BigInt

// Creating Dates
