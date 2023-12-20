import React, { useCallback } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useTheme } from "@chakra-ui/react";
import customTheme from "../../src/customTheme";

const Star = ({ index, selected = false, onSelect = (f) => f }) => {
  const handleClick = useCallback(() => {
    onSelect(index + 1);
  }, [index, onSelect]);

  const theme = useTheme();
  const starColor = selected
    ? theme.colors.yellow[500]
    : theme.colors.gray[500];

  return <IoStarSharp color={starColor} onClick={handleClick} />;
};

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate,
}) {
  const theme = useTheme();
  const starRatingColor =
    selectedStars > 0 ? theme.colors.yellow[500] : theme.colors.gray[500];

  return (
    <>
      {[...new Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          index={i}
          selected={selectedStars > i}
          onSelect={onRate}
        />
      ))}
      <p style={{ color: starRatingColor }}>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
