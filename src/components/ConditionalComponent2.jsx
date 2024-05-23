//Element Variables

export default function ConditionalComponent2() {
  let message;

  const display = true;

  if (display) {
    message = <h1>This is a true case!</h1>;
  } else {
    message = <h1>This is a false case!</h1>;
  }
  return message;

  //Using ternary operator, also better
  //const display = true;

  //return display ? <h1>Message 1</h1> : <h1>Message 2</h1>; //can change to components
}
