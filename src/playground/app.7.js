class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I do</button>
      </div>
    );
  }
}

//Options class -> Options compoinent here
//AddOption -> AddOption component here

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options component here</p>
      </div>
    );
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



//create jsx template
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />

  </div >
)
ReactDOM.render(jsx, document.getElementById('app'));