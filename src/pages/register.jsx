import React from "react";
import RegisterForm from "../components/register/registerForm";
import { Container } from "@chakra-ui/react";

export default function RegisterPage() {
    return (
        <Container maxW="container.md" p={4}>
            <RegisterForm />
        </Container>
    );
}
