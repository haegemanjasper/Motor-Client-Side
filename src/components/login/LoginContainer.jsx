import React, { useCallback, useState } from "react";
import { Container, Stack } from "@chakra-ui/react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = useCallback(
        async (formData) => {
            setIsLoading(true);
            const { email, password } = formData;

            try {
                const response = await fetch(
                    "http://localhost:9000/api/klanten/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email, password }),
                    }
                );

                if (response.ok) {
                    const data = await response.json();

                    login(data.token);
                    navigate({ pathname: "/", replace: true });
                } else {
                    const result = await response.json();
                    setLoginError(
                        result.message || "Incorrect email or password."
                    );
                }
            } catch (error) {
                console.error("Login error:", error);
                setLoginError(
                    "An unexpected error occurred. Please try again."
                );
            }

            setIsLoading(false);
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
                <LoginHeader />
                <LoginForm
                    handleLogin={handleLogin}
                    errors={{}}
                    isLoading={isLoading}
                    loginError={loginError}
                />
            </Stack>
        </Container>
    );
};

export default LoginContainer;
