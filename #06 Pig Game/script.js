'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initialing variables
let scores, currentScore, activePlayer, playing;

// Starting Conditions
const init = function () {
  // Game state
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggles active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1) Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    // 2) Display diceEl
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3) Check if rolled 1: If true
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1) Add current score to the player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2) Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the Game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3) Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
// 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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let sum,
    output = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        output.push(i);
        output.push(j);
        return output;
      }
    }
  }
};

twoSum([3, 2, 4], 6);

twoSum([2, 7, 11, 15], 9);

twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);

twoSum([2, 5, 5, 11], 10);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [...nums1, ...nums2], median;

  for (let i = 0; i < mergedArr.length; i++) {
    for (let j = 0; j < mergedArr.length; j++) {
      if (mergedArr[j] > mergedArr[j + 1]) {
        const temp = mergedArr[j];
        mergedArr[j] = mergedArr[j + 1];
        mergedArr[j + 1] = temp;
      }
    }
  }

  if (mergedArr.length % 2 !== 0) {
    const index = Math.floor(mergedArr.length / 2);
    median = mergedArr[index];

    return median;
  }

  if (mergedArr.length % 2 === 0) {
    const index1 = mergedArr.length / 2 - 1;
    const index2 = mergedArr.length / 2;
    median = (mergedArr[index1] + mergedArr[index2]) / 2;

    return median;
  }
};
