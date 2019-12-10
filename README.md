# Max-JS-CompleteGuide

## Use back-tick for strings you want to use string interpolation in

```JavaScript
console.log('value: ${variable}')
```

## Place JavaScript links in the head section, but include the defer attribute. This allows the browser to start loading the JS files sooner. This will reduce the latency of the site. If the JS files don't rely on anything in the HTML document, then use the async attribute. Then the browser will parse them immediately. The defer attribute guarantees the loading order where async does not.

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

## Reference links

[MDN => JavaScript Basics:](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[MDN => Variables:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
[MDN => Operators:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
[MDN => Functions:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
[MDN => Arrays:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
[MDN => Objects:](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
[MDN => Precedence:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
[Airbnb-linting](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
[More Airebnb-linting](https://www.youtube.com/watch?v=SydnKbGc7W8&t=389s)
