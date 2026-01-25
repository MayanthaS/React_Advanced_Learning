export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];

  return (
    <div>
      {fruits.map((fruit) => (
        <ul>
          <li key={fruit}>{fruit}</li>
        </ul>
      ))}
    </div>
  );
}
