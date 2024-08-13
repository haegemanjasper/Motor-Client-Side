import React from "react";
import {
    Grid,
    GridItem,
    Button,
    Select,
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
} from "@chakra-ui/react";
import FormField from "./FormField";

const PaymentForm = ({
    formData,
    formErrors,
    handleInputChange,
    handleSubmit,
    locations,
    totalAmount,
}) => (
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
        <FormField
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Jan Jansens"
            label="Name on Card"
            error={formErrors.name}
        />
        <FormField
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            label="Card Number"
            error={formErrors.cardNumber}
        />
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={1}>
                <FormField
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleInputChange}
                    placeholder="MM"
                    label="Expiry Month"
                    error={formErrors.expiryMonth}
                />
            </GridItem>
            <GridItem colSpan={1}>
                <FormField
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleInputChange}
                    placeholder="YY"
                    label="Expiry Year"
                    error={formErrors.expiryYear}
                />
            </GridItem>
        </Grid>
        <FormField
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleInputChange}
            placeholder="123 Street Name"
            label="Billing Address"
            error={formErrors.billingAddress}
        />
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={1}>
                <FormField
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    label="City"
                    error={formErrors.city}
                />
            </GridItem>
            <GridItem colSpan={1}>
                <FormField
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    placeholder="ZIP"
                    label="ZIP"
                    error={formErrors.zip}
                />
            </GridItem>
        </Grid>
        <FormField
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@example.com"
            label="Email"
            type="email"
            error={formErrors.email}
        />
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
        <FormControl mb="4" isInvalid={formErrors.location}>
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
            {formErrors.location && (
                <FormErrorMessage>{formErrors.location}</FormErrorMessage>
            )}
        </FormControl>
        <Button colorScheme="blue" type="submit">
            Pay {totalAmount.toFixed(2)} EUR
        </Button>
    </Box>
);

export default PaymentForm;
