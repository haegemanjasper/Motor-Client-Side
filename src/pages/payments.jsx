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

const Payments = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const { token, isAdmin } = useAuth(); // Veronderstel dat je ook admin status hebt
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:9000/api/betalingen",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // Log de volledige response om de structuur te inspecteren
                console.log("API Response:", response.data);

                if (response.data && Array.isArray(response.data.items)) {
                    setPayments(response.data.items);
                } else {
                    throw new Error("Unexpected response format");
                }
            } catch (err) {
                console.error("Error fetching payments:", err);
                setError("Failed to fetch payments. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, [token, isAdmin]);

    const handleDeletePayment = async () => {
        if (!selectedPayment) return;

        try {
            await axios.delete(
                `http://localhost:9000/api/betalingen/${selectedPayment.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Filter out the deleted payment from the list
            setPayments(
                payments.filter((payment) => payment.id !== selectedPayment.id)
            );
            onClose(); // Close the modal after successful deletion
        } catch (err) {
            console.error("Error deleting payment:", err);
            setError("Failed to delete payment. Please try again later.");
        }
    };

    const openConfirmationModal = (payment) => {
        setSelectedPayment(payment);
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
            <Heading mb={4}>Payments</Heading>
            {payments.length > 0 ? (
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Location</Th>
                            <Th>Amount</Th>
                            <Th>Payment Method</Th>
                            <Th>Date</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {payments.map((payment) => (
                            <Tr key={payment.id}>
                                <Td>{payment.huurlocatieNaam || "Unknown"}</Td>{" "}
                                {/* Verander huurlocatieId naar huurlocatieNaam */}
                                <Td>{payment.bedrag}</Td>
                                <Td>{payment.betaalmethode}</Td>
                                <Td>
                                    {new Date(
                                        payment.datum
                                    ).toLocaleDateString()}
                                </Td>
                                <Td>
                                    <IconButton
                                        icon={<DeleteIcon />}
                                        colorScheme="red"
                                        aria-label="Delete payment"
                                        onClick={() =>
                                            openConfirmationModal(payment)
                                        }
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Text>No payments found</Text>
            )}

            {/* Confirmation Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm Deletion</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Are you sure you want to delete this payment?
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="red"
                            mr={3}
                            onClick={handleDeletePayment}
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

export default Payments;
