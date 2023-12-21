import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Select,
  Input,
  FormLabel,
  Textarea,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

const ContactUs = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      onOpen();
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Contact Us
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack align="start" spacing={4}>
          <FormLabel>
            <Text fontWeight="bold">I have a question about...</Text>
          </FormLabel>
          <Select
            name="inquiryType"
            placeholder="Select an option"
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

          <FormLabel>
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

          <FormLabel>
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

          <FormLabel>
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

          <FormLabel>
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

          <FormLabel>
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

          <FormLabel>
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
    </Box>
  );
};

export default ContactUs;
