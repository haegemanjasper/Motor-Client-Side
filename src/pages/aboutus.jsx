import React from "react";
import { Box, Heading, Text, Container, Stack } from "@chakra-ui/react";

export default function AboutUsPage() {
    return (
        <Box bg="gray.100" py={10}>
            <Container maxW="container.md">
                <Box textAlign="center" mb={10}>
                    <Heading as="h1" size="2xl" mb={6}>
                        About Us
                    </Heading>
                    <Text fontSize="lg" color="gray.700">
                        We are a passionate team dedicated to providing the best
                        products and services to our customers. Our mission is
                        to deliver quality and excellence in everything we do.
                    </Text>
                </Box>
                <Stack spacing={8} align="center">
                    <Box
                        p={6}
                        bg="white"
                        shadow="md"
                        borderRadius="md"
                        textAlign="center"
                    >
                        <Heading as="h2" size="lg" mb={4}>
                            Our Vision
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            Our vision is to be the leading provider of
                            innovative solutions that enrich the lives of our
                            customers. We strive to continuously improve and
                            stay ahead of the curve in our industry.
                        </Text>
                    </Box>
                    <Box
                        p={6}
                        bg="white"
                        shadow="md"
                        borderRadius="md"
                        textAlign="center"
                    >
                        <Heading as="h2" size="lg" mb={4}>
                            Our Values
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            We believe in integrity, commitment, and excellence.
                            Our team is dedicated to upholding these values in
                            every aspect of our work, ensuring that we provide
                            the highest level of service and satisfaction to our
                            clients.
                        </Text>
                    </Box>
                    <Box
                        p={6}
                        bg="white"
                        shadow="md"
                        borderRadius="md"
                        textAlign="center"
                    >
                        <Heading as="h2" size="lg" mb={4}>
                            Meet the Team
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            Our team is made up of skilled professionals who
                            bring a wealth of experience and passion to their
                            work. Get to know the individuals behind our success
                            and learn about their unique contributions to our
                            mission.
                        </Text>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
