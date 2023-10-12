import Transaction from "./components/transactions/Transaction";
import MOTOR_DATA from "./api/mock_data";

function App() {
  //const motor = MOTOR_DATA[0];
  return (
    <div className="App">
      {MOTOR_DATA.map((motor) => (
        <Transaction {...motor} />
      ))}
    </div>
  );
}

export default App;
