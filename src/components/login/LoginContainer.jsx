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
            const loggedIn = await login(email, password);

            if (loggedIn) {
                navigate({
                    pathname: "/",
                    replace: true,
                });
            } else {
                setLoginError("Incorrect email or password.");
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
                    errors={{}} // Pass the appropriate errors if needed
                    isLoading={isLoading}
                    loginError={loginError}
                />
            </Stack>
        </Container>
    );
};

export default LoginContainer;
