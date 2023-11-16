import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import StarRating from "../components/starRating.jsx";

const Motors = ({ id, name, image, price, available, rating }) => {
  return (
    <Box width="25%" padding="4">
      <Flex direction="column" align="center">
        <Box mb="3">
          <h5>{name}</h5>
        </Box>
        <Box mb="3">
          <img
            src={image}
            alt={name}
            style={{ maxWidth: "250px", maxHeight: "250px" }}
          />
        </Box>
        <Box mb="3">
          <p>Price: {price}</p>
          <p>Available: {available ? "Yes" : "No"}</p>
          <StarRating selectedStars={rating} readOnly={true} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Motors;
