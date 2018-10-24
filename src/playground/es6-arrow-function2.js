//aruguments object - no longer bound with arrow functions

/* const add = function (a, b) {
  console.log(arguments);
  return a + b;
}
console.log(add(55, 1, 1001)); */

//-> ARROW function does not have arguments defined => use ES5 when needed

/* const add = (a, b) => {
  console.log(arguments);
  return a + b;
}
console.log(add(55, 1, 1001)); */


//this keyword - no longer bound
/* const user = {
  name: 'Andrew',
  cities: ['Moscow', 'New York', 'Dublin'],
  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);

    const that = this; //workaround to below
    //'this' cannot be accessed outside of object in function
    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city);
    })
  }
} */


/* const user = {
  name: 'Andrew',
  cities: ['Moscow', 'New York', 'Dublin'],
  printPlacesLived: function () {

    //if we switch to => function it works
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    })
  }
} */



/* const user = {
  name: 'Andrew',
  cities: ['Moscow', 'New York', 'Dublin'],
  //if this change it to ARROW -> THIS is accessing global scope and it is not equal to cities anymore
  printPlacesLived() {

    //if we switch to => function it works
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    })
  }
} */

/* const user = {
  name: 'Andrew',
  cities: ['Moscow', 'New York', 'Dublin'],

  printPlacesLived() {
    return this.cities.map((city) => this.name + 'has lived in ' + city);
  }
}

console.log(user.printPlacesLived());
 */

//CHALLENGE
const multiplier = {
  //numbers - to multiply
  // single number - multiply by
  //-> get a new array back
  //method - multiply -> new array of multiply number
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((item) => item * this.multiplyBy);
  }



};

console.log(multiplier.multiply());