//install import use

/* import validator from 'validator';

console.log(validator.isEmail('test@tes.com')); */
import React from 'react';
import ReactDOM from 'react-dom';



/* const template = (
  <p> testing 1, 2, 3</p>
); */
const template = React.createElement(
  'p', {}, 'testing 1, 2, 3'
);
ReactDOM.render(template, document.getElementById('app'));




