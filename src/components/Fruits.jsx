export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    {
      name: "Apple",
      price: "10",
    },
    {
      name: "Banana",
      price: "20",
    },
    {
      name: "Orange",
      price: "30",
    },
    {
      name: "PineApple",
      price: "25",
    },
  ];

  return (
    <div>
      {fruits.map((fruits) => (
        <ul key={fruits}>
          <li>
            {fruits.name} :${fruits.price}
          </li>
        </ul>
      ))}
    </div>
  );
}
