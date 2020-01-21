const numbers = [1, 2, 12, 3, -4, 5, 6];

const numsGreater5 = numbers.filter(val => val > 5);
console.log(numsGreater5);

const mappedNumbers = numbers.map(val => ({ num: val }));
console.log(mappedNumbers);

const multiplication = numbers.reduce((curResult, curValue) => curResult * curValue, 1);
console.log(multiplication);

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMax, curMin];
}
const [min, max] = findMinMax(...numbers); // ...numbers splits the array into a list of arguments

console.log(min,max);

const userIds = new Set();
userIds.add(10);
userIds.add(5);
userIds.add(10);

console.log(userIds);
