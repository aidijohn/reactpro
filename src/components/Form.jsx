import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSubmit(e) {
    //accepts the event from the below
    e.preventDefault(); //prevent the default reloading when button gets pressed
    console.log(name);
  }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })} //...name ->(Spread operator) take whatever content is in the name state & add then add firstName to it.
          type="text"
          value={name.firstName}
        />

        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />

        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
