import React, { useState, useEffect } from "react";
import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import Loading from "../components/payments/Loading";
import Error from "../components/payments/Error";
import CustomersTable from "../components/customer/CustomersTable";
import ConfirmationModal from "../components/customer/ConfirmationModal";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const { token, isAdmin } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin) {
            navigate("/forbidden");
            return;
        }

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
                    throw new Error("Unexpected response format");
                }
            } catch (err) {
                console.error("Error fetching customers:", err);
                if (err.response && err.response.status === 403) {
                    navigate("/forbidden");
                } else {
                    setError(
                        "Failed to fetch customers. Please try again later."
                    );
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCustomers();
    }, [token, navigate, isAdmin]);

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
            setCustomers(
                customers.filter(
                    (customer) => customer.id !== selectedCustomer.id
                )
            );
            onClose();
        } catch (err) {
            console.error("Error deleting customer:", err);
            setError("Failed to delete customer. Please try again later.");
        }
    };

    const openConfirmationModal = (customer) => {
        setSelectedCustomer(customer);
        onOpen();
    };

    return (
        <Box p={4}>
            <Heading mb={4}>Customer List</Heading>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error message={error} />
            ) : (
                <CustomersTable
                    customers={customers}
                    onDelete={openConfirmationModal}
                />
            )}
            <ConfirmationModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={handleDeleteCustomer}
            />
        </Box>
    );
};

export default Customers;
