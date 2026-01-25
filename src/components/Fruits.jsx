export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];

  return (
    <div>
      {fruits.map((fruit) => (
        <h1 key={fruit}>{fruit}</h1>
      ))}
    </div>
  );
}
