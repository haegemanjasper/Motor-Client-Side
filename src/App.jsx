import MotorItem from "./components/motors/MotorItem";
import { MOTOR_DATA } from "./api/mock_data";
import PlacesList from "./components/places/PlacesList";

function App() {
  return (
    <div className="App">
      {MOTOR_DATA.map((motor) => (
        <MotorItem {...motor} />
      ))}
      <PlacesList />
    </div>
  );
}

export default App;
