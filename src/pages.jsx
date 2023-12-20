import React from "react";
import { ChakraProvider, Box, Heading, Flex } from "@chakra-ui/react";
import theme from "./customTheme.js";
import IntroText from "./components/Introduction";
import SlideShow from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import NotFoundPage from "./components/NotFound.jsx";
import ContactUs from "./components/Contact.jsx";
import AboutUs from "./components/About.jsx";
import Location from "./components/Location.jsx";
import MotorList from "./components/MotorList";
import LoginPage from "./components/Login.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

export const Home = () => (
  <div>
    <ChakraProvider theme={theme}>
      <IntroText />
      <SlideShow />
      <Footer />
    </ChakraProvider>
  </div>
);

export const Locations = () => (
  <div>
    <ChakraProvider theme={theme}>
      <Location />
      <Footer />
    </ChakraProvider>
  </div>
);

export const About = () => (
  <ChakraProvider theme={theme}>
    <AboutUs />
    <Footer />
  </ChakraProvider>
);

export const Contact = () => {
  return (
    <ChakraProvider theme={theme}>
      <ContactUs />
      <Footer />
    </ChakraProvider>
  );
};

export const Models = () => (
  <ChakraProvider theme={theme}>
    <Box p={4}>
      <Heading as="h1" mb={1}>
        Models
      </Heading>
      <Flex flexWrap="wrap">
        <MotorList />
      </Flex>
    </Box>
    <Footer />
  </ChakraProvider>
);

export const Login = () => (
  <ChakraProvider theme={theme}>
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <Box flex="1">
        <Heading as="h1" mb={2}>
          Login
        </Heading>
        <LoginPage />
      </Box>
    </Flex>
    <Footer />
  </ChakraProvider>
);

export const Cart = () => (
  <ChakraProvider theme={theme}>
    <Flex direction="column" align="left" minH="100vh">
      <Box flex="1">
        <Heading as="h1" mb={1}>
          Winkelmand
        </Heading>
        <ShoppingCart />
      </Box>
    </Flex>
    <Footer />
  </ChakraProvider>
);

export const NotFound = () => (
  <ChakraProvider theme={theme}>
    <NotFoundPage />
    <Footer />
  </ChakraProvider>
);
