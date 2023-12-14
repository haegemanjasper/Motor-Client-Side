import React from "react";
import { IoStarSharp } from "react-icons/io5";

const Star = ({ selected = false }) => {
  return <IoStarSharp color={selected ? "red" : "grey"} />;
};

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  return (
    <>
      {[...new Array(totalStars)].map((_, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}{" "}
      <p>
        Rated {selectedStars} out of {totalStars} stars
      </p>
    </>
  );
}
