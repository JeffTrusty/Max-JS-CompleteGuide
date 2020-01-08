const numbers = [1, 2, 3]; // Generally accepted way to create an array
console.log(numbers);

const listItems = document.querySelectorAll('li'); // creates an array like item (nodeList)
console.log(listItems);

const arrayListItems = Array.from(listItems); // convert an array like / iterable items to an actual array
console.log(arrayListItems);

const hobbies = ['sports', 'cooking'];
hobbies.push('reading'); // adds item to the end of the array
hobbies.unshift('coding'); // adds item as the first element of the array and moves all other elements down
hobbies.pop(); // removes last item from array
hobbies.shift(); // removes first item from the array
hobbies[1] = 'Coding'; // changes the value stored in the array at the array index specified
hobbies.splice(1,0,'eating', 'coding'); // adds elements 'eating' and 'coding' between items 1 and 2 of the array
console.log(hobbies);
