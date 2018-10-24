//Car 
//Make
//Model
//Vin

//getDescription ->

class Person {
  //default value -> Anonymous
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;

    // console.log('test')
  }
  getGreeting() {
    //return 'hi';
    //return 'Hi, I am ' + this.name + '!';
    return `my name is ${this.name} `;
  }
  getDescription() {
    //return 'hi';
    //return 'Hi, I am ' + this.name + '!';
    return `${this.name} is ${this.age} year(s) old`;
  }

}

//Subclass student still a Person

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); //calling parenting function
    this.major = major;
  }
  hasMajor() {
    return !!this.major; //!! returns 'true' if there is a contet. if we didnt use it - it would return just name
  }
  //Overriding from our child class
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description = description + ` Their major is ${this.major}.`;
    }
    return description;
  }
}


class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting = greeting + `Their location is ${this.homeLocation}`;
    }
    return greeting;
  }

}


const me = new Traveler('Anton', 9, 'Reutov');
console.log(me);

console.log(me.getGreeting());


const other = new Traveler(undefined, undefined, 'neverland');
console.log(other);

console.log(other.getGreeting());


/* const me = new Student('Anton', 9, 'Engineering');
//console.log(me);
//console.log(me.hasMajor());
console.log(me.getDescription());


const other = new Student();
//console.log(other);
//console.log(other.hasMajor());
console.log(other.getDescription()); */



