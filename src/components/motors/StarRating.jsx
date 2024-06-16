import { IoStarSharp } from "react-icons/io5";
import { useState } from "react";

const Star = ({ index, selected = false, onSelect = (f) => f }) => {
  const handleSelect = () => {
    onSelect(index + 1);
  };
  

  return (
    <IoStarSharp color={selected ? "red" : "grey"} onClick={handleSelect} />
  );
};

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate,
}) {
  const [rating, setRating] = useState(selectedStars);
  return (
    <>
      {[...new Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          index={i}
          selected={selectedStars > i}
          onSelect={onRate}
        />
      ))}{" "}
      <p>
        Rated {selectedStars} out of {totalStars} stars
      </p>
    </>
  );
}
