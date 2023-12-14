import React from "react";
import { ChakraProvider, Box, Heading, Text, VStack } from "@chakra-ui/react";
import theme from "./customTheme.js";
import IntroText from "./components/Introduction";
import SlideShow from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import MotorList from "./components/MotorList";

export const Home = () => (
  <div>
    <ChakraProvider theme={theme}>
      <IntroText />
      <SlideShow />
      <Footer />
    </ChakraProvider>
  </div>
);

export const Routes = () => (
  <div>
    <ChakraProvider theme={theme}>
      <Box p={4}>
        <h1>Routes</h1>
        <Text>
          Welcome to our routes page! Here, you can find information about
          exciting motorcycle routes that you can explore. Whether you're a
          seasoned rider or a beginner, there's a route for everyone.
        </Text>
      </Box>
      <Footer />
    </ChakraProvider>
  </div>
);

export const About = () => (
  <ChakraProvider theme={theme}>
    <Box p={4}>
      <Heading as="h1" mb={4}>
        About Us
      </Heading>
      <VStack align="start" spacing={4}>
        <Text fontSize="xl">
          Welcome to our motorcycle community! We are passionate riders who love
          to share our experiences and knowledge with fellow enthusiasts.
        </Text>
        <Text fontSize="xl">
          Our goal is to create a platform where riders can connect, discover
          new routes, and share their stories. Whether you're a beginner or an
          experienced rider, we invite you to be part of our community.
        </Text>
      </VStack>
    </Box>
    <Footer />
  </ChakraProvider>
);

export const Contact = () => (
  <ChakraProvider theme={theme}>
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Contact Us
      </Heading>
      <VStack align="start" spacing={4}>
        <Text fontSize="xl">
          We'd love to hear from you! If you have any questions, suggestions, or
          just want to say hello, feel free to reach out to us.
        </Text>
        <Text fontSize="xl">Email: info@motorcyclecommunity.com</Text>
        <Text fontSize="xl">Phone: +1 (555) 123-4567</Text>
      </VStack>
    </Box>
    <Footer />
  </ChakraProvider>
);

export const Models = () => (
  <div>
    <h1>Models</h1>
    <MotorList />
  </div>
);

export const NotFound = () => (
  <ChakraProvider theme={theme}>
    <Box p={8} textAlign="center">
      <Heading as="h1" mb={4}>
        Page Not Found
      </Heading>
      <Text fontSize="xl" mb={4}>
        There is no page at this URL. You can go back to the{" "}
        <Link href="/">homepage</Link> or visit one of our other pages.
      </Text>
    </Box>
    <Footer />
  </ChakraProvider>
);
