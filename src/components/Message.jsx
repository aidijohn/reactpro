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
