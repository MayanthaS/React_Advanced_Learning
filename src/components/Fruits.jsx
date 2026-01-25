export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];

  return (
    <div>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </div>
  );
}
