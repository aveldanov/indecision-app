class App extends React.Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    const oldCount = this.state.counter;
    const newCount = oldCount + 1;
    this.setState(
      {
        counter: newCount
      }
    )

  }

  render() {
    return (
      <div>
        <p>Hrllo</p>
        <button onClick={this.handleClick}>Clicked</button>
        <h1>{this.state.counter}</h1>

      </div>
    )
  }
}





ReactDOM.render(<App />, document.getElementById('root'));

