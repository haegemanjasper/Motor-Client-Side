import React from "react";
import { Box, Heading, Text, HStack, Image, VStack } from "@chakra-ui/react";
import Image1 from "../images/aboutusfoto1.jpg";
import Image2 from "../images/aboutusfoto2.jpeg";
import Image3 from "../images/aboutusfoto3.jpg";

const AboutUs = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        About Us
      </Heading>
      <VStack align="start" spacing={4}>
        <Text fontSize="xl">
          Welcome to our motorcycle community! At [Outlaw Road Warriors], we are
          more than just a rental service – we are enthusiasts, adventurers, and
          passionate riders who want to share the thrill of the open road with
          you.
        </Text>
        <Text fontSize="xl">
          Our goal is to provide a unique experience by offering not only
          high-quality motorbike rentals but also unforgettable touring guides.
          Imagine exploring scenic routes, navigating through winding roads, and
          discovering hidden gems—all with the freedom of riding your dream
          motorcycle.
        </Text>
        <HStack spacing={4} boxShadow="lg" borderRadius="md" overflow="hidden">
          <VStack align="start">
            <Image src={Image1} alt="Image 1" width="500px" height="500px" />
            <Text fontWeight="bold" fontSize="lg">
              Himalayas
            </Text>
            <Text>Instructor: Jasper</Text>
            <Text>11/23/2023</Text>
            <Text>Asia</Text>
          </VStack>
          <VStack align="start">
            <Image src={Image2} alt="Image 2" width="500px" height="500px" />
            <Text fontWeight="bold" fontSize="lg">
              Lake Garda
            </Text>
            <Text>Instructor: Jasper</Text>
            <Text>09/25/2022</Text>
            <Text>Italy</Text>
          </VStack>
          <VStack align="start">
            <Image src={Image3} alt="Image 3" width="500px" height="500px" />
            <Text fontWeight="bold" fontSize="lg">
              Mount Buconig
            </Text>
            <Text>Instructor: Jasper</Text>
            <Text>10/28/2021</Text>
            <Text>Slovenia</Text>
          </VStack>
        </HStack>
        <Text fontSize="xl">
          Connect with us for more updates and information! You can check us out
          on the buttons below.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
