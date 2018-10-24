/* class Human extends React.Component {
  render() {
    return (
      <div>
        <p>Hello</p>

      </div>
    )
  }

} */

const Fruit = (props) => {
  return (
    <p>This is {props.name} and costs $5</p>
  )
}

const Food = () => {
  return (
    <p>This is food and costs $10</p>
  )
}


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Here is the total {this.props.number}</h1>
        <Fruit name="banana" />
        <Fruit name="cherry" />
        <Fruit />
        <Food />
      </div>
    )
  }
}


/* ReactDOM.render(<Human />, document.getElementById('root')); */


ReactDOM.render(<App />, document.getElementById('root'));

