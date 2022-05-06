'use strict';
////////////////////////////////////////////
//// Constructor Function and the new Operator

// const Person = function (firstname, lastname, birthYear) {
// Instance properties
// this.firstname = firstname;
// this.lastname = lastname;
// this.birthYear = birthYear;

// Never to this
// this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.prototype.greeting = function () {
//   console.log('Hello');
// };

// const whitegod = new Person('Whitegod', 'Kingsley', 2017);
// console.log(whitegod);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// const matida = new Person('Matila', 'Eze', 2003);
// const jack = new Person('Jack', 'Brown', 1975);

// console.log(matida, jack);

// console.log(whitegod instanceof Person);
// console.log(matida instanceof Person);

// whitegod.calcAge();

// console.log(Array.prototype);
// console.log(Person.prototype);

// Prototypal Inheritance on Built-In Objects
// console.log(whitegod.__proto__);
// console.log(whitegod.__proto__.__proto__);

// console.log(whitegod.__proto__ === Person.prototype);

// console.dir(Person.prototype.constructor);

// Array.prototype.unique ==
//   function () {
//     return [...new Set(this)];
//   };

// const only1 = [1, 2, 1, 3, 4, 5, 7, 7];
// console.log(only1.unique());

// ES Classes

// Class experssion
// const PersonCl = class {};

// Class Declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   // Setters & Getters

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there👋');
//     console.log(this);
//   }
// }

// const whitegodCl = new PersonCl('whitegod Kingsley', 4039);
// console.log(whitegodCl);

// Static Methods

//////////////////////////////////////
// Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);

// sarah.calcAge();

/////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Linking prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// // DRY Dont repeat yourself

// Student.prototype.constructor = Student;
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// /////////////////////////////////////////////////////
// // Inheritance Between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there👋');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always need to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       } My name is ${this.firstName} and I study ${this.course}`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jonas', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

/////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

//////////////////////////////////////
// Encapsulation: Protected properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also static version)

class Account {
  // 1) Public field (instances)
  locale = navigator.language;

  // 2) Private field (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // // Protected property
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  widthdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this._approveLoan(val)) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // Private Methods
  // _approveLoan(val) {
  #approveLoan(val) {
    return true;
  }
}

const acct1 = new Account('Whitegod', 'NGN', 1111);

// acct1.#movements.push(2550);

console.log(acct1.getMovements());

// Chaining
acct1.deposit(300).deposit(500).widthdraw(35).requestLoan(2500).widthdraw(4000);
console.log(acct1.getMovements());
