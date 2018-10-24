//stateless functional component

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }
  //handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  //handlePick -> pass down to action, setup onClick and bind
  //randomly pick an option and alert it

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

      this.setState((prevState) => {
        // prevState.options.push(option);  - manipulates the original object. We use array.concat instead
        return {
          options: prevState.options.concat([option])
        }
      })
    }


  }


  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    //console.log(this.state.options.length)
    return (
      //Passing down a method to Options to trigger the button
      <div>
        <Header title={title} subtitle={subtitle} />

        <Action hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />

        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}

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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );

}


/* class Header extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
} */


//  2
//classless
const Action = (props) => {
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
}

/* class Action extends React.Component {
  render() {
    //console.log(this.props.hasOptions)
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What Should I do
        </button>
      </div >
    );
  }
} */


//   3
//classless

const Options = (props) => {

  return (
    <div>
      <button onClick={props.handleDeleteOptions} > Remove All</button>
      {
        props.options.map((option) =>
          <Option key={option} optionText={option} />
        )
      }

    </div>
  );

}
/* class Options extends React.Component {
  render() {
    //console.log(this.props.options.length)
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions} > Remove All</button>
        {
          this.props.options.map((option) =>
            <Option key={option} optionText={option} />
          )
        }

      </div>
    );
  }
} */


//   4
//classless

const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
    </div>
  )
}

//Option -> Option component is here
/* class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
} */

//    5
class AddOption extends React.Component {
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
    this.setState(() => {
      return {
        error: error
      }
    });
    /*     if (option) {
          this.props.handleAddOption(option);
        } */
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
}
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

ReactDOM.render(<IndecisionApp name="anton" age={33} />, document.getElementById('app'));