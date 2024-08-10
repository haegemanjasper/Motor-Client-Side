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
} from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../context/auth-context"; // Zorg ervoor dat dit pad klopt

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useAuth(); // Verkrijg de token uit je context

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
                console.log("API Response:", response.data); // Log de response om te controleren

                // Verwerk de respons correct
                if (response.data && Array.isArray(response.data.items)) {
                    setCustomers(response.data.items);
                } else {
                    throw new Error(
                        "Unexpected response format: No 'items' key or not an array"
                    );
                }
            } catch (err) {
                console.error("Error fetching customers:", err); // Log volledige fout
                setError("Failed to fetch customers. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCustomers();
    }, [token]); // Depend on token so it fetches again if token changes

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
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Text>No customers found</Text>
            )}
        </Box>
    );
};

export default Customers;
