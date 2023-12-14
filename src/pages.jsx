import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Button,
  Input,
  Select,
  Textarea,
  FormLabel,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
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

export const Contact = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    collectionPoint: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        inquiryType: "",
        collectionPoint: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      onOpen(); // Open the verification pop-up
    }, 2000);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={4}>
        <Heading as="h1" mb={4}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack align="start" spacing={2}>
            <FormLabel mb={0}>
              <Text fontWeight="bold">I have a question about...</Text>
            </FormLabel>
            <Select
              name="inquiryType"
              placeholder=""
              value={formData.inquiryType}
              onChange={handleChange}
              isRequired
            >
              <option value="reservation">Reservation</option>
              <option value="product">Motor</option>
              <option value="contract">Contract</option>
              <option value="location">Location</option>
              <option value="general">General</option>
              <option value="invoices">Invoices</option>
            </Select>
            <FormLabel mb={0}>
              <Text fontWeight="bold">Select a collection point</Text>
            </FormLabel>
            <Select
              name="collectionPoint"
              placeholder="Select a collection point"
              value={formData.collectionPoint}
              onChange={handleChange}
            >
              <option value="pointA">Collection Point A</option>
              <option value="pointB">Collection Point B</option>
              <option value="pointC">Collection Point C</option>
            </Select>
            <FormLabel mb={0}>
              <Text fontWeight="bold">First name</Text>
            </FormLabel>
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              isRequired
            />
            <FormLabel mb={0}>
              <Text fontWeight="bold">Last name</Text>
            </FormLabel>
            <Input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              isRequired
            />
            <FormLabel mb={0}>
              <Text fontWeight="bold">Email address</Text>
            </FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              isRequired
            />
            <FormLabel mb={0}>
              <Text fontWeight="bold">Telephone number</Text>
            </FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Telephone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              isRequired
            />
            <FormLabel mb={0}>
              <Text fontWeight="bold">Message</Text>
            </FormLabel>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              isRequired
            />
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
              loadingText="Submitting"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>

      {/* Verification AlertDialog */}
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Form Submitted!
          </AlertDialogHeader>
          <AlertDialogBody>
            Thank you for submitting the form. We will get back to you soon.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="blue" onClick={onClose} ml={3}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </ChakraProvider>
  );
};

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
