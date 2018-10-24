
const obj = {
  name: 'Anton',
  getName() {
    return this.name;
  }
}
const getName = obj.getName.bind(obj);//obj context does not get transffered -> bind() needed to push context
console.log(getName());



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
    alert('handlePick')
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


//Add remove All button
//Setup handleRemoveAll -> alert
//setup onClick to fire the method      

class Options extends React.Component {
  handleRemoveAll() {
    console.log(this.props.options);
    // alert('handleRemoveAll');
  }
  render() {
    //console.log(this.props.options.length)
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this)} > Remove All</button>
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

//1.setup a form with text input and submit button
//2. wire up onSubmit
//3. handleAddOption -> fetch the value typed -> if value, then alert

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