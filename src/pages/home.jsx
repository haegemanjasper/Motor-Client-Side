import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import CustomCarousel from "../components/banner/customCarousel.jsx";
import { useAuth } from "../context/auth-context";

const Home = () => {
    const { klant, isAdmin } = useAuth(); // Haal de rol van de gebruiker op

    // Bepaal de welkomsttekst op basis van de rol van de gebruiker
    const welcomeMessage = isAdmin
        ? `Welcome Admin ${klant?.voornaam || ""}!`
        : klant
        ? `Welcome ${klant.voornaam || ""}!`
        : "Welcome to our website!";

    const welcomeDescription = isAdmin
        ? "As an admin, you have access to manage the entire system. Navigate to the admin dashboard for more options."
        : klant
        ? "Explore our services and manage your profile from your account."
        : "Discover a range of motorcycles that suit your style and needs. Enjoy browsing through our collection!";

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <CustomCarousel />
            <Box bg="gray.100" py={12} textAlign="center" px={4} flex="1">
                <Container maxW="container.md">
                    <Heading as="h2" size="lg" mb={4}>
                        {welcomeMessage}
                    </Heading>
                    <Text fontSize="lg" mb={6}>
                        {welcomeDescription}
                    </Text>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
