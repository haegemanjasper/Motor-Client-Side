import React, { useState } from "react";
import {
    Box,
    Heading,
    Input,
    Button,
    Stack,
    IconButton,
    useToast,
} from "@chakra-ui/react";
import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/auth-context";

const ProfilePage = () => {
    const { klant, updateProfile } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        naam: klant?.naam || "",
        voornaam: klant?.voornaam || "",
        email: klant?.email || "",
        straat: klant?.straat || "",
        huisnummer: klant?.huisnummer || "",
        postcode: klant?.postcode || "",
        stad: klant?.stad || "",
    });
    const toast = useToast();

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

                toast({
                    title: "Profile updated.",
                    description:
                        "Your profile information has been updated successfully.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });

                setIsEditing(false);
            }
        } catch (error) {
            console.error("Failed to update profile", error);

            toast({
                title: "Update failed.",
                description: "There was an error updating your profile.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Heading mb={4} display="flex" alignItems="center">
                Profile
                <IconButton
                    ml={4}
                    icon={isEditing ? <CheckIcon /> : <EditIcon />}
                    onClick={() => setIsEditing(!isEditing)}
                    aria-label={isEditing ? "Save changes" : "Edit profile"}
                />
            </Heading>
            <form onSubmit={handleProfileSubmit}>
                <Stack spacing={3}>
                    <Input
                        id="naam"
                        value={formData.naam}
                        onChange={handleChange}
                        placeholder="Name"
                        isReadOnly={!isEditing}
                    />
                    <Input
                        id="voornaam"
                        value={formData.voornaam}
                        onChange={handleChange}
                        placeholder="First Name"
                        isReadOnly={!isEditing}
                    />
                    <Input
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        isReadOnly={!isEditing}
                    />
                    <Input
                        id="straat"
                        value={formData.straat}
                        onChange={handleChange}
                        placeholder="Street"
                        isReadOnly={!isEditing}
                    />
                    <Input
                        id="huisnummer"
                        type="number"
                        value={formData.huisnummer}
                        onChange={handleChange}
                        placeholder="House number"
                        isReadOnly={!isEditing}
                    />
                    <Input
                        id="postcode"
                        type="number"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="Postcode"
                        isReadOnly={!isEditing}
                    />
                    <Input
                        id="stad"
                        value={formData.stad}
                        onChange={handleChange}
                        placeholder="City"
                        isReadOnly={!isEditing}
                    />
                    {isEditing && (
                        <Button type="submit" colorScheme="blue">
                            Update Profile
                        </Button>
                    )}
                </Stack>
            </form>
        </Box>
    );
};

export default ProfilePage;
