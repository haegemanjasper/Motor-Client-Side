import React from "react";
import { Stack, Input, Button } from "@chakra-ui/react";

const ProfileForm = ({ formData, handleChange, isEditing, onSubmit }) => (
    <form onSubmit={onSubmit}>
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
                <Button
                    type="submit"
                    colorScheme="blue"
                    data-cy="update-profile-button"
                >
                    Update Profile
                </Button>
            )}
        </Stack>
    </form>
);

export default ProfileForm;
