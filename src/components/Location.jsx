import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

// later met backend koppelen

const Location = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Locations
      </Heading>
      <Text>
        Welcome to our routes page! Here, you can find information about
        exciting motorcycle routes that you can explore. Whether you're a
        seasoned rider or a beginner, there's a route for everyone.
      </Text>
      {/* You can add more content here, such as images and details about locations */}
    </Box>
  );
};

export default Location;
