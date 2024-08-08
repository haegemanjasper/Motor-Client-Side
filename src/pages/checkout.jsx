import React, { useContext, useState } from "react";
import {
    Flex,
    Box,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartSummary from "../components/shop/cart-summary";
import { ShopContext } from "../context/shop-context";

export default function Checkout() {
    const navigate = useNavigate();
    const shopContext = useContext(ShopContext);
    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        billingAddress: "",
        city: "",
        country: "",
        state: "",
        zip: "",
        email: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid(formData)) {
            return;
        }

        localStorage.setItem("userEmail", formData.email);

        navigate("/confirmation");
        shopContext.clearCart();
    };

    const isFormValid = (formData) => {
        return Object.entries(formData).every(([key, value]) => {
            if (
                ["cardNumber", "expiryMonth", "expiryYear", "zip"].includes(key)
            ) {
                return /^\d+$/.test(value.trim());
            }
            return value.trim() !== "";
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const shouldShowError = (field) => {
        return formSubmitted && (!formData[field] || !isFieldValid(field));
    };

    const isFieldValid = (field) => {
        const value = formData[field];
        if (
            ["cardNumber", "expiryMonth", "expiryYear", "zip"].includes(field)
        ) {
            return /^\d+$/.test(value.trim());
        }
        return value.trim() !== "";
    };

    return (
        <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems="flex-start"
            minHeight="100vh"
        >
            <Box
                as="form"
                onSubmit={handleSubmit}
                maxWidth="600px"
                width="100%"
                p="4"
                borderWidth="1px"
                borderRadius="lg"
                mt="4"
                marginTop="2rem"
                marginLeft="10rem"
            >
                <FormControl mb="4" isInvalid={shouldShowError("name")}>
                    <FormLabel>Name on Card</FormLabel>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jaak de Draak"
                    />
                    <FormErrorMessage>
                        Please fill in this field
                    </FormErrorMessage>
                </FormControl>
                <FormControl mb="4" isInvalid={shouldShowError("cardNumber")}>
                    <FormLabel>Card Number</FormLabel>
                    <Input
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                    />
                    <FormErrorMessage>
                        Please fill in this field
                    </FormErrorMessage>
                </FormControl>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem colSpan={1}>
                        <FormControl
                            mb="4"
                            isInvalid={shouldShowError("expiryMonth")}
                        >
                            <FormLabel>Expiry Month</FormLabel>
                            <Input
                                name="expiryMonth"
                                value={formData.expiryMonth}
                                onChange={handleInputChange}
                                placeholder="MM"
                            />
                            <FormErrorMessage>
                                Please fill in this field
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl
                            mb="4"
                            isInvalid={shouldShowError("expiryYear")}
                        >
                            <FormLabel>Expiry Year</FormLabel>
                            <Input
                                name="expiryYear"
                                value={formData.expiryYear}
                                onChange={handleInputChange}
                                placeholder="YYYY"
                            />
                            <FormErrorMessage>
                                Please fill in this field
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>
                </Grid>
                <FormControl
                    mb="4"
                    isInvalid={shouldShowError("billingAddress")}
                >
                    <FormLabel>Billing Address</FormLabel>
                    <Input
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleInputChange}
                        placeholder="123 Street Name"
                    />
                    <FormErrorMessage>
                        Please fill in this field
                    </FormErrorMessage>
                </FormControl>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem colSpan={1}>
                        <FormControl mb="4" isInvalid={shouldShowError("city")}>
                            <FormLabel>City</FormLabel>
                            <Input
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                            />
                            <FormErrorMessage>
                                Please fill in this field
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl
                            mb="4"
                            isInvalid={shouldShowError("country")}
                        >
                            <FormLabel>Country</FormLabel>
                            <Input
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                placeholder="Country"
                            />
                            <FormErrorMessage>
                                Please fill in this field
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>
                </Grid>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem colSpan={1}>
                        <FormControl
                            mb="4"
                            isInvalid={shouldShowError("state")}
                        >
                            <FormLabel>State</FormLabel>
                            <Input
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="State"
                            />
                            <FormErrorMessage>
                                Please fill in this field
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl mb="4" isInvalid={shouldShowError("zip")}>
                            <FormLabel>ZIP</FormLabel>
                            <Input
                                name="zip"
                                value={formData.zip}
                                onChange={handleInputChange}
                                placeholder="ZIP"
                            />
                            <FormErrorMessage>
                                Please fill in this field
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>
                </Grid>
                <FormControl mb="4" isInvalid={shouldShowError("email")}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@example.com"
                    />
                    <FormErrorMessage>
                        Please fill in this field
                    </FormErrorMessage>
                </FormControl>
                <Button colorScheme="red" width="full" type="submit">
                    Submit
                </Button>
            </Box>
            <CartSummary />
        </Flex>
    );
}
