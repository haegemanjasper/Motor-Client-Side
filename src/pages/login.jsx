import React from "react";
import { Container, Stack } from "@chakra-ui/react";
import LoginHeader from "../components/login/LoginHeader";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
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
                <LoginForm />
            </Stack>
        </Container>
    );
}
