import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
    Button,
} from "@chakra-ui/react";

const LoginRequiredModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Login Required</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text mb={4}>
                    You need to be logged in to rent a bike. Please log in or
                    register to proceed.
                </Text>
                <Button colorScheme="blue" onClick={onClose}>
                    Close
                </Button>
            </ModalBody>
        </ModalContent>
    </Modal>
);

export default LoginRequiredModal;
