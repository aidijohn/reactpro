import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, available: true, emoji: "🍎" },
    { name: "Orange", price: 15, available: true, emoji: "🍊" },
    { name: "Banana", price: 20, available: false, emoji: "🍌" },
    { name: "Pineapple", price: 50, available: true, emoji: "🍍" },
    { name: "Grapes", price: 30, available: true, emoji: "🍇" },
  ];

  return (
    <div>
      <ol>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            <Fruit
              emoji={fruit.emoji}
              name={fruit.name}
              price={fruit.price}
              available={fruit.available}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
