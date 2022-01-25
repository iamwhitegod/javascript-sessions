// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Setting up Prettier and Vcode

// Step 1) Install Prettier and reload VScode

// Step 2) Define prettier as the default formatter for your code

// Step 3) Create a prettier.rc

// Step 4) Configurating User Snippet

// Step 5) Setting up a Development Workflow
/*
 TODO

 - Installing Live Server
 - Using a more professional appoarch (NODE & NPM)
      * Install Node.js
      * Install Live server globally  
*/

const xyz = "23";
if (xyz === 23) console.log(23);
const calcAge = (birthYear) => 2037 - birthYear;

// FIXME: BUG TODO LEC REFACTOR DOCUMENTATION NOTES

/*



NOTES: 

/*
  Learning how to code

  How to fail a learning how to code

    Let's meet John

    * He didn't have a goal at the beginning of his journey
    * He started by watching courses and reading tutorials. but he would 
    just copy the code without caring about how it works. Sometimes he would just copy and paste code!
    * He didn't reinforce what he was learning by doing small challenges or taking notes
    * He didn'practice coding, and didn't come up with his own project ideas
    * He quickly became frustrated when his code was not prefectly clean or efficient
    * He lost motivation because the thought he could never know everytihing
    * He was learning in isolation
    * After finishing a couple of courses, he thought he now was a web developer and could apply for jobs but recuirters notice he could complete simple coding task and did not hire him.
*/

/**
 * BUG"
 *  He didn't have clear goal at
 *  the beginning of his journey
 *
 * FIXME:
 *
 * Set a specific, measurable realistic
 * and time-based goal.
 *
 * Know exactly why you are learning to code;
 * Switching careers? Finding a better Job?
 *
 * Imagine a big project you want to be able to build!
 *
 * Research on technology you need and then learn them.
 */

/**
 * BUG"
 *  He would just copy the code without caring how it works.
 *  Sometimes, he would just copy and paste code!
 *
 * FIXME:
 *
 *  Understand the code that you're studying and typing
 *
 *  Always type the code, don't copy-paste!
 */

/**
 * BUG:
 *
 * He didn't reinforce what he was learning by doing small
 * challenges or taking notes
 *
 * FIXME:
 *
 * After you learning a new feature or concept, use it immediately.
 *
 * Take notes
 *
 * Challenge yourself and practise with small coding exercise and challenges
 *
 * Don't be in a hurry to complete the course fast!
 */

/**
 * BUG:
 * He didn't practise coding, and didn't come up
 * with his own project ideas
 *
 * FIXME:
 *
 * Practicing on your own is the most important thing to do
 *
 * This is NOT optional! Without practice outside of courses, you won't go anywhere!
 *
 * Come up with your own project ideas or copy popular sites or applications, or just
 * parts of them in th beginning.
 *
 * Don't get stuck in "Tutoial hell"
 */

/**
 * BUG:
 *
 * He quickly became frustrated when his code was not perfectly clean or efficent
 *
 * FIXME:
 *
 * Don't get stuct trying to write the perfect code!
 *
 * Just write tons of code, no matter the quality!
 *
 * Clean and efficient code will come with time
 *
 * You can always refactor code later
 */

/**
 * BUG
 * He lost motivation because he thought he could never know everything
 *
 * FIXME
 *
 * Embrace the fact that you will never know everything
 *
 * Just focus on what you need to achieve your goal!
 */

/**
 * BUG:
 * He was learning in isolation
 *
 * FIXME:
 * Explain new concepts to other poeple. if you can explain it,
 * you truly understand it,
 *
 * Share your goals to make yourself accountable
 *
 * Share your learning process with the webdev community (#100DaysOfCode, #CodeNewbie, #Webdev, etc)
 */

/**
 * BUG
 * After finishing a couple of courses, he thought he now was a web developer and could start applying to Jobs
 *
 * FIXME:
 * The biggest misconception that people have!
 *
 * Courses are an amazing starting point, but are only the beginning of your journey!
 */

/**
 * STAGES IN LEARNING TO CODE
 *
 *  - Everything is awesome
 * Study Courses: Understand code, take challenges and notes
 * Stay motivated! Keep writing lots of code on your own, no matter how bad
 *
 *  - Cliff of confusion
 * Learn with other people, devs and beginners, and share progress
 *
 *  - Pit of despair
 * Keep challenges yourself, run into lots of problems, and fix them
 *
 *  - Back to awesome
 * Round up your skillset with best practices and tools (git, testing,...)
 *
 *  - Job Ready
 * (But the learning never stops)
 */

/**
 * DEVELOPER SKILL & EDITOR SETUP
 *
 * How to think like a developer: Become a problem solver!
 *
 * - 4 Step Framework.
 *
 *  Example: In an array of GPS coordinates, find the two closest points
 *
 * HOW TO FAIL AT SOLVING PROBLEM using JOHN's EXAMPLE
 *
 * BUG
 *
 * Whenever john encounters a problem:
 * He jumps at the problem without much thinking.
 * He implements his solution in a unstructured way
 * He get stressed out when things don't work
 * He is too proud to reseach solutions
 *
 * FIXME:
 *
 * Stay claim and slow down, don't just at a problem without a plan.
 * Take a very logical and rational approach (Programming is just logic, in the end...)
 *
 * 4 Steps to solves any problem
 *
 * Step 1) Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem
 *
 *          Example: Project Manager: We need a function that reverses whatever we pass into it.
 *
 * What does "whatever" even mean in this context?
 * What should be reversed? Answer: Only strings, numbers, and arrays make sense to reverse...
 * What to do if something else is passed in?
 * What should be returned? Should it always be a string, or should the type be he same as passed in?
 * How to recognize whether the argument is a number, a string, or an array?
 * How to reserver a number, a string, and an array?
 *
 * Step 2) Divide and conquer: Break a big problem into smaller sub-problems
 *
 *        SUB_PROBLEMS
 *
 * Check if argument is a number, a string, or an array
 * Implement reversing a number
 * Implement reversing a string
 * Implement reversing a array
 * Return reversed value
 *
 * Don't be afraid to do as much research as you have to.
 *
 * How to check if a value is a number in Javascript?
 * How to check if a value is a string in Javascript?
 * How to check of a value is an array in Javascript?
 * How to reverse a number in Javascript?
 * How to reverse a string in Javascript?
 * How to reverse an array in Javascript?
 *
 *
 * Step 4) For bigger prblems, write pseudo code before writing the actual code.
 */

/**
 * PROBLEM:
 *
 * We work for a company building a smart home thermometer, Our most recent task
 * is this: "Given an array of temperatures of one day, caculate the array of temperatures of one day, calculate the
 * temperature amplitude. Keep in mind that sometimes there might be a sensor error."
 */

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference
// between highest and lowest temp.
// - How to compare max and min temperatures?
// - What's an sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it.

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};


const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

// Problem 2
// Function should now recieve 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problem
// - How to merge two arrays?

/*
const calcTempAmplitudeNew = function (t1, t2) {
  // Merging t2 with t1 using concat array methods
  const temps = t1.concat(t2);
  console.log(temps);
  

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;

  }

  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [7, 3, 9]);
console.log(amplitudeNew);
*/

/**
 * Debugging (Fixing Errors)
 *
 * Software bug: Defect or problem in a computer program.
 * Basically, any unexpected or unintended behavior of a computer program
 * is a software bug
 *
 * Bugs are compleely normal in software development!
 */

// Debugging: Process of finding, fixing and preventing bugs

// THE DEBUGGING PROCESS

/**
 * IDENTIFY
 *
 * During development
 *
 * Testing software
 *
 * User reports during production
 *
 * Context: browers, users etc.
 * ************************************************
 * FIND
 *
 * Developer console (simple code)
 *
 * DEbugger (complex code)
 * *************************************************
 * FIX
 *
 * Replace wrong solution with new correct solution
 * **************************************************
 * PREVENT
 *
 * Searching for the same bug in similar code.
 *
 * Writing tests using testing software.
 *
 */

// Debugging with the console and breakpoints

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: +prompt('Degress celsius'),
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  // Guard Clause
  if(measurement.value === "NaN") return;

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// console.log(console);
*/

/*
Given an array of forecasted maximum temperatures, the thermometer 
displays a string with the given temperatures.

Example:[17, 21, 23]will print "... 17ºC in 1 days ... 
21ºC in 2 days ... 23ºC in 3 days ...

"Your tasks:

1.Create a function 'printForecast'which takes in an array 
'arr'and logs a string like the above to the console. Try it 
with both test datasets.

2.Use the problem-solving framework: Understand the problem 
and break it up into sub-problems!

Test data:
Data1: [17, 21, 23]
Data2: [12, 5, -5, 0, 4]
*/

// Problem: Use array of maximum temperatures to display
// a string with the given temperatures

// 1) Understanding the problem
// - Array transformed to string separated by ...
// - What is the x days? Answer equal array index plus 1

// 2) Breaking up into sub-problems
// - Transform array into a string
// - Transform each element to string with C
// - String needs to contain day
// - Add ... between element and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += ` ...${arr[i]}°C in ${i + 1} days`;
  }
  str = str + "...";

  return str;
}

console.log(printForecast(data1));
console.log(printForecast(data2));
