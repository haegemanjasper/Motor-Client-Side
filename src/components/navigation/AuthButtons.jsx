import React from "react";
import { HStack, Button, Link, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const AuthButtons = ({ isAuthed }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return isAuthed ? null : (
        <HStack spacing={4}>
            <Link href="/login">
                <Button
                    colorScheme="green"
                    variant="outline"
                    textAlign="center"
                >
                    <Text height="10px">Log in</Text>
                </Button>
            </Link>

            <Link href="/register">
                <Button colorScheme="green" textAlign="center">
                    <Text height="10px">Sign up</Text>
                </Button>
            </Link>

            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </HStack>
    );
};

export default AuthButtons;
