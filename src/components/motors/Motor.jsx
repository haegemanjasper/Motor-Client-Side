import React, { useState, useEffect, useContext } from "react";
import {
    Box,
    Image,
    Text,
    VStack,
    Button,
    IconButton,
    Input,
    Select,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import imageMap from "../../assets/imageMap";
import RatingStars from "../../components/motors/RatingStars";
import { useAuth } from "../../context/auth-context";
import { ShopContext } from "../../context/shop-context";

const Motor = ({ motor, onDelete, onEdit }) => {
    const { isAdmin } = useAuth();
    const { cartItems, addToCart } = useContext(ShopContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isAlertOpen,
        onOpen: onAlertOpen,
        onClose: onAlertClose,
    } = useDisclosure();
    const toast = useToast();
    const [editedMotor, setEditedMotor] = useState({ ...motor });
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        if (isOpen) {
            const now = new Date();
            const isoDateTime = now.toISOString();
            setCurrentDateTime(isoDateTime);
        }
    }, [isOpen]);

    if (!motor) return null;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedMotor({
            ...editedMotor,
            [name]: value,
        });
    };

    const handleEdit = () => {
        const updatedMotor = {
            ...editedMotor,
            beschikbaarheid: editedMotor.beschikbaarheid ? true : false,
            huurprijs_per_dag: parseFloat(editedMotor.huurprijs_per_dag) || 0,
            datum: currentDateTime,
            rating: parseInt(editedMotor.rating, 10) || 0,
            merk: editedMotor.merk || "",
            model: editedMotor.model || "",
        };

        onEdit(updatedMotor);
        onClose();
    };

    const handleDelete = () => {
        onDelete();
        onAlertClose();
    };

    const handleAddToCart = () => {
        if (!motor.beschikbaarheid) {
            toast({
                title: "Motor niet beschikbaar",
                description: "Deze motor is momenteel niet beschikbaar.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            addToCart(motor.id);
        }
    };

    const prijsPerDag = parseFloat(motor.huurprijs_per_dag).toFixed(2);
    const imageSrc = imageMap[motor.merk] || motor.image;

    return (
        <Box
            textAlign="center"
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            mb={4}
            bg="white"
            boxShadow="md"
            maxW="300px"
            minH="400px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="relative"
        >
            {isAdmin && (
                <Box
                    position="absolute"
                    top="2"
                    right="2"
                    display="flex"
                    gap={2}
                >
                    <IconButton
                        icon={<FaTimes />}
                        size="sm"
                        colorScheme="red"
                        onClick={onAlertOpen}
                    />
                    <IconButton
                        icon={<FaPencilAlt />}
                        size="sm"
                        colorScheme="blue"
                        onClick={onOpen}
                    />
                </Box>
            )}
            <Image
                src={imageSrc}
                alt={motor.model}
                boxSize="250px"
                objectFit="cover"
                borderRadius="md"
                mb={1}
            />
            <VStack
                spacing="2"
                align="start"
                textAlign="left"
                flexGrow={1}
                p={4}
            >
                <Text fontWeight="bold" fontSize="lg">
                    {motor.merk}
                </Text>
                <Text fontSize="md">{motor.model}</Text>
                <Text fontSize="md">Price per day: €{prijsPerDag}</Text>
                <Text
                    fontSize="md"
                    color={motor.beschikbaarheid ? "green.500" : "red.500"}
                    fontWeight="bold"
                >
                    {motor.beschikbaarheid ? "Available" : "Not Available"}
                </Text>
                <RatingStars rating={motor.rating} />
            </VStack>
            {!isAdmin && (
                <Button
                    colorScheme="blue"
                    mt={4}
                    onClick={handleAddToCart}
                    isDisabled={
                        cartItems[motor.id] > 0 || !motor.beschikbaarheid
                    }
                >
                    {cartItems[motor.id] > 0 ? "In Cart" : "Add To Cart"}
                </Button>
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Motor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            placeholder="Merk"
                            value={editedMotor.merk}
                            isReadOnly
                            mb={4}
                            fontWeight="bold"
                        />
                        <Input
                            name="model"
                            placeholder="Model"
                            value={editedMotor.model}
                            onChange={handleChange}
                            mb={4}
                        />
                        <Input
                            name="huurprijs_per_dag"
                            placeholder="Price per day"
                            type="number"
                            value={editedMotor.huurprijs_per_dag}
                            onChange={handleChange}
                            mb={4}
                        />
                        <Input
                            placeholder="Date and Time"
                            type="text"
                            value={
                                currentDateTime
                                    ? new Date(currentDateTime).toLocaleString()
                                    : ""
                            }
                            isReadOnly
                            mb={4}
                            fontWeight="bold"
                        />
                        <Input
                            placeholder="Rating"
                            type="text"
                            value={editedMotor.rating || "Not Set"}
                            isReadOnly
                            mb={4}
                            fontWeight="bold"
                        />
                        <Select
                            placeholder="Select availability"
                            value={editedMotor.beschikbaarheid ? "1" : "0"}
                            onChange={(e) =>
                                setEditedMotor({
                                    ...editedMotor,
                                    beschikbaarheid: e.target.value === "1",
                                })
                            }
                            mb={4}
                        >
                            <option value="1">Available</option>
                            <option value="0">Not Available</option>
                        </Select>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleEdit}>
                            Save
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <AlertDialog isOpen={isAlertOpen} onClose={onAlertClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>Confirm Deletion</AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure you want to delete this motor? This
                            action cannot be undone.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme="red" onClick={handleDelete}>
                                Delete
                            </Button>
                            <Button variant="ghost" onClick={onAlertClose}>
                                Cancel
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    );
};

export default Motor;
