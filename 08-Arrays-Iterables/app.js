// const numbers = [1, 2, 3]; // Generally accepted way to create an array
// console.log(numbers);

// const listItems = document.querySelectorAll('li'); // creates an array like item (nodeList)
// console.log(listItems);

// const arrayListItems = Array.from(listItems); // convert an array like / iterable items to an actual array
// console.log(arrayListItems);

// const hobbies = ['sports', 'cooking'];
// hobbies.push('reading'); // adds item to the end of the array
// hobbies.unshift('coding'); // adds item as the first element of the array and moves all other elements down
// hobbies.pop(); // removes last item from array
// hobbies.shift(); // removes first item from the array
// hobbies[1] = 'Coding'; // changes the value stored in the array at the array index specified
// hobbies.splice(1,0,'eating', 'coding'); // adds elements 'eating' and 'coding' between items 1 and 2 of the array
// console.log(hobbies);

const data = 'new york;10.99;2000';

const transformedData = data.split(';'); // splits the string and returns an array
transformedData[1] = +transformedData[1]; // converts element at index 1 from string to number
console.log(transformedData);

const nameFragments = ['Jeff', 'Trusty'];
const name = nameFragments.join(' '); // converts array to a string of elements. If separator string is omitted the elements are separated by a comma
console.log(name);

const prices = [15, 1, 2, 3, 4, 5, 6];

console.log(Math.min(...prices)); // the spread operator converts an array to a list which is what Math.min requires

const nameData = ['Jeff', 'Trusty', 'Mr', 56];
// const firstName = nameData[0];
// const lastName = nameData[1];
// const [firstName, lastName] = nameData; // array destructuring (like above) ignoring elements not specified
const [firstName, lastName, ...remainingElements] = nameData; // array destructuring with rest operator to gather remaining elements not specified
console.log(firstName, lastName, remainingElements);

