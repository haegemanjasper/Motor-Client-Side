import React, { useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useAuth } from "../context/auth-context";
import ProfileForm from "../components/profile/ProfileForm";
import ProfileHeader from "../components/profile/ProfileHeader";

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
        try {
            const success = await updateProfile(klant.id, formData);
            if (success) {
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
            <ProfileHeader
                isEditing={isEditing}
                onToggleEdit={() => setIsEditing(!isEditing)}
            />
            <ProfileForm
                formData={formData}
                handleChange={handleChange}
                isEditing={isEditing}
                onSubmit={handleProfileSubmit}
            />
        </Box>
    );
};

export default ProfilePage;
