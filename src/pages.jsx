import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Navigatiebar from "./components/Navigatiebar";
import MotorList from "./components/MotorList";

export const Home = () => (
  <div>
    <Navigatiebar />
    <h1>Home</h1>
    <LoremIpsum p={2} />
  </div>
);

export const Routes = () => (
  <div>
    <Navigatiebar />
    <h1>Routes</h1>
    <LoremIpsum p={2} />
  </div>
);

export const About = () => (
  <div>
    <Navigatiebar />
    <h1>Over ons</h1>
    <LoremIpsum p={2} />
  </div>
);

export const Contact = () => (
  <div>
    <Navigatiebar />
    <h1>Contact</h1>
    <LoremIpsum p={2} />
  </div>
);

export const Models = () => (
  <div>
    <Navigatiebar />
    <h1>Models</h1>
    <MotorList />
    <LoremIpsum p={2} />
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
