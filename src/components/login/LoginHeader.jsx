import React from "react";
import { Heading, HStack, Stack, Text, Button, Link } from "@chakra-ui/react";
import Logo from "../../components/navigation/Logo";

const LoginHeader = () => (
    <Stack spacing="6">
        <Logo size="150" />
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
            <HStack justify="center">
                <Text color="fg.muted">Don't have an account?</Text>
                <Link href="/register">
                    <Button variant="ghost" colorScheme="red">
                        Sign up
                    </Button>
                </Link>
            </HStack>
        </Stack>
    </Stack>
);

export default LoginHeader;
