import React from "react";
import MotorDetail from "../src/components/motors/MotorDetails.jsx";
import { MOTOR_DATA } from "../src/api/mock_data.js";
import NavigatieBalk from "./components/NavigatieBalk/Navigatie.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <NavigatieBalk />
      {MOTOR_DATA.map((motor) => (
        <MotorDetail
          key={motor.id}
          id={motor.id}
          price={motor.price}
          name={motor.name}
          available={motor.available}
        />
      ))}
    </div>
  );
}
