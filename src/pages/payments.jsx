import React, { useState, useEffect } from "react";
import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../context/auth-context";
import Loading from "../components/loadingAndErrors/Loading";
import Error from "../components/loadingAndErrors/Error";
import PaymentsTable from "../components/payments/PaymentsTable";
import ConfirmationModal from "../components/payments/ConfirmationModal";

const Payments = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const { token } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get(`${API_URL}/betalingen`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data && Array.isArray(response.data.items)) {
                    setPayments(response.data.items);
                } else {
                    throw new Error("Unexpected response format");
                }
            } catch (err) {
                setError("Failed to fetch payments. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, [token]);

    const handleDeletePayment = async () => {
        if (!selectedPayment) return;

        try {
            await axios.delete(`${API_URL}/betalingen/${selectedPayment.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPayments(
                payments.filter((payment) => payment.id !== selectedPayment.id)
            );
            onClose();
        } catch (err) {
            setError("Failed to delete payment. Please try again later.");
        }
    };

    const openConfirmationModal = (payment) => {
        setSelectedPayment(payment);
        onOpen();
    };

    return (
        <Box p={4}>
            <Heading mb={4}>Payments</Heading>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error message={error} />
            ) : (
                <PaymentsTable
                    payments={payments}
                    onDelete={openConfirmationModal}
                />
            )}
            <ConfirmationModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={handleDeletePayment}
            />
        </Box>
    );
};

export default Payments;
