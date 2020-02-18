class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Jeff';
  constructor() {
    super();
    this.age = 56;
  }
  greet() {
    console.log('Hi, I am ' + this.name + ', I am ' + this.age + ' years old.');
  }
}
const person = new Person(56);
person.greet();


const p = new Person();
console.log(p);
