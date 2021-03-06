
import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option'
import Header from './components/Header';
import Action from './components/Action';


class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }
  }

  //lifecycle methods
  componentDidMount() {
    try {
      //console.log('componentDidMount');
      const json = localStorage.getItem('options');
      //converts it from JSON string into array
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({
          options: options
        }
        ))
      }
    } catch (e) {
      //Do nothing at all
    }
  }


  // it has params like prevProps and prevState
  componentDidUpdate(prevProps, prevState) {
    //console.log('componentDidUpdate');
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      //console.log('saving data');

    }
  }

  //switch pages etc
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  //handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }))
  }

  //Delete one option
  handleDeleteOption(optionToRemove) {
    //console.log('handleDeleteOption', option);
    //filter keeps true items and deletes false items
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }



  handlePick() {
    this.setState(() => {
      const randomNum = (Math.floor(Math.random() * this.state.options.length));
      const option = this.state.options[randomNum];
      return alert(option);
    })
  }

  handleAddOption(option) {
    // console.log(option);

    if (!option) {
      return 'Enter valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    } else {
      this.setState((prevState) => (
        {
          options: prevState.options.concat(option)
        }
      ))
    }


  }


  render() {
    const subtitle = 'Put your life in the hands of a computer';
    //console.log(this.state.options.length)
    return (
      //Passing down a method to Options to trigger the button
      <div>
        <Header subtitle={subtitle} />

        <Action hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />

        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}



//  1 
//classless
//default values added





//  2
//classless
/* const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What Should I do
      </button>
    </div >
  );
} */

//   3
//classless

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions} > Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }

    </div>
  );

}

//   4
//classless

/* const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={() => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
}; */


//    5


/* class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);


    this.setState(() => ({
      error: error
    }
    ));

    if (!error) {
      e.target.elements.option.value = '';
    }

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit" >Add Option</button>

        </form>

      </div>
    );
  }
} */
//    6
//Classless component but we can PROPS 
const User = (props) => {
  return (
    < div >
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div >
  )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

