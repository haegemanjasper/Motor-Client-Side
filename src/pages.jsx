import React from "react";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import theme from "./customTheme.js";
import IntroText from "./components/Introduction";
import SlideShow from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import NotFoundPage from "./components/NotFound.jsx";
import ContactUs from "./components/Contact.jsx";
import AboutUs from "./components/About.jsx";
import Location from "./components/Location.jsx";
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
      <MotorList />
    </Box>
    <Footer />
  </ChakraProvider>
);

export const NotFound = () => (
  <ChakraProvider theme={theme}>
    <NotFoundPage />
    <Footer />
  </ChakraProvider>
);
