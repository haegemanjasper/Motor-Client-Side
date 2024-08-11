import React from "react";
import { Heading, IconButton } from "@chakra-ui/react";
import { EditIcon, CheckIcon } from "@chakra-ui/icons";

const ProfileHeader = ({ isEditing, onToggleEdit }) => (
    <Heading mb={4} display="flex" alignItems="center">
        Profile
        <IconButton
            ml={4}
            icon={isEditing ? <CheckIcon /> : <EditIcon />}
            onClick={onToggleEdit}
            aria-label={isEditing ? "Save changes" : "Edit profile"}
        />
    </Heading>
);

export default ProfileHeader;
