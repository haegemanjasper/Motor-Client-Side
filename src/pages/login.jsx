import React from "react";
import Login from "../components/login/LoginContainer";
import { Container } from "@chakra-ui/react";

export default function LoginPage() {
    return (
        <Container maxW="container.md" p={4}>
            <Login />
        </Container>
    );
}
