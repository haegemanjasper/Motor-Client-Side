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
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

const CreateLocationModal = ({
    isOpen,
    onClose,
    newLocation,
    setNewLocation,
    handleCreateLocation,
}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Create New Location</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        value={newLocation.naam}
                        onChange={(e) =>
                            setNewLocation({
                                ...newLocation,
                                naam: e.target.value,
                            })
                        }
                    />
                    <FormLabel>Street</FormLabel>
                    <Input
                        value={newLocation.straat}
                        onChange={(e) =>
                            setNewLocation({
                                ...newLocation,
                                straat: e.target.value,
                            })
                        }
                    />
                    <FormLabel>House Number</FormLabel>
                    <Input
                        type="number"
                        value={newLocation.huisnummer}
                        onChange={(e) =>
                            setNewLocation({
                                ...newLocation,
                                huisnummer: e.target.value,
                            })
                        }
                    />
                    <FormLabel>Postal Code</FormLabel>
                    <Input
                        type="number"
                        value={newLocation.postcode}
                        onChange={(e) =>
                            setNewLocation({
                                ...newLocation,
                                postcode: e.target.value,
                            })
                        }
                    />
                    <FormLabel>City</FormLabel>
                    <Input
                        value={newLocation.stad}
                        onChange={(e) =>
                            setNewLocation({
                                ...newLocation,
                                stad: e.target.value,
                            })
                        }
                    />
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={handleCreateLocation}
                >
                    Create
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);

export default CreateLocationModal;
