import React, { useCallback } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useTheme } from "@chakra-ui/react";

const Star = ({ index, selected = false, onSelect = (f) => f }) => {
  const handleClick = useCallback(() => {
    onSelect(index + 1);
  }, [index, onSelect]);

  const theme = useTheme();
  const starColor = selected
    ? theme.colors.yellow[500]
    : theme.colors.gray[500];

  return (
    <IoStarSharp
      color={starColor}
      onClick={handleClick}
      style={{ cursor: "pointer", margin: "auto" }}
    />
  );
};

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "0",
        textAlign: "center",
      }}
    >
      {[...new Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          index={i}
          selected={selectedStars > i}
          onSelect={onRate}
        />
      ))}
    </div>
  );
}
