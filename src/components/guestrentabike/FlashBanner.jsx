import React from "react";
import { Box, Text } from "@chakra-ui/react";

const FlashBanner = () => (
    <Box
        position="absolute"
        top={10}
        left={10}
        width="120px"
        height="120px"
        bg="orange.500"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        p={4}
        zIndex={1}
        borderRadius="lg"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
        transform="rotate(-15deg)"
    >
        <Text
            fontSize="sm"
            fontWeight="bold"
            textTransform="uppercase"
            transform="rotate(-10deg)"
        >
            Start Your Journey Now!
        </Text>
    </Box>
);

export default FlashBanner;
