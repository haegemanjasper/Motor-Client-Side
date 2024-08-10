import React, { useState, useContext } from "react";
import {
    Box,
    Input,
    Button,
    FormControl,
    FormLabel,
    Checkbox,
    useToast,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from "@chakra-ui/react";
import { ShopContext } from "../../context/shop-context";
import { useAuth } from "../../context/auth-context";

const CreateMotorForm = () => {
    const { createMotor } = useContext(ShopContext);
    const { isAdmin } = useAuth();
    const [motorData, setMotorData] = useState({
        merk: "",
        model: "",
        datum: "",
        huurprijs_per_dag: "",
        beschikbaarheid: false,
        rating: 0, // Initialize with 0
        image: "",
    });
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setMotorData({
            ...motorData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleRatingChange = (value) => {
        setMotorData({
            ...motorData,
            rating: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMotor(motorData);
            toast({
                title: "Motor created.",
                description: "The motor has been created successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setMotorData({
                merk: "",
                model: "",
                datum: "",
                huurprijs_per_dag: "",
                beschikbaarheid: false,
                rating: 0,
                image: "",
            });
            onClose();
        } catch (error) {
            toast({
                title: "Error.",
                description: "Failed to create motor.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    if (!isAdmin) {
        return null;
    }

    return (
        <>
            <Button onClick={onOpen} variant="ghost" colorScheme="blue">
                Create Motor
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create a New Motor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box
                            as="form"
                            onSubmit={handleSubmit}
                            p={4}
                            borderWidth={1}
                            borderRadius="md"
                        >
                            <FormControl mb={3}>
                                <FormLabel>Merk</FormLabel>
                                <Input
                                    type="text"
                                    name="merk"
                                    value={motorData.merk}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl mb={3}>
                                <FormLabel>Model</FormLabel>
                                <Input
                                    type="text"
                                    name="model"
                                    value={motorData.model}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl mb={3}>
                                <FormLabel>Datum</FormLabel>
                                <Input
                                    type="date"
                                    name="datum"
                                    value={motorData.datum}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl mb={3}>
                                <FormLabel>Huurprijs per Dag</FormLabel>
                                <Input
                                    type="number"
                                    name="huurprijs_per_dag"
                                    value={motorData.huurprijs_per_dag}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl mb={3}>
                                <FormLabel>Beschikbaarheid</FormLabel>
                                <Checkbox
                                    name="beschikbaarheid"
                                    isChecked={motorData.beschikbaarheid}
                                    onChange={handleChange}
                                >
                                    Beschikbaar
                                </Checkbox>
                            </FormControl>
                            <FormControl mb={3}>
                                <FormLabel>Rating</FormLabel>
                                <Slider
                                    aria-label="rating-slider"
                                    defaultValue={motorData.rating}
                                    min={0}
                                    max={5}
                                    step={1}
                                    onChange={handleRatingChange}
                                    value={motorData.rating}
                                >
                                    <SliderMark
                                        value={0}
                                        mt="1"
                                        ml="-2.5"
                                        fontSize="sm"
                                    >
                                        0
                                    </SliderMark>
                                    <SliderMark
                                        value={1}
                                        mt="1"
                                        ml="-2.5"
                                        fontSize="sm"
                                    >
                                        1
                                    </SliderMark>
                                    <SliderMark
                                        value={2}
                                        mt="1"
                                        ml="-2.5"
                                        fontSize="sm"
                                    >
                                        2
                                    </SliderMark>
                                    <SliderMark
                                        value={3}
                                        mt="1"
                                        ml="-2.5"
                                        fontSize="sm"
                                    >
                                        3
                                    </SliderMark>
                                    <SliderMark
                                        value={4}
                                        mt="1"
                                        ml="-2.5"
                                        fontSize="sm"
                                    >
                                        4
                                    </SliderMark>
                                    <SliderMark
                                        value={5}
                                        mt="1"
                                        ml="-2.5"
                                        fontSize="sm"
                                    >
                                        5
                                    </SliderMark>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </FormControl>
                            <FormControl mb={3}>
                                <FormLabel>Image</FormLabel>
                                <Input
                                    type="text"
                                    name="image"
                                    value={motorData.image}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" mt={4}>
                                Create Motor
                            </Button>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="gray" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateMotorForm;
