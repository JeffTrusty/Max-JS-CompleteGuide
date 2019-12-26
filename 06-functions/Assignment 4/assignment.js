// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// // a
// const sayHello = name => {
//   console.log('Hi ' + name);
// };

// sayHello('Jeff');

// b+c
const greet = (name, greeting = 'Hi') => {
  if (name === undefined) {
    return 'Hello there';
  } else {
    return greeting + ', ' + name;
  }
};

// d
const checkInput = (cb, ...arguments) => {
  for (const argument of arguments) {
    if (!arguments) return;
  }
  cb('empty argument');
};

function cb(message) {
  alert(message);
}

console.log(greet('Jeff', 'Hello'));
console.log(greet('Jeff'));
console.log(greet());
