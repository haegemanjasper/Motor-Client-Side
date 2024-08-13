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
} from "@chakra-ui/react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Confirm Deletion</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Are you sure you want to delete this customer?
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onConfirm}>
                    Delete
                </Button>
                <Button colorScheme="blue" onClick={onClose}>
                    Cancel
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);

export default ConfirmationModal;
