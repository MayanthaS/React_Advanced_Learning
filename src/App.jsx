import Hello from "./components/Hello";

function App() {
  const SeatNumbers = [1, 4, 7];
  return (
    <div className="App">
      <Hello name="Mayantha" message="Hi there!" SeatNumbers={SeatNumbers} />
    </div>
  );
}

export default App;
