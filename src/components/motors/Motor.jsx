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
    useDisclosure as useAlertDisclosure,
} from "@chakra-ui/react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { ShopContext } from "../../context/shop-context";
import RatingStars from "../../components/motors/RatingStars";
import imageMap from "../../assets/imageMap";

const Motor = ({ motor, onAddToCart, onDelete, onEdit }) => {
    const { isAdmin } = useContext(ShopContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isAlertOpen,
        onOpen: onAlertOpen,
        onClose: onAlertClose,
    } = useAlertDisclosure();
    const [editedMotor, setEditedMotor] = useState({ ...motor });
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        setEditedMotor({ ...motor });
    }, [motor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedMotor((prev) => ({ ...prev, [name]: value }));
    };

    const handleEdit = () => {
        onEdit(editedMotor);
        onClose();
    };

    const handleDelete = () => {
        onDelete(motor.id);
        onAlertClose();
    };

    // Gebruik imageMap om de juiste afbeelding te krijgen
    const imageSrc = imageMap[motor.merk]; // Zorg voor een default image als geen match gevonden wordt
    const prijsPerDag = motor.huurprijs_per_dag;

    return (
        <Box borderWidth="1px" borderRadius="md" p={4} width="300px">
            {isAdmin && (
                <Box display="flex" justifyContent="space-between">
                    <IconButton
                        icon={<FaTimes />}
                        size="sm"
                        aria-label="Delete Motor"
                        onClick={onAlertOpen}
                    />
                    <IconButton
                        icon={<FaPencilAlt />}
                        size="sm"
                        aria-label="Edit Motor"
                        onClick={onOpen}
                    />
                </Box>
            )}
            <Image src={imageSrc} alt={motor.model} boxSize="200px" />
            <VStack spacing={3} mt={4} align="center">
                <Text fontWeight="bold">{motor.model}</Text>
                <Text>€{prijsPerDag} / dag</Text>
                <RatingStars rating={motor.rating} />
                {isAdmin ? (
                    <Button colorScheme="teal" onClick={onOpen}>
                        Edit
                    </Button>
                ) : (
                    <Button
                        colorScheme="blue"
                        onClick={() => onAddToCart(motor.id)}
                    >
                        Add to Cart
                    </Button>
                )}
            </VStack>

            {/* Edit Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Motor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            name="merk"
                            value={editedMotor.merk || ""}
                            onChange={handleChange}
                            placeholder="Merk"
                            mb={3}
                        />
                        <Input
                            name="model"
                            value={editedMotor.model || ""}
                            onChange={handleChange}
                            placeholder="Model"
                            mb={3}
                        />
                        <Input
                            name="huurprijs_per_dag"
                            type="number"
                            value={editedMotor.huurprijs_per_dag || ""}
                            onChange={handleChange}
                            placeholder="Huurprijs per dag"
                            mb={3}
                        />
                        <Select
                            name="beschikbaarheid"
                            value={
                                editedMotor.beschikbaarheid ? "true" : "false"
                            }
                            onChange={handleChange}
                            mb={3}
                        >
                            <option value="true">Beschikbaar</option>
                            <option value="false">Niet Beschikbaar</option>
                        </Select>
                        <Input
                            name="rating"
                            type="number"
                            value={editedMotor.rating || ""}
                            onChange={handleChange}
                            placeholder="Rating"
                            mb={3}
                        />
                        <Input
                            name="datum"
                            type="datetime-local"
                            value={currentDateTime}
                            onChange={(e) => setCurrentDateTime(e.target.value)}
                            mb={3}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={handleEdit}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Delete Confirmation Alert */}
            <AlertDialog isOpen={isAlertOpen} onClose={onAlertClose}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader>Confirm Delete</AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure you want to delete this motor?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button onClick={onAlertClose}>Cancel</Button>
                        <Button colorScheme="red" onClick={handleDelete} ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Box>
    );
};

export default Motor;
