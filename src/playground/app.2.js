
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running');

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



const user = {
  name: "Anton",
  age: 24,
  location: "London"
}




function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;//nothing showing in JSX
  }
}


const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}

    {/*     <p>Age: {user.age}</p>
 */}    {/*     <p>Location: {getLocation(user.location)}</p>*/}
    {getLocation(user.location)}
  </div>
);


const appRoot = document.getElementById('app');

//JSX and element reference
ReactDOM.render(template, appRoot);