import React from "react";
import StarRating from "../components/starRating.jsx";

const Motors = ({ id, name, image, price, available, rating }) => {
  return (
    <div className="card bg-light border-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <img
          src={image}
          alt={name}
          className="motor-image"
          style={{ maxWidth: "250px", maxHeight: "250px" }}
        />
        <p>Price: {price}</p>
        <p>Available: {available ? "Yes" : "No"}</p>
        <StarRating selectedStars={rating} readOnly={true} />
      </div>
    </div>
  );
};

export default Motors;
