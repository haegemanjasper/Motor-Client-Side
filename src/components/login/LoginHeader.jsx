import React from "react";
import {
    Stack,
    Center,
    Heading,
    HStack,
    Text,
    Button,
    Link,
} from "@chakra-ui/react";
import logo from "../../assets/logo site.png";

const LoginHeader = () => (
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
                    <Button variant="ghost" colorScheme="green" height="">
                        Sign up
                    </Button>
                </Link>
            </HStack>
        </Stack>
    </Stack>
);

export default LoginHeader;
