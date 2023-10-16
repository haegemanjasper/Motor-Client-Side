import React from "react";

const MotorDetail = ({ id, available, price, name }) => {
  const availableCheck = available ? "Ja" : "Nee";
  const imageSource = `../src/images/motor${id}.png`;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img src={imageSource} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Verhuurprijs / dag:</strong> €{price}
          </p>
          <p className="card-text">
            <strong>Nog beschikbaar:</strong> {availableCheck}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotorDetail;
