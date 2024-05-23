const firstname = "John";

function secondName() {
  return "Odhis";
}
function Hello({ person }) {
  return (
    <div>
      {person.emoji} {person.name} {person.gender} {person.message}{" "}
      {person.seatNumbers}
    </div>
  );
}

export default Hello;
