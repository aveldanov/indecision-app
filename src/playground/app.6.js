
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('app.js is running');

const app = {
  title: "Indecision App",
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


const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app');





const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options: " + app.options : "No options"}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
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

