import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import MotorList from "./components/MotorList";
import theme from "./customTheme.js";
import { ChakraProvider } from "@chakra-ui/react";
import IntroText from "./components/Introduction";
import SlideShow from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";

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
    <h1>Routes</h1>
    <LoremIpsum p={2} />
  </div>
);

export const About = () => (
  <div>
    <h1>Over ons</h1>
    <LoremIpsum p={2} />
  </div>
);

export const Contact = () => (
  <div>
    <h1>Contact</h1>
    <LoremIpsum p={2} />
  </div>
);

export const Models = () => (
  <div>
    <h1>Models</h1>
    <MotorList />
  </div>
);

export const NotFound = () => {
  return (
    <div>
      <h1>Pagina niet gevonden</h1>
      <p>Er is geen pagina met op deze url, probeer iets anders.</p>
    </div>
  );
};
