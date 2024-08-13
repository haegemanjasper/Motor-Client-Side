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

const AuthControls = ({
    isAuthed,
    isAdmin,
    logout,
    toggleColorMode,
    userName,
}) => {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return isAuthed ? (
        <Flex alignItems={"center"} ml={4}>
            <Menu>
                <MenuButton data-cy="avatar-menu-button">
                    <Avatar
                        size="sm"
                        name={userName || "User"}
                        data-cy="user-avatar"
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem
                        as={RouterLink}
                        to="/profile"
                        data-cy="profile-menu-item"
                    >
                        Account
                    </MenuItem>

                    <MenuItem
                        as={RouterLink}
                        to="/viewpayments"
                        data-cy="payments-menu-item"
                    >
                        Payments
                    </MenuItem>

                    <MenuDivider />
                    <MenuItem onClick={handleLogout} data-cy="logout-menu-item">
                        Logout
                    </MenuItem>
                </MenuList>
            </Menu>
            <Button
                onClick={toggleColorMode}
                ml={4}
                data-cy="color-mode-toggle"
            >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Flex>
    ) : (
        <HStack spacing={4}>
            <ChakraLink href="/login">
                <Button colorScheme="blue" data-cy="login-button">
                    <Text>Log in</Text>
                </Button>
            </ChakraLink>
            <ChakraLink href="/register">
                <Button
                    colorScheme="blue"
                    variant="outline"
                    data-cy="signup-button"
                >
                    <Text>Sign up</Text>
                </Button>
            </ChakraLink>
            <Button
                onClick={toggleColorMode}
                ml={4}
                data-cy="color-mode-toggle"
            >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </HStack>
    );
};

export default AuthControls;
