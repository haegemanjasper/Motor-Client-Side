import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= i + 1) {
            stars.push(
                <Icon key={i} as={FaStar} color="yellow.400" fontSize="20px" />
            );
        } else if (rating > i && rating < i + 1) {
            stars.push(
                <Icon
                    key={i}
                    as={FaStarHalfAlt}
                    color="yellow.400"
                    fontSize="20px"
                />
            );
        } else {
            stars.push(
                <Icon
                    key={i}
                    as={FaRegStar}
                    color="yellow.400"
                    fontSize="20px"
                />
            );
        }
    }
    return (
        <Box display="flex" justifyContent="center" mt={2}>
            {stars}
        </Box>
    );
};

export default RatingStars;
