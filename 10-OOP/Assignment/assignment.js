class Course {

  #price;  // make the price field private so it can't be manipulated outside of the setter
  get price() {
    return '$' + this.#price;
  }
  set price(value) {
    if (value < 0) {
      throw 'Invalid Price!';
    }
    this.#price = value;
  }
  constructor(title, length, coursePrice) {
    this.title = title;
    this.length = length;
    this.price = coursePrice; // use the setter to validate the price value
  }
  courseValue() {
    return (this.length / this.#price).toFixed(2);
  }
  courseSummary() {
    return `Title: ${this.title} Length: ${this.length} hours Price: ${
      this.price
    } Cost per hour: ${this.courseValue()}`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
    this.title = title;
  }
  publish() {
    console.log('Publishing:' + this.title);
  }
}

const course1 = new Course('JS', 52, 199.99);
const course2 = new Course('TS', 12, 149.99);
console.log(course1.courseSummary());
console.log(course2.courseSummary());

const practical = new PracticalCourse('JS1', 52, 199.99, 300);
console.log(practical.courseSummary(), 'Num Courses:', practical.numOfExercises);

const theoretical = new TheoreticalCourse('Theoretical Course', -45, 200);
theoretical.publish();
