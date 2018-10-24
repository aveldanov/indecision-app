
//VisibilityToggle - render, constructor, handleToggleVisibility
//visibility -->False




class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }



  handleToggleVisibility() {
    //console.log('test');
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }

    })
  }



  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
        {this.state.visibility && (
          <div>
            <p>This is text</p>
          </div>)
        }

      </div>
    )
  }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



/* const appRoot = document.getElementById('app');

let visibility = false;
const toggleVisibility = () => {
  visibility = !visibility;
  render()

};


const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "show details"}
      </button>
      {visibility && (
        <div>
          <p>
            Here is some text
          </p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render(); */















/* console.log('All good');



const app = {
  clicked: true,
  index: 1
}


const onVisible = () => {
  app.index = app.index * (-1);
  if (app.index > 0) {
    app.clicked = false;
    console.log("Visible worked");
    console.log(app.clicked);
  } else {
    app.clicked = true;
    console.log("Visible worked 2");
    console.log(app.clicked);
  }

  render();
}



const appRoot = document.getElementById('app');




const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onVisible}>{app.clicked === true ? "Hide details" : "Show details"}</button>
      {app.clicked === true ? <p>Here are some details</p> : ''}

    </div >


  );
  ReactDOM.render(template, appRoot);

}
render(); */