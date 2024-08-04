import React from "react";
import {
    Box,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Button,
    Text,
    HStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const validationRules = {
    email: {
        required: "Email is required",
    },
    password: {
        required: "Password is required",
    },
};

const LoginForm = ({ handleLogin, errors, isLoading, loginError }) => {
    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();

    return (
        <Box
            py={{
                base: "0",
                sm: "8",
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
        >
            <form onSubmit={handleSubmit(handleLogin)}>
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl
                            isInvalid={formErrors.email || errors.email}
                        >
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                                id="email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                })}
                                tabIndex={1}
                            />
                            {(formErrors.email || errors.email) && (
                                <Text color="red">
                                    {validationRules.email.required}
                                </Text>
                            )}
                        </FormControl>
                        <FormControl
                            isInvalid={formErrors.password || errors.password}
                        >
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                id="password"
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                                tabIndex={2}
                            />
                            {(formErrors.password || errors.password) && (
                                <Text color="red">
                                    {validationRules.password.required}
                                </Text>
                            )}
                        </FormControl>
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked colorScheme="green">
                            Remember me
                        </Checkbox>
                        <Button variant="ghost" size="sm" colorScheme="red">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button
                            colorScheme="green"
                            type="submit"
                            isLoading={isLoading}
                        >
                            Sign in
                        </Button>
                    </Stack>
                </Stack>
            </form>
            {loginError && <Text color="red">{loginError}</Text>}
        </Box>
    );
};

export default LoginForm;
