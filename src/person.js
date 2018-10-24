


const isAdult = (age) => age >= 18;

const canDrink = (age) => {
  console.log('canDrink');
  if (age >= 21) {
    return true
  } else {
    return false
  }
}


const isSeniorCitizen = (age) => age >= 65;

export { isAdult, canDrink, isSeniorCitizen as default }