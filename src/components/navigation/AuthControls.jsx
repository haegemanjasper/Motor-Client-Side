import React from "react";
import {
    HStack,
    Button,
    Text,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const AuthControls = () => {
    const { isAuthed, klant, logout } = useAuth();
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();

    const handleLogin = () => navigate("/login");
    const handleRegister = () => navigate("/register");

    return (
        <HStack spacing={4}>
            {isAuthed ? (
                <Menu>
                    <MenuButton>
                        <Avatar
                            size="sm"
                            name={klant ? klant.naam : "User"}
                            src={
                                klant && klant.avatarUrl
                                    ? klant.avatarUrl
                                    : undefined
                            }
                        />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => navigate("/profile")}>
                            Profile
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <>
                    <Button
                        colorScheme="green"
                        variant="outline"
                        width="100%"
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        onClick={handleLogin}
                    >
                        <Text marginTop={3}>Log in</Text>
                    </Button>
                    <Button
                        colorScheme="green"
                        width="100%"
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        onClick={handleRegister}
                    >
                        <Text marginTop={3}>Sign up</Text>
                    </Button>
                </>
            )}
            <Button
                onClick={toggleColorMode}
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </HStack>
    );
};

export default AuthControls;
