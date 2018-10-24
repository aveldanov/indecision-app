
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('app.js is running');

const app = {
  title: "itsa a title",
  subtitle: "subtitle",
  options: ['One', 'Two', 'Three']

}

//JSX - JavaScript XML

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options: " + app.options : "No options"}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>

  </div>
);

const addOne = () => {
  console.log("addOne Fired!");
}

const minusOne = () => {
  console.log("minusOne");
}

const reset = () => {
  console.log("reset");
}

let count = 0;
const someId = "myidhere";
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}> +1 </button>
    <button onClick={minusOne}> -1 </button>
    <button onClick={reset}> RESET </button>

  </div >
);
//Challenge
//Button: "-1" -setup minusOne func and log minusOne every time it clicks
//Make "reser" button -> reset func

console.log(templateTwo);





const appRoot = document.getElementById('app');

//JSX and element reference
ReactDOM.render(templateTwo, appRoot);