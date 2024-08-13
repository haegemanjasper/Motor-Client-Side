import React, { useState } from "react";
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
    Text,
    Box,
} from "@chakra-ui/react";

const CreateLocationModal = ({
    isOpen,
    onClose,
    newLocation,
    setNewLocation,
    handleCreateLocation,
}) => {
    const [formError, setFormError] = useState("");

    const validateFields = () => {
        const { naam, straat, huisnummer, postcode, stad } = newLocation;
        if (!naam || !straat || !huisnummer || !postcode || !stad) {
            setFormError("All fields are required.");
            return false;
        }
        setFormError("");
        return true;
    };

    const handleClickCreate = () => {
        if (validateFields()) {
            handleCreateLocation();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent data-cy="create-location-modal">
                <ModalHeader>Create New Location</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            data-cy="input-name"
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
                            data-cy="input-street"
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
                            data-cy="input-house-number"
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
                            data-cy="input-postal-code"
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
                            data-cy="input-city"
                            value={newLocation.stad}
                            onChange={(e) =>
                                setNewLocation({
                                    ...newLocation,
                                    stad: e.target.value,
                                })
                            }
                        />
                    </FormControl>
                    {formError && (
                        <Box mt={4}>
                            <Text color="red.500">{formError}</Text>
                        </Box>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button
                        data-cy="create-button"
                        colorScheme="blue"
                        mr={3}
                        onClick={handleClickCreate}
                    >
                        Create
                    </Button>
                    <Button data-cy="cancel-button" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CreateLocationModal;
