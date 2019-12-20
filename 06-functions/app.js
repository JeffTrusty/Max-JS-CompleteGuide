const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid Choice, Rock was chosen for you');
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
// arrow functions with a single statement allows us to not require a return and not use the {}

// changed getWinner to an arrow function and use ternary syntax which is now a single statement
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === PAPER)
    ? RESULT_COMPUTER_WINS
    : RESULT_PLAYER_WINS;

// const getWinner = function(cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === ROCK) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };

// use an anonymous function for event listeners
startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  const winner = getWinner(playerChoice, computerChoice);
  let message = `You picked ${playerChoice ||
    DEFAULT_USER_CHOICE}, computer picked ${computerChoice}. There for you `;
  if (winner === RESULT_DRAW) {
    message += 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'won.';
  } else {
    message += 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});


// not app related

// Rest operator is used to take in an unknown number of parameters and converts them to an array
const sumUp = (...numbers) => {
  let sum = 0;
  for (const num of numbers)
  {
    sum += sum;
  }
  return sum;
};

// The arguments key word is how < ES6 did an unknown number of parameters. You MUST us the function keyword and the arguments is similar to an arguments array
const subtractUp = function () {
  let sum = 0;
  for (const num of arguments) // don't use this methodology
  {
    sum -= sum;
  }
  return sum;
}

console.log(sumUp(1, 5, 4, 3, -5, 20));
console.log(sumUp(1, 5, 4, 3, -5, 20, 15, 329));
console.log(subtractUp(1, 10, 15, 20));


