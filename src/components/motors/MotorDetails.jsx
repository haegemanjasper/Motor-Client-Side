import React from "react";

const MotorDetail = ({ id, available, price, name }) => {
  const availableCheck = available ? "Ja" : "Nee";
  const imageSource = `../src/images/motor${id}.png`;

  return (
    <div className="Motor">
      <img src={imageSource} alt={name} />
      <p>
        <strong>Motortype:</strong> {name}
      </p>
      <p>
        <strong>Verhuurprijs / dag:</strong> €{price}
      </p>
      <p>
        <strong>Nog beschikbaar:</strong> {availableCheck}
      </p>
    </div>
  );
};

export default MotorDetail;
