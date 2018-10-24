const Fruit = (props) => {
  return (
    <p>This is {props.name} and costs $5</p>
  )
}



class App extends React.Component {
  state = {
    fruits: [
      { name: "apple" },

      { name: 'apple2' },

      { name: "apple3" }
    ],
    clickedCount: 0

  }
  itemClicked() {
    const newCount = this.state.clickedCount + 1
    this.setState({
      clickedCount: newCount
    })
  }

  render() {
    return (
      <div>
        <h1>Here is the total {this.props.number}</h1>
        <button onClick={this.itemClicked}>Click me</button>

        {this.state.fruits.map((item, index) => {
          return <Fruit key={index} name={item.name} clickedCount={clickedCount} />
        })}

      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

