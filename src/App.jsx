import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/customTheme.js";
import Navigatiebar from "./components/Navigatiebar.jsx";
import IntroText from "./components/Introduction.jsx";
import SlideShow from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigatiebar />
      <IntroText />
      <SlideShow />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
