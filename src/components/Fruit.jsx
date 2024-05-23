export default function Fruit({ name, price, available, emoji }) {
  return (
    <>
      {price > 10 ? (
        <>
          {emoji} {name} {price} {available ? "available" : ""}
        </>
      ) : (
        ""
      )}
    </>
  );
}
