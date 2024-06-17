import React from "react";
import {
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Center,
    Stack,
    Heading,
} from "@chakra-ui/react";
import logo from "../assets/logo site.png";

export default function RegisterForm() {
    return (
        <VStack spacing="6" w="100%">
            <Center>
                <VStack w={{ base: "90%", sm: "500px" }} alignItems="center">
                    <img src={logo} alt="Logo" width="100px" />
                    <Box
                        py={{
                            base: "0",
                            sm: "4",
                        }}
                        px={{
                            base: "4",
                            sm: "10",
                        }}
                        bg={{
                            base: "transparent",
                            sm: "bg.surface",
                        }}
                        boxShadow={{
                            base: "none",
                            sm: "md",
                        }}
                        borderRadius={{
                            base: "none",
                            sm: "xl",
                        }}
                        mt={1}
                        w="100%"
                        maxWidth="800px"
                        p={4}
                    >
                        <VStack spacing={2} as="form" width="100%">
                            <Text fontSize="2xl" fontWeight="bold">
                                Register
                            </Text>
                            <FormControl isRequired width="100%">
                                <FormLabel htmlFor="firstname">
                                    Firstname
                                </FormLabel>
                                <Input
                                    id="firstname"
                                    placeholder="Firstname"
                                    width="100%"
                                />
                            </FormControl>

                            <FormControl isRequired width="100%">
                                <FormLabel htmlFor="surname">Surname</FormLabel>
                                <Input
                                    id="surname"
                                    placeholder="Surname"
                                    width="100%"
                                />
                            </FormControl>

                            <FormControl isRequired width="100%">
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="jasper@firstmotorsite.com"
                                    width="100%"
                                />
                            </FormControl>

                            <FormControl isRequired width="100%">
                                <FormLabel htmlFor="password">
                                    Password
                                </FormLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    width="100%"
                                />
                            </FormControl>

                            <FormControl isRequired width="100%">
                                <FormLabel htmlFor="confirm-password">
                                    Confirm Password
                                </FormLabel>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    placeholder="Password"
                                    width="100%"
                                />
                            </FormControl>

                            <Button
                                mt={4}
                                colorScheme="green"
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
}
