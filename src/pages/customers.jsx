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

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const { token } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:9000/api/klanten",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("API Response:", response.data);

                if (response.data && Array.isArray(response.data.items)) {
                    setCustomers(response.data.items);
                } else {
                    throw new Error(
                        "Unexpected response format: No 'items' key or not an array"
                    );
                }
            } catch (err) {
                console.error("Error fetching customers:", err);
                setError("Failed to fetch customers. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCustomers();
    }, [token]);

    const handleDeleteCustomer = async () => {
        if (!selectedCustomer) return;

        try {
            await axios.delete(
                `http://localhost:9000/api/klanten/${selectedCustomer.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Filter out the deleted customer from the list
            setCustomers(
                customers.filter(
                    (customer) => customer.id !== selectedCustomer.id
                )
            );
            onClose(); // Close the modal after successful deletion
        } catch (err) {
            console.error("Error deleting customer:", err);
            setError("Failed to delete customer. Please try again later.");
        }
    };

    const openConfirmationModal = (customer) => {
        setSelectedCustomer(customer);
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
            <Heading mb={4}>Customer List</Heading>
            {customers.length > 0 ? (
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>First Name</Th>
                            <Th>Email</Th>
                            <Th>Street</Th>
                            <Th>House Number</Th>
                            <Th>Postal Code</Th>
                            <Th>City</Th>
                            <Th>Actions</Th> {/* New column for actions */}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {customers.map((customer) => (
                            <Tr key={customer.id}>
                                <Td>{customer.naam}</Td>
                                <Td>{customer.voornaam}</Td>
                                <Td>{customer.email}</Td>
                                <Td>{customer.straat}</Td>
                                <Td>{customer.huisnummer}</Td>
                                <Td>{customer.postcode}</Td>
                                <Td>{customer.stad}</Td>
                                <Td>
                                    <IconButton
                                        icon={<DeleteIcon />}
                                        colorScheme="red"
                                        aria-label="Delete customer"
                                        onClick={() =>
                                            openConfirmationModal(customer)
                                        }
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Text>No customers found</Text>
            )}

            {/* Confirmation Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm Deletion</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Are you sure you want to delete this customer?
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="red"
                            mr={3}
                            onClick={handleDeleteCustomer}
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

export default Customers;
