import React, { useCallback, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    HStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const validationRules = {
    email: {
        required: "Email is required",
    },
    password: {
        required: "Password is required",
    },
};

const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [loginError, setLoginError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = useCallback(
        async (formData) => {
            setIsLoading(true);
            const { email, password } = formData;
            const loggedIn = await login(email, password);

            if (loggedIn) {
                navigate({
                    pathname: "/",
                    replace: true,
                });
            } else {
                setLoginError("Incorrect email or password.");
            }
        },
        [login, navigate]
    );

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
                        <FormControl isInvalid={errors.email}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                                id="email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                })}
                                tabIndex={1}
                            />
                            {errors.email && (
                                <Text color="red">
                                    {validationRules.email.required}
                                </Text>
                            )}
                        </FormControl>
                        <FormControl isInvalid={errors.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                id="password"
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                                tabIndex={2}
                            />
                            {errors.password && (
                                <Text color="red">
                                    {validationRules.password.required}
                                </Text>
                            )}
                        </FormControl>
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked colorScheme="blue">
                            Remember me
                        </Checkbox>
                        <Button variant="ghost" size="sm" colorScheme="red">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button
                            colorScheme="blue"
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
