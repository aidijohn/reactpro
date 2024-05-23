//Created props, passed in independent items, person object

App.jsx
.......

import Hello from "./components/Hello";

function App() {
//const seatNumbers = [2, 5, 4]; //pass array to props ..dd1

//pass object to props
const person = {
name: "Kev",
message: "How is you Kev?",
emoji: "smiley",
seatNumbers: [2, 5, 4],
}

return (

<div className="App">

      <Hello
        // name="Sammy"                 ..dd1
        // message="How is you Sam?"
        // emoji="smiley"
        // seatNumbers={seatNumbers}

        person={person}
      />

    </div>

);
}

export default App;

Hello.jsx
.........
const name = "John";

function displayMessage() {
return "wow!";
}

//function Hello({ name, message, emoji, seatNumbers }) { ..dd1
function Hello(props) {
//console.log(props)

//const {name, message} = props; //destructuring props
//best way is to change function Hello(props) to function Hello({name, message})

return (

<div>
<h1>
Hello from a component. My name is {name}. Sum is {10 + 20}.{" "}
</h1>

      {/* <h3>Hello {props.name} {props.message}</h3> */}

      {/* <h3>Hello {emoji} {name} {message} {seatNumbers}</h3> */}

      {props.person.name} {props.person.emoji}, {props.person.message} {props.person.seatNumbers}

      <h2>{displayMessage()}</h2>
    </div>

);
}

export default Hello;

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//Destsuctre with the person object

Hello.jsx
.........

function Hello({ person }) {

return (

<div>
<h4>
{person.name} {person.emoji}, {person.message} {person.seatNumbers}
</h4>
</div>
);
}

export default Hello;

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const prices = [10, 20, 30, 40]

prices.map(price =>console.log(price)) //map prices, display per single price using callback

..............
do 10% for each
const prices = [10, 20, 30, 40]

const discounts = prices.map(price => price\*10/100) //map prices, display per single price using callback

console.log(discounts)

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//Rendering Array of Lists
//So that it doesn't look like a string
//loop thru Array of fruits using a list

export default function Fruits() {
return <div></div>;
}

export default function Fruits() {
const fruits = ["Orange", "Banana", "Mango", "Pineapple"];
//Map ->Special JavaScript function which allows you to loop a List in JavaScript

    // prices.map(price => console.log(price)); //=> is a callback function.  //DISPLAY THE PRICES

    // const discounts = prices.map(price => price * 32 / 100) //((price) =>   --also okay

    //     console.log(discounts);

    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>    //unique key for each fruit, we've given {fruit}
                ))}
            </ul>
        </div>
    )

}
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//Array of objects
function Fruits() {
//const fruits = ["Banana", "Orange", "Apple", "Pineapple"];

const fruits = [
{ name: "Mango", price: 10, emoji: "🥭" },
{ name: "Banana", price: 8, emoji: "🍌" },
{ name: "Apple", price: 7, emoji: "🍎" },
{ name: "Pineapple", price: 30, emoji: "🍍" },
{ name: "Orange", price: 15, emoji: "🍊" },
];

return (

<div>
<ul>
{fruits.map((fruit) => (
<li key={fruit.name}>
{fruit.emoji} {fruit.name} Ksh {fruit.price}
</li>
))}
</ul>
</div>
);
}

export default Fruits;

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//Fruit Component

Fruits.jsx
..........
import Fruit from "./Fruit";

function Fruits() {
//const fruits = ["Banana", "Orange", "Apple", "Pineapple"];

const fruits = [
{ name: "Mango", price: 10, emoji: "🥭" },
{ name: "Banana", price: 8, emoji: "🍌" },
{ name: "Apple", price: 7, emoji: "🍎" },
{ name: "Pineapple", price: 30, emoji: "🍍" },
{ name: "Orange", price: 15, emoji: "🍊" },
];

return (

<div>
<ul>
{fruits.map((fruit) => (
<Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
))}
</ul>
</div>
);
}

export default Fruits;

Fruit.jsx
.........
export default function Fruit({ emoji, price, name }) {
return (

<div>
<li>
{emoji} {name} {price}
</li>
</div>
);
}

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//How Conditional Rendering could be done using ternaries and jsx

jdfiddle
........
let isHappy = false

let message = isHappy? "I am happy" : "I am not happy"

console.log(message)

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//Conditional Rendering List Items
<> </> //Fragments --If we do not want to use any other element. For istance using <div></div>
displays those divs on each <li> item when viewed on the console.

Fruits.jsx
...........
import Fruit from "./Fruit";

function Fruits() {
//const fruits = ["Banana", "Orange", "Apple", "Pineapple"];

const fruits = [
{ name: "Mango", price: 4, emoji: "🥭", soldOut: true },
{ name: "Banana", price: 3, emoji: "🍌", soldOut: false },
{ name: "Apple", price: 7, emoji: "🍎", soldOut: true },
{ name: "Pineapple", price: 30, emoji: "🍍", soldOut: false },
{ name: "Orange", price: 15, emoji: "🍊", soldOut: false },
];

return (

<div>
<ul>
{fruits.map((fruit) => (
<Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          />
))}
</ul>
</div>
);
}

export default Fruits;

Fruit.jsx
.........
export default function Fruit({ emoji, price, name, soldOut }) {
return (
<>
{/_ {emoji} {name} {price} _/}

      {price > 5 ? (
        <li>
          {emoji} {name} {price} {soldOut ? "soldOut" : ""}
        </li>
      ) : (
        ""
      )}
    </>

);
}

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//Event Handling in React
onclick --> JavaScript
onClick --> JSX

<button onClick={handleClick}>Click me</button> //Right way to call onClick
<button onClick={handleClick()}>Click me</button> //This will call the function even if the button has not been clicked.

export default function Message() {
function handleClick() {
console.log("Button has been clicked");
}

return (

<div>
<button onClick={handleClick}>Click me</button>
</div>
);
}

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//States in React

State - An object that holds information to control behaviour of a component. - An object which is going to hold the data which is related to its specific component. - Whenever the data changes, we also want to change the behaviour of the component as well.

Why use states?
i). Props are immutable --Data inside the props cannot be changed.
ii). Values which can change dyamically.

Props vs State

1. Props are passed to the component. -State is already contained inside the component.
2. Props are immutable/ cannot change -State can be changed.
3. Props are like parameters passed to a function -State is like a variable declared in function body.

-Whenever any state variable changes, the whole component re-renders.
-In order to create a state variable, we use a useState hook.

const [count, setCount] = useState(); //count -> state variable, setCount ->A function which will change the count variable.

const [count, setCount] = useState(0); //sets the initial value of count to be zero.

General rule in React is that a state of a component should be declared above the component.

//CounterState.jsx
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
