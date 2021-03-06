# Max-JS-CompleteGuide

## CSS info

```text
HTML Classes are referenced in CSS by . notation
HTML ID's are referenced in CSS by # notation

HTML
<div class="modal" id="entry-text"></div>

CSS
.modal
#entry-text

```

## Use back-tick for strings you want to use string interpolation in

```JavaScript
console.log(`value: ${variable}`)
```

## Place JavaScript links in the head section, but include the defer attribute. This allows the browser to start loading the JS files sooner. This will reduce the latency of the site. If the JS files don't rely on anything in the HTML document, then use the async attribute. Then the browser will parse them immediately. The defer attribute guarantees the loading order where async does not

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Basics</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" />
  <link rel="stylesheet" href="assets/styles/app.css" />
  <script src="assets/scripts/vendor.js" defer></script>
  <script src="assets/scripts/app.js" defer></script>
</head>
```

## Array manipulation

```JavaScript
const hobbies = ['sports', 'cooking'];
hobbies.push('reading'); // adds item to the end of the array
hobbies.unshift('coding'); // adds item as the first element of the array and moves all other elements down
hobbies.pop(); // removes last item from array
hobbies.shift(); // removes first item from the array
hobbies[1] = 'Coding'; // changes the value stored in the array at the array index specified
// hobbies.splice(startIndex, numberOfItemsToDelete);
// hobbies.splice(startIndex, numberOfItemsToDelete, ItemsToAddAfterStartIndex);
hobbies.splice(1,0,'eating', 'coding'); // adds elements 'eating' and 'coding' between items 1 and 2 of the array
// hobbies.splice(0,1); // same as hobbies.shift();  splice returns what was removed
// hobbies.splice(0,3); // sames as hobbies.shift(); 3 times
hobbies.splice(0);  // clears the array

const results = [1,2,3,4,5];
const resultsCopy = results.slice(); // .splice() copies the contents of the original array to the new array and optionally portions of the original array by using the original array indexStart and indexEnd (not including indexEnd) of elements. If indexEnd is not specified remaining entries of the original array are copied

const resultsCopyWithAdded = results.concat([6,7,8]); // .concat returns a new array with the contents of the original array plus elements added in the parameter of the concat method
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
```

## Sets

### Sets are iterable, but have special methods (can be converted to an array). Order is NOT guaranteed and duplicates are NOT allowed

```JavaScript
//setName.entries will return an iterable. Each entry will be returned as a duplicate pair.
//The reason for having pairs is so you can swap sets and maps in code easily
// setName.has() will return true or false if the entry exists in the set
// setName.add() will add an entry to the set. However, if an entry already exists, no error thrown, but it won't be added as dupes aren't allowed
// setName.delete() will remove an entry if it exist. No error is thrown if it does not exist
const setNames = new Set('Hi', 'from', 'setName');
for (const name of setNames.entries()) {
  console.log(entry);
  // Returns:
  // ["Hi", "Hi"]
  // ["from", "from"]
  // ["setName", "setName"]
}

```

## Maps

### Maps store key-value data, but have special methods. Maps are iterable. Order IS guaranteed and duplicate keys are NOT allowed

```JavaScript
// The value of a key-value pair can be a single value, an array or an object
const person1 = {name: 'Max'};
const person2 = {name: 'Jeff'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
personData.set(person2, [{date: 'two weeks ago', price: 100}]);
console.log(personData);

for (const entry of personData.entries()) {
  console.log(entry);
}
// you can iterate through the entire map getting both the key and values although you don't need to use both
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}
// this will return the list of the keys and is faster than the above method returning both
for (const key of personData.keys()) {
  console.log(key);
}
// this will return the list of the values and is faster than the above method returning both
for (const value of personData.values()) {
  console.log(value);
}
```

## Maps vs Objects

```text
Maps can use ANY values (and types) as keys. Objects can only use strings, numbers or symbols as keys
Maps perform better for large quantities of data. Objects are great for small / medium-sized sets of data
Maps perform better when the data set needs to have entries added or removed a lot. Objects are easier to create and perform well when the set is static
```

## Objects

```JavaScript
// Create person object NOTE that we can have an object property name that contains a space and property names that are numbers
// Create person object
const userChosenKeyName = 'level';
const userKeyValue = '5'

const person = {
  'first Name': 'Jeff',
  lastName: 'Trusty',
  age: 56,
  greet: function() {
    alert(`Hi ${person.firstName}!`);
  },
  [userChosenKeyName]: userKeyValue,
  1.5: 'hello'
};

// to add a property to an existing object, simply reference the object add a . the new property name and the value assigned to the new property
person.isAdmin = true;

// changing the value of an objects property is as simple as assigning the new value
person.age = 35;
console.log(person);

//Use delete to remove a property. Don't assign it an undefined value as that is BAD practice. Setting to NULL is good practice if you want the property to remain in the object
delete person.age;
console.log(person);

// Accessing an object key that contains a space
console.log(person['first Name']);
console.log(person[1.5]);
console.log(person['1.5']); // behind the scenes, JS converts the property name to be a string

keyName = 'first Name';
console.log(person[keyName]);

// Square Bracket notation can be used to access CSS classes as they are defined rather than their JS translated property names
const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

movieList.style['background-color'] = 'cyan';
```

## Coding convention. When creating global constant variables make the variable name all upper case and separate words with \_ IE: ATTACK_VALUE = 10

### Use these at the top of your code to define constant values that will be used as values passed into functions or used as test conditions

## Ternary Operator similar to VFP's iif

```JavaScript
//                (      test condition       )  ( if true  )   (     if false     )
const maxDamage = attackType === NORMAL_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
```

## Converting truthy to real boolean

### The following code will assign the isValidInput a real false value because an empty string is falsy. Number values other than zero are truthy

```JavaScript
const userInput = '';
const isValidInput = !!userInput;

const truthy = !!1;  // truthy will be set to true
```

## Switch-case

### Switch uses === behind the scenes as such it is really only useful when using strict equality. IE type and value. Also true condition code execution continues to each case unless the break statement is included

```JavaScript
  switch (testValue) {
    case comparisonValue:
      //code
      break;
    case nextComparisonValue:
      //code
      break;

    default:
      //code
      break;
  }
```

## Loops

### There are 4 main types of loops

- for loop
  - Execute code a number of times using a counter variable
- for-of loop
  - Execute code for each element of an array
- for-in loop
  - Execute code for each key in an object
- while loop
  - Execute code until a condition is true. condition is tested before code execution
- do while loop
  - Execute code while a condition is true. condition is tested after code execution

```JavaScript
for (let i = 0; i < 3; i++)
{
  console.log(i);
}

for (const el of array)
{
  console.log(el);
}

for (const key in obj)
{
  console.log(key);
  console.log(obj[key]);
}

while (isLoggedIn)
{
  //code
}

let j= 0
do {
  console.log(j);
  j++
} while (j < 3);

let sum = 0;
for (let i = 2; i <= 6; i++) {
    sum = sum + i;
}
console.log(sum); // ???
```

## break and continues

### The break statement will cancel an entire loop while continue will just skip the current iteration

```JavaScript
// prints 0,1,2
for (let i = 0; i < 5; i++) {
if (i === 5) {
break;
}
console.log(i);
}

// prints 0,1,2,4
for (let i = 0; i < 5; i++) {
if (i === 5) {
continue;
}
console.log(i);
}
```

## Labeled Statements

### Assigning labels to code blocks (generally only used in nested loops where you want to break out of the outer loop)

```JavaScript
outerFor: for (let i = 0; i < 5;i++) {
  console.log('inner', i);
  innerFor: for (let j = 0; j < 5; j++) {
    if (j === 3) {
      break outerFor;
    }
    console.log('inner', j);
  }
}
```

## var vs let and const

### var is the old way of declaring variables let and const are the new standard. Also, let and const are block scoped and var is function scoped

## Functions

```JavaScript

const functionName = function(parameters) {
  //function code here
  //function will usually return a result, but not always
}

```

## Arrow Functions

```text
// General Syntax:
const functionName = (arg1, arg2) => {code}

However, the syntax allows for various bits to be omitted depending on what is needed

No arguments: An empty pair of parentheses is required
() => {code}

Exactly 1 argument: Parentheses can be omitted
arg => {code}

Exactly 1 expression: Braces can be omitted
(arg1, arg2) => arg1 + arg2

Multiple arguments and Multiple Statements: Requires the general syntax
(arg1, arg2) => {code}
```

## Default arguments

### Default Arguments need to be the first arguments the function expects

```JavaScript
function (arg1 = defaultValue, arg2 = defaultValue, ...argArrayName) {}
```

## Rest Parameters

### Rest Parameters (...) allow your function to accept an unknown number of parameters. JavaScript treats the parameters like an array

## Bind()

### bind() prepares functions to be called with known parameters but is not executed immediately

## DOM

### You can manipulate the DOM objects via JS. All nodes of the HTML document are converted to objects that can be queried or manipulated

```JavaScript
// const listItemElements = document.querySelectorAll('li');  // Not Live list. Use getElementsByTagName

// Live list.
const listItemElements = document.getElementsByTagName('li');

for (const ListItem of listItemElements)
{
  console.dir(listItem)
}
```

## Events

### Browsers can, but generally don't register events during the capture process, but do on the bubbling process. Event listeners can be added to multiple hierarchical items. IE on the div and the button inside of the div

```html
<div>
  <button>Click Me</button>
</div>
```

```JavaScript
const div = document.querySelector('div');
div.addEventListener('click', event => {
  console.log('Div Click');
});
const button = document.querySelector('button');
button.addEventListener('click', => {
  event.stopPropagation(); // this will stop the browser from going up the parent objects to see if they have code to execute
  console.log('Button Click');
});


```

## Webpack dev server

### This allows you to create different builds for different environments

```Powershell
npm run build:dev
npm run build:prod
```

## Babel transpiles modern code to legacy code for older browser support

```Powershell
npm install --save-dev babel-loader @babel/core @babel/preset-env
npm install --save core-js
npm install --save regenerator-runtime
```

## Node.js

```Powershell
npm init
npm install express --save
npm install body-parser --save
npm install --save ejs
node app.js # app.js is the program to handle being the web server and all of it's pages / services
```

## Unit Testing

```Powershell
# Jest is a tool for creating and executing JS unit tests
npm install --save-dev jest
npm i -D @types/jest
# Puppeteer is for creating end to end (E2E) testing
npm install --save-dev puppeteer
```

## Typescript

```Powershell
tsc --init # creates a tsconfig.json file which allows us to use
tsc -w # to compile all .ts files and watch them for changes
```

## Reference links

[MDN => JavaScript Basics:](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[MDN => Variables:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
[MDN => Operators:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
[MDN => Functions:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
[MDN => Arrays:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
[MDN => Objects:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
[MDN => Precedence:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
[MDN => Control Structures:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
[MDN => JavaScript Loops:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
[MDN => Strict Mode:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Changes_in_strict_mode)
[MDN => Clipboard:](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
[MDN => Functions:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
[MDN => Bind():](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
[MDN => querySelector:](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
[MDN => getElementById:](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
[MDN => querySelectorAll:](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
[MDN => getElementsByClassName:](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
[MDN => getElementsByTagName:](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)
[MDN => getElementsByName:](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName)
[MDN => append:](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)
[MDN => appendChild:](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
[MDN => prepend:](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)
[MDN => insertBefore:](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
[MDN => before:](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before)
[MDN => after:](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after)
[MDN => insertBefore:](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
[MDN => insertAdjacentElement:](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)
[MDN => replaceWith:](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith)
[MDN => replaceChild:](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
[MDN => remove:](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
[MDN => removeChild:](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
[MDN => Arrays:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
[MDN => this:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
[MDN => Classes:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
[MDN => Constructor Functions:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function)
[MDN => Prototypes:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
[MDN => DOM:](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
[MDN => Location Object:](https://developer.mozilla.org/en-US/docs/Web/API/Location)
[MDN => Window Object:](https://developer.mozilla.org/en-US/docs/Web/API/Window)
[MDN => Navigator Object:](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
[MDN => Events:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
[MDN => Events Reference:](https://developer.mozilla.org/en-US/docs/Web/Events)
[MDN => Event Object:](https://developer.mozilla.org/en-US/docs/Web/API/Event)
[MDN => Drag and Drop:](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
[MDN => Closures:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
[MDN => Recursion:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
[MDN => Numbers:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
[MDN => Tagged templates:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)
[MDN => Promises:](https://developers.google.com/web/fundamentals/primers/promises)
[MDN => async-await:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
[MDN => XMLHttpRequest:](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
[MDN => Fetch:](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
[MDN => Uploading Files:](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_application)
[MDN => Modules:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
[MDN => ESLint presets:](https://www.npmjs.com/search?q=eslint-config)
[MDN => Webpack:](https://webpack.js.org)
[MDN => localStorage:](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[MDN => cookies:](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
[MDN => IndexedDB:](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
[MDN => Babel:](https://babeljs.io/docs/en/)
[MDN => Babel-Loader:](https://github.com/babel/babel-loader)
[MDN => core-js:](https://github.com/zloirock/core-js)
[MDN => Security:](https://medium.com/@dhtmlx/security-of-javascript-applications-1c95cd2ce533)
[MDN => Algorithms and data structures:](https://github.com/trekhleb/javascript-algorithms)
[MDN => Typescript Documentation:](https://www.typescriptlang.org/)
[MDN => CSS Variables:](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
[MDN => Components:](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
[MDN => Templates and Slots:](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slot)
[MDN => Shadow DOM:](https://developers.google.com/web/fundamentals/web-components/shadowdom)
[MDN => type:]()

[W3Schools => Clipboard:](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)
[Airbnb-linting](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
[More Airbnb-linting](https://www.youtube.com/watch?v=SydnKbGc7W8&t=389s)
