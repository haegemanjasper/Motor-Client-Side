import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Text,
} from "@chakra-ui/react";

const DeleteLocationModal = ({ isOpen, onClose, handleDeleteLocation }) => (
    <Modal isOpen={isOpen} onClose={onClose} data-cy="delete-location-modal">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Confirm Deletion</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>Are you sure you want to delete this location?</Text>
            </ModalBody>
            <ModalFooter>
                <Button
                    colorScheme="red"
                    mr={3}
                    onClick={handleDeleteLocation}
                    data-cy="confirm-delete-button"
                >
                    Delete
                </Button>
                <Button onClick={onClose} data-cy="cancel-delete-button">
                    Cancel
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);

export default DeleteLocationModal;
