
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running');

//create 'app' object->title/subtitle
//use title/subbtitle in the template
//render template

// only render the subtitle and p-tag if subtitle exists -> logical and operartor
//conditionally render new p-tag -> if options.length >0 "here are your options". otherwise - "no options"


var app = {
  title: "itsa a title",
  subtitle: "subtitle",
  options: ['One', 'Two', 'Three']

}

//JSX - JavaScript XML

var template = (
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






// Create new var templateTwo
// div h1 -> Anton
// p -> Age: 26
// p-> Location: Philly
// Render templateTwo instead of template
var user = {
  name: "Anton",
  age: 24,
  location: "London"
}


/* var userName = 'andre';
var userAge = 27;
var userLocation = "NYC"; */


function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;//nothing showing in JSX
  }
}


var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}

    {/*     <p>Age: {user.age}</p>
 */}    {/*     <p>Location: {getLocation(user.location)}</p>*/}
    {getLocation(user.location)}
  </div>
);


var appRoot = document.getElementById('app');

//JSX and element reference
ReactDOM.render(template, appRoot);