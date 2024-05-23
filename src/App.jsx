import ConditionalComponent from "./components/ConditionalComponent";
import CounterState from "./components/CounterState";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  const seatNumbers = [10, 20, 30, 40];

  const person = {
    emoji: "👌",
    name: "John",
    gender: "male",
    message: "Yeah",
    seatNumbers: seatNumbers,
  };

  return (
    <div className="App">
      <Hello person={person} />

      <Form />
    </div>
  );
}

export default App;
