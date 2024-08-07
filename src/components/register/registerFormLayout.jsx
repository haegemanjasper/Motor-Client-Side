import React from "react";
import {
    VStack,
    Box,
    Center,
    SimpleGrid,
    Button,
    Text,
} from "@chakra-ui/react";
import FormInput from "./formInput";

const RegisterFormLayout = ({
    formData,
    errors,
    handleChange,
    handleSubmit,
}) => (
    <VStack spacing="6" w="100%" mt={8}>
        <Center>
            <VStack w={{ base: "90%", sm: "500px" }} alignItems="center">
                <Box
                    py={{ base: "0", sm: "4" }}
                    px={{ base: "4", sm: "10" }}
                    bg={{ base: "transparent", sm: "bg.surface" }}
                    boxShadow={{ base: "none", sm: "md" }}
                    borderRadius={{ base: "none", sm: "xl" }}
                    w="100%"
                    maxWidth="800px"
                    p={4}
                    mb={16}
                >
                    <VStack
                        spacing={4}
                        as="form"
                        width="100%"
                        onSubmit={handleSubmit}
                    >
                        <Text fontSize="2xl" fontWeight="bold">
                            Sign up
                        </Text>

                        <FormInput
                            id="naam"
                            label="Name"
                            placeholder="Name"
                            value={formData.naam}
                            onChange={handleChange}
                            error={errors.naam}
                        />

                        <FormInput
                            id="voornaam"
                            label="First Name"
                            placeholder="First Name"
                            value={formData.voornaam}
                            onChange={handleChange}
                            error={errors.voornaam}
                        />

                        <FormInput
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="test@test.com"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                        />

                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
                            spacing={4}
                            width="100%"
                        >
                            <FormInput
                                id="straat"
                                label="Street"
                                placeholder="Street"
                                value={formData.straat}
                                onChange={handleChange}
                                error={errors.straat}
                            />

                            <FormInput
                                id="huisnummer"
                                label="House number"
                                placeholder="House number"
                                value={formData.huisnummer}
                                onChange={handleChange}
                                error={errors.huisnummer}
                            />

                            <FormInput
                                id="postcode"
                                label="Postcode"
                                placeholder="Postcode"
                                value={formData.postcode}
                                onChange={handleChange}
                                error={errors.postcode}
                            />

                            <FormInput
                                id="stad"
                                label="City"
                                placeholder="City"
                                value={formData.stad}
                                onChange={handleChange}
                                error={errors.stad}
                            />
                        </SimpleGrid>

                        <FormInput
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                        />

                        <Button
                            mt={4}
                            colorScheme="blue"
                            type="submit"
                            width="100%"
                        >
                            Register
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Center>
    </VStack>
);

export default RegisterFormLayout;
