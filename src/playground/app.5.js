
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('app.js is running');

const app = {
  title: "itsa a title",
  subtitle: "subtitle",
  options: []

};
//JSX - JavaScript XML
const onFormSubmit = (e) => {
  e.preventDefault(); //stops full page refresh
  console.log('form submited');
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ''; //clear the form
    render();

  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
}


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];




const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options: " + app.options : "No options"}</p>
      <p>{app.options.length}</p>
      <button type="submit" onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) =>
            <li key={option}>Option: {option}</li>
          )
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render(); //render initial application

