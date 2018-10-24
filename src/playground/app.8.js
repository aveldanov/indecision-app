class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['thing1', 'thing2', 'thing4', 'ff'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}





class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {

  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do</button>
      </div>
    );
  }
}

//Options class -> Options compoinent here
//AddOption -> AddOption component here


//Challenge
{/*  this.props.options.map((option) =>
            <p key={option}>{option}</p>
          ) */}

class Options extends React.Component {
  render() {
    //console.log(this.props.options.length)
    return (
      <div>
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
  render() {
    return (
      <div>
        <p>AddOptions Here</p>
      </div>
    );
  }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));