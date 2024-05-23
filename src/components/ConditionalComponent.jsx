import Condition1 from "./Condition1";
import Condition2 from "./Condition2";

export default function ConditionalComponent() {
  const display = true;

  //   if (display) {
  //     return (
  //       <div>
  //         <h3>This is conditional component</h3>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h3>Code everyday!</h3>
  //       </div>
  //     );
  //   }

  //Rendering Component classes using condition
  if (display) {
    return <Condition1 />;
  } else {
    return <Condition2 />;
  }

  //Using element variables to render jsx and avoid double returns ConditionalComponent2
}
