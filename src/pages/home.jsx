import React from "react";
import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import CustomCarousel from "../components/banner/customCarousel.jsx";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <CustomCarousel />
            <Box bg="gray.100" py={12} textAlign="center" px={4}>
                <Container maxW="container.md">
                    <Heading as="h2" size="lg" mb={4}>
                        Discover Your Perfect Ride
                    </Heading>
                    <Text fontSize="lg" mb={6}>
                        Whether you're looking for the latest models or classic
                        favorites, our collection of motorcycles has something
                        for everyone. Explore our range and find the perfect
                        bike to match your style and needs.
                    </Text>
                    <Button
                        colorScheme="teal"
                        size="lg"
                        onClick={() => navigate("/rentabike")}
                    >
                        Explore Now
                    </Button>
                </Container>
            </Box>
        </div>
    );
}
