import React from "react";
import { Box, Heading, Text, VStack, Button, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" mb={4} fontSize="4xl" color="red.500">
        Oops! Page Not Found
      </Heading>
      <Text fontSize="xl" mb={6} color="gray.600">
        The page you are looking for might have been moved, deleted, or does not
        exist.
      </Text>
      <VStack spacing={4}>
        <Link href="/" textDecoration="none">
          <Button colorScheme="teal" variant="outline">
            Go to Homepage
          </Button>
        </Link>
        <Text fontSize="lg" color="gray.500">
          Or explore some of our other pages:
        </Text>
        <Link href="/locations" textDecoration="underline">
          Locations
        </Link>
        <Link href="/about" textDecoration="underline">
          About Us
        </Link>
        <Link href="/contact" textDecoration="underline">
          Contact
        </Link>
      </VStack>
    </Box>
  );
}
