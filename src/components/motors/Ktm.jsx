import React from "react";
import Motors from "./Motor.jsx";

import { KTM_DETAILS } from "../../api/mock_data.js";
import { useState } from "react";

const KtmDetails = () => {
  const [motorDetails, setMotorDetails] = useState(KTM_DETAILS);

  const handleRateMotorDetail = (id, rating) => {
    const newMotorDetails = motorDetails.map((motors) =>
      motors.id === id ? { ...motors, rating } : motors
    );
    setMotorDetails(newMotorDetails);
  };

  const handleAddMotorDetail = (id) => {
    const motorToAdd = KTM_DETAILS.find((motor) => motor.id === id);

    if (motorToAdd) {
      // Voeg de gevonden motor toe aan de lijst van motorDetails    -> word vervangen door winkelmandje later
      setMotorDetails((details) => [...details, motorToAdd]);
    } else {
      console.error("Motor niet gevonden");
    }
  };

  return (
    <div className="grid mt-4">
      <div className="row row-cols-1 row-cols-md-4 g-8">
        {motorDetails
          .sort((a, b) =>
            a.name.toUpperCase().localeCompare(b.name.toUpperCase())
          )
          .map((motors) => (
            <div className="col" key={motors.id}>
              <Motors
                {...motors}
                onRate={handleRateMotorDetail}
                onAdd={handleAddMotorDetail}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default KtmDetails;
