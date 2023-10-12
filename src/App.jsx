import React from "react";
import MotorDetail from "../src/components/motors/MotorDetails.jsx";
import { MOTOR_DATA } from "../src/api/mock_data.js";
import "./App.css";

export default function App() {
  return (
    <div className="container">
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
