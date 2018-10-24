//count - setup default prop value to 0


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }

  handleAddOne() {
    //return console.log('handleAddOne');
    /* this.state.count = this.state.count + 1;
    console.log(this.state); */

    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    // return console.log('handleMinusOne');
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })

  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });

  }


  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}> Reset </button>

      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}

//Create 3 methods: handleAddOne, handleMinusOne, handleReset
//console.log to print method name
// Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />, document.getElementById('app'));













/* let count = 0;
const addOne = () => {
  count = count + 1;
  rednerCounterApp();
}

const minusOne = () => {
  //console.log("minusOne");
  count = count - 1;
  rednerCounterApp();
}

const reset = () => {
  //console.log("reset");
  count = 0;
  rednerCounterApp();
}



const appRoot = document.getElementById('app');



const rednerCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}> +1 </button>
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}> RESET </button>

    </div >
  );
  ReactDOM.render(templateTwo, appRoot);

};

rednerCounterApp(); */