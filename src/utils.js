console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

//named export
//export { square, add };
//exports:
//default exports - named exports



//const subtract = (a, b) => a - b;
export default (a, b) => a - b;


//export { square, add, subtract as default }
