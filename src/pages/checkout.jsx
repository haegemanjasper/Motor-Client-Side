import React, { useContext, useState, useEffect } from "react";
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
    Select,
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
        zip: "",
        email: "",
        paymentMethod: "Visa",
        location: "",
    });
    const [locations, setLocations] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchLocations = async () => {
            const authToken = localStorage.getItem("jwtToken");

            if (!authToken) {
                setError(new Error("No auth token found"));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    "http://localhost:9000/api/huurlocaties",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${authToken}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data && Array.isArray(data.items)) {
                    setLocations(data.items);
                } else {
                    console.error("Unexpected data structure:", data);
                }
            } catch (error) {
                setError(error);
                console.error("Error fetching locations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    useEffect(() => {
        setTotalAmount(shopContext.getTotalCartAmount());
    }, [shopContext]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid(formData)) {
            return;
        }

        const authToken = localStorage.getItem("jwtToken");

        if (!authToken) {
            setError(new Error("No auth token found"));
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:9000/api/betalingen",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                    body: JSON.stringify({
                        bedrag: totalAmount,
                        betaalmethode: formData.paymentMethod,
                        datum: new Date().toISOString(),
                        huurlocatieId: Number(formData.location),
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Opslaan van het e-mailadres in localStorage
            localStorage.setItem("userEmail", formData.email);

            navigate("/confirmation");
            shopContext.clearCart();
        } catch (error) {
            setError(error);
            console.error("Error submitting payment:", error);
        }
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

    if (loading) return <p>Loading locations...</p>;
    if (error) return <p>Error: {error.message}</p>;

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
                        placeholder="Jan Jansens"
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
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@example.com"
                    />
                    <FormErrorMessage>
                        Please fill in this field
                    </FormErrorMessage>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Payment Method</FormLabel>
                    <Select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                    >
                        <option value="Visa">Visa</option>
                        <option value="Bancontact">Bancontact</option>
                        <option value="PayPal">PayPal</option>
                    </Select>
                </FormControl>
                <FormControl mb="4" isInvalid={shouldShowError("location")}>
                    <FormLabel>Location</FormLabel>
                    <Select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                    >
                        <option value="">Select a location</option>
                        {locations.map((location) => (
                            <option key={location.id} value={location.id}>
                                {location.naam}
                            </option>
                        ))}
                    </Select>
                    <FormErrorMessage>
                        Please select a location
                    </FormErrorMessage>
                </FormControl>
                <Button colorScheme="blue" type="submit">
                    Pay {totalAmount.toFixed(2)} EUR
                </Button>
            </Box>
            <CartSummary />
        </Flex>
    );
}
