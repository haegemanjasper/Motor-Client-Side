import React, { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Spinner,
    Text,
    Alert,
    AlertIcon,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../context/auth-context";
import { DeleteIcon } from "@chakra-ui/icons";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const { token } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:9000/api/huurlocaties",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("API Response:", response.data);

                if (response.data && Array.isArray(response.data.items)) {
                    setLocations(response.data.items);
                } else {
                    throw new Error(
                        "Unexpected response format: No 'items' key or not an array"
                    );
                }
            } catch (err) {
                console.error("Error fetching locations:", err);
                setError("Failed to fetch locations. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, [token]);

    const handleDeleteLocation = async () => {
        if (!selectedLocation) return;

        try {
            await axios.delete(
                `http://localhost:9000/api/huurlocaties/${selectedLocation.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setLocations(
                locations.filter(
                    (location) => location.id !== selectedLocation.id
                )
            );
            onClose();
        } catch (err) {
            console.error("Error deleting location:", err);
            setError("Failed to delete location. Please try again later.");
        }
    };

    const openConfirmationModal = (location) => {
        setSelectedLocation(location);
        onOpen();
    };

    if (loading) {
        return (
            <Box p={4} textAlign="center">
                <Spinner size="lg" />
                <Text mt={4}>Loading...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box p={4} textAlign="center">
                <Alert status="error">
                    <AlertIcon />
                    {error}
                </Alert>
            </Box>
        );
    }

    return (
        <Box p={4}>
            <Heading mb={4}>Location List</Heading>
            {locations.length > 0 ? (
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Street</Th>
                            <Th>House Number</Th>
                            <Th>Postal Code</Th>
                            <Th>City</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {locations.map((location) => (
                            <Tr key={location.id}>
                                <Td>{location.naam}</Td>
                                <Td>{location.straat}</Td>
                                <Td>{location.huisnummer}</Td>
                                <Td>{location.postcode}</Td>
                                <Td>{location.stad}</Td>
                                <Td>
                                    <IconButton
                                        icon={<DeleteIcon />}
                                        colorScheme="red"
                                        aria-label="Delete location"
                                        onClick={() =>
                                            openConfirmationModal(location)
                                        }
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Text>No locations found</Text>
            )}

            {/* Confirmation Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm Deletion</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Are you sure you want to delete this location?
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="red"
                            mr={3}
                            onClick={handleDeleteLocation}
                        >
                            Delete
                        </Button>
                        <Button colorScheme="blue" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Locations;
