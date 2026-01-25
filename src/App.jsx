import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Mayantha",
    message: "Hi Friends",
    SeatNumbers: [1, 4, 4],
  };
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
