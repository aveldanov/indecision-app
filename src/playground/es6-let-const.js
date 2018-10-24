var nameVar = 'Andrew';
var nameVar = 'Make';
console.log('nameVar ', nameVar);


let nameLet = 'Jen';
//let nameLet = 'Julie';
console.log('nameLet ', nameLet);

const nameConst = 'Frank';
//const nameConst = 'John';

//nameConst = 'John';
console.log('nameConst ', nameConst);



//var, let, const - function scoped!!!
/* function getPetName() {
  var petName = 'Pet';
  return petName;
}

getPetName();
//Error!
console.log(petName); */

//Block scoping - var (good outside of a block), const (blocked), let (blocked)
var fullName = 'Andrew Jo';
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}


console.log(firstName);