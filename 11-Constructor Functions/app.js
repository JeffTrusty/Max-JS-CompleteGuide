class Person {
  name = 'Jeff';
  constructor(age) {
    this.age = age;
  }
  greet() {
    console.log('Hi, I am ' + this.name + ', I am ' + this.age + ' years old.');
  }
}
const person = new Person(56);
person.greet();