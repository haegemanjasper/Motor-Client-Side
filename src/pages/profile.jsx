import React, { useState } from "react";
import { Box, Heading, Input, Button, Stack } from "@chakra-ui/react";
import { useAuth } from "../context/auth-context";

const ProfilePage = () => {
    const { klant, updateProfile } = useAuth();
    const [formData, setFormData] = useState({
        naam: klant?.naam || "",
        voornaam: klant?.voornaam || "",
        email: klant?.email || "",
        straat: klant?.straat || "",
        huisnummer: klant?.huisnummer || "",
        postcode: klant?.postcode || "",
        stad: klant?.stad || "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        try {
            const success = await updateProfile(klant.id, formData);
            if (success) {
                console.log("Profile updated");
            }
        } catch (error) {
            console.error("Failed to update profile", error);
        }
    };

    return (
        <Box p={4}>
            <Heading>Profile</Heading>
            <form onSubmit={handleProfileSubmit}>
                <Stack spacing={3}>
                    <Input
                        id="naam"
                        value={formData.naam}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <Input
                        id="voornaam"
                        value={formData.voornaam}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <Input
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <Input
                        id="straat"
                        value={formData.straat}
                        onChange={handleChange}
                        placeholder="Street"
                    />
                    <Input
                        id="huisnummer"
                        type="number"
                        value={formData.huisnummer}
                        onChange={handleChange}
                        placeholder="House number"
                    />
                    <Input
                        id="postcode"
                        type="number"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="Postcode"
                    />
                    <Input
                        id="stad"
                        value={formData.stad}
                        onChange={handleChange}
                        placeholder="City"
                    />
                    <Button type="submit" colorScheme="blue">
                        Update Profile
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default ProfilePage;
