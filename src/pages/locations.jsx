import React, { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Button,
    Spinner,
    Text,
    Alert,
    AlertIcon,
    useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../context/auth-context";
import LocationTable from "../components/location/LocationTable";
import CreateLocationModal from "../components/location/CreateLocationModal";
import DeleteLocationModal from "../components/location/DeleteLocationModal";
import { useNavigate } from "react-router-dom";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [newLocation, setNewLocation] = useState({
        naam: "",
        straat: "",
        huisnummer: "",
        postcode: "",
        stad: "",
    });
    const { token, isAdmin } = useAuth();
    const {
        isOpen: isCreateOpen,
        onOpen: onCreateOpen,
        onClose: onCreateClose,
    } = useDisclosure();
    const {
        isOpen: isDeleteOpen,
        onOpen: onDeleteOpen,
        onClose: onDeleteClose,
    } = useDisclosure();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin) {
            navigate("/forbidden");
            return;
        }

        const fetchLocations = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:9000/api/huurlocaties",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                if (response.data && Array.isArray(response.data.items)) {
                    setLocations(response.data.items);
                } else {
                    throw new Error("Unexpected response format");
                }
            } catch (err) {
                console.error("Error fetching locations:", err);
                if (err.response && err.response.status === 403) {
                    navigate("/forbidden");
                } else {
                    setError(
                        "Failed to fetch locations. Please try again later."
                    );
                }
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, [token, navigate, isAdmin]);

    const handleDeleteLocation = async () => {
        if (!selectedLocation) return;
        try {
            await axios.delete(
                `http://localhost:9000/api/huurlocaties/${selectedLocation.id}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setLocations(
                locations.filter((loc) => loc.id !== selectedLocation.id)
            );
            onDeleteClose();
        } catch (err) {
            console.error("Error deleting location:", err);
            setError("Failed to delete location. Please try again later.");
        }
    };

    const handleCreateLocation = async () => {
        try {
            const response = await axios.post(
                "http://localhost:9000/api/huurlocaties",
                newLocation,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setLocations([...locations, response.data]);
            setNewLocation({
                naam: "",
                straat: "",
                huisnummer: "",
                postcode: "",
                stad: "",
            });
            onCreateClose();
        } catch (err) {
            console.error("Error creating location:", err);
            setError("Failed to create location. Please try again later.");
        }
    };

    const openCreateModal = () => {
        setNewLocation({
            naam: "",
            straat: "",
            huisnummer: "",
            postcode: "",
            stad: "",
        });
        onCreateOpen();
    };

    const openDeleteModal = (location) => {
        setSelectedLocation(location);
        onDeleteOpen();
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
            <Button colorScheme="blue" mb={4} onClick={openCreateModal}>
                + Create New Location
            </Button>
            {locations.length > 0 ? (
                <LocationTable
                    locations={locations}
                    onDelete={openDeleteModal}
                />
            ) : (
                <Text>No locations found</Text>
            )}
            <CreateLocationModal
                isOpen={isCreateOpen}
                onClose={onCreateClose}
                newLocation={newLocation}
                setNewLocation={setNewLocation}
                handleCreateLocation={handleCreateLocation}
            />
            <DeleteLocationModal
                isOpen={isDeleteOpen}
                onClose={onDeleteClose}
                handleDeleteLocation={handleDeleteLocation}
            />
        </Box>
    );
};

export default Locations;
