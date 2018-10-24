class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['one', 'two', 'three']
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
        <AddOption />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    //console.log(this.props.hasOptions)
    return (
      < div >
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What Should I do
        </button>
      </div >
    );
  }
}


class Options extends React.Component {
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
}

//Option -> Option component is here
class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}


class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    console.log(option);
    if (option) {
      alert('handleAddOption');

    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit" >Add Option</button>

        </form>

      </div>
    );
  }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));