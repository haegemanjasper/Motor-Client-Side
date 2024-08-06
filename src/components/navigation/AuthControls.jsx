import React from "react";
import {
    Flex,
    Button,
    Text,
    HStack,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const AuthControls = ({ isAuthed, logout, toggleColorMode, userName }) => {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return isAuthed ? (
        <Flex alignItems={"center"} ml={4}>
            <Menu>
                <MenuButton>
                    <Avatar size="sm" name={userName || "User"} />
                </MenuButton>
                <MenuList>
                    <MenuItem as={RouterLink} to="/profile">
                        Account
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>{" "}
                </MenuList>
            </Menu>
            <Button onClick={toggleColorMode} ml={4}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Flex>
    ) : (
        <HStack spacing={4}>
            <ChakraLink href="/login">
                <Button colorScheme="blue">
                    <Text>Log in</Text>
                </Button>
            </ChakraLink>
            <ChakraLink href="/register">
                <Button colorScheme="blue" variant="outline">
                    <Text>Sign up</Text>
                </Button>
            </ChakraLink>
            <Button onClick={toggleColorMode} ml={4}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </HStack>
    );
};

export default AuthControls;
