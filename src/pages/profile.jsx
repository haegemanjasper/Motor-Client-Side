import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../context/auth-context";

const ProfilePage = () => {
    const { klant } = useAuth();

    return (
        <Box p={4}>
            <Heading>Profile</Heading>
            {klant ? (
                <>
                    <Text>Name: {klant.naam}</Text>
                    <Text>Email: {klant.email}</Text>
                </>
            ) : (
                <Text>No user information available.</Text>
            )}
        </Box>
    );
};

export default ProfilePage;
