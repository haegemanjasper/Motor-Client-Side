import React from "react";
import { Box, Heading, Text, HStack, Image, VStack } from "@chakra-ui/react";
import LoremIpsum from "react-lorem-ipsum";

const AboutUs = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        About Us
      </Heading>
      <VStack align="start" spacing={4}>
        <Text fontSize="xl">
          <LoremIpsum></LoremIpsum>
        </Text>
        <Text fontSize="xl">
          <LoremIpsum></LoremIpsum>
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
