import React, { useCallback, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Link,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import logo from "../assets/logo site.png";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Center } from "@chakra-ui/react";

const validationRules = {
    email: {
        required: "Email is required",
    },
    password: {
        required: "Password is required",
    },
};

export default function Login() {
    const { error, loading, login } = useAuth();
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
        <Container
            maxW="lg"
            py={{
                base: "12",
                md: "12",
            }}
            px={{
                base: "0",
                sm: "8",
            }}
        >
            <Stack spacing="8">
                <Stack spacing="6">
                    <Center>
                        <img src={logo} alt="Logo" width="100px" />
                    </Center>
                    <Stack
                        spacing={{
                            base: "2",
                            md: "3",
                        }}
                        textAlign="center"
                    >
                        <Heading
                            size={{
                                base: "xs",
                                md: "sm",
                            }}
                        >
                            Log in to your account
                        </Heading>
                        <HStack spacing={6} justify="center">
                            <Text color="gray.500" height="5px">
                                Don't have an account?
                            </Text>
                            <Link href="/register">
                                <Button
                                    variant="ghost"
                                    colorScheme="green"
                                    height=""
                                >
                                    Sign up
                                </Button>
                            </Link>
                        </HStack>
                    </Stack>
                </Stack>
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
                                    <FormLabel htmlFor="password">
                                        Password
                                    </FormLabel>
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
                                <Checkbox defaultChecked colorScheme="green">
                                    Remember me
                                </Checkbox>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    colorScheme="red"
                                >
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
            </Stack>
        </Container>
    );
}
