const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert('Number > .7');
}

const numberArray = [1, 2, 3, 4];
for (const number of numberArray) {
  console.log(number);
}

for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

for (let i = numberArray.length - 1; i >= 0; i--) {
  console.log(numberArray[i]);
}

if ((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber <= 0.2 || randomNumber2 <= 0.2) {
  alert('Both random numbers are > .7 OR either is < .2');
}
console.log(`1st: ${randomNumber} 2nd: ${randomNumber2}`);
