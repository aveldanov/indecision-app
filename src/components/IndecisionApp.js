import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }


  //handleDeleteOptions
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }))
  }


  handleClearSelectedOption = () =>
    this.setState(() => ({
      selectedOption: undefined
    }));




  //Delete one option
  handleDeleteOption = (optionToRemove) => {
    //console.log('handleDeleteOption', option);
    //filter keeps true items and deletes false items
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }

  handlePick = () => {
    const randomNum = (Math.floor(Math.random() * this.state.options.length));
    const option = this.state.options[randomNum];
    //return alert(option);
    this.setState(() => ({
      selectedOption: option

    }))



  }






  handleAddOption = (option) => {
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



  //lifecycle methods
  componentDidMount = () => {
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
  componentDidUpdate = (prevProps, prevState) => {
    //console.log('componentDidUpdate');
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      //console.log('saving data');

    }
  }

  //switch pages etc
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }





  render() {
    const subtitle = 'Put your life in the hands of a computer';
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
        <OptionModal selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;