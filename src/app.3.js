
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));




class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`
  }

}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
//console.log(oldSyntax.getGreeting());
console.log(getGreeting());


//------------NEW

class NewSyntax {
  name = "john";
  getGreeting = () => {
    return `Hi, my name is ${this.name}`

  }
}

const newSyntax = new NewSyntax();
const newGetgreeting = newSyntax.getGreeting;
console.log(newGetgreeting());

//console.log(newSyntax);