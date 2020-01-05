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

### There are 4 main types of loops:

1. for loop

- Execute code a number of times using a counter variable

2. for-of loop

- Execute code for each element of an array

3. for-in loop

- Execute code for each key in an object

4. while loop

- Execute code until a condition is true. condition is tested before code execution

5. do while loop

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
      break outterFor;
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
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()

[W3Schools => Clipboard:](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)
[Airbnb-linting](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
[More Airbnb-linting](https://www.youtube.com/watch?v=SydnKbGc7W8&t=389s)
