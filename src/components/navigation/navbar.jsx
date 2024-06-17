import React from "react";
("use client");

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorMode,
    useDisclosure,
    useColorModeValue,
    Stack,
    Link,
    Divider,
    Container,
    VStack,
    Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo site.png";
import { useAuth } from "../../context/auth-context";
import { Link as RouterLink } from "react-router-dom";
//import CartButton from "./shop/CartButton";
import NotificationButton from "../notifications/NotificationButton";
import { useEffect, useState } from "react";

const Links = [
    { text: "Home", link: "/", roles: ["Guest", "User", "Admin"] },
    { text: "About Us", link: "/aboutus", roles: ["Guest", "User", "Admin"] },
    {
        text: "Rent A Bike",
        link: "/rentabike",
        roles: ["Guest", "User", "Admin"],
    },
    { text: "Dashboard", link: "/dashboard", roles: ["Admin"] },
];

const NavLink = ({ children, link }) => {
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
            href={link}
            textAlign="center"
        >
            {children}
        </Box>
    );
};

export default function Navbar() {
    const [userRole, setUserRole] = useState("Guest");

    useEffect(() => {
        fetchUserRoleFromDatabase().then((role) => setUserRole(role));
    }, []);

    const filteredLinks = Links.filter((link) => link.roles.includes(userRole));

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuthed, user, logout } = useAuth();

    return (
        <>
            <Container maxW="1280px">
                <Box>
                    <Flex
                        h={16}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <IconButton
                            size={"md"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={"Open Menu"}
                            display={{ md: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={2} alignItems={"center"}>
                            <Box>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    height="50px"
                                    width="75px"
                                />
                            </Box>
                            <HStack
                                as={"nav"}
                                spacing={4}
                                display={{ base: "none", md: "flex" }}
                            >
                                {filteredLinks.map((item) => (
                                    <NavLink key={item.text} link={item.link}>
                                        {item.text}
                                    </NavLink>
                                ))}
                            </HStack>
                        </HStack>
                        <Flex
                            alignItems={"center"}
                            display={{ base: "none", md: "flex" }}
                        >
                            {isAuthed ? (
                                <Menu>
                                    <MenuButton>
                                        <Avatar
                                            size="sm"
                                            name={user.username}
                                        />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem as={RouterLink} to="/profile">
                                            Account
                                        </MenuItem>
                                        <MenuDivider />
                                        <MenuItem onClick={logout}>
                                            Logout
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            ) : (
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
                                        <Button
                                            colorScheme="green"
                                            textAlign="center"
                                        >
                                            <Text height="10px">Sign up</Text>
                                        </Button>
                                    </Link>

                                    <Button onClick={toggleColorMode}>
                                        {colorMode === "light" ? (
                                            <MoonIcon />
                                        ) : (
                                            <SunIcon />
                                        )}
                                    </Button>
                                </HStack>
                            )}
                        </Flex>
                    </Flex>
                    {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as={"nav"} spacing={4}>
                                {filteredLinks.map(({ text, link }) => (
                                    <NavLink key={text} link={link}>
                                        {text}
                                    </NavLink>
                                ))}
                                {isAuthed ? (
                                    <Menu>
                                        <MenuButton>
                                            <Avatar size="sm" name="pedro" />
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem
                                                as={RouterLink}
                                                to="/profile"
                                            >
                                                Account
                                            </MenuItem>
                                            <MenuDivider />
                                            <MenuItem onClick={logout}>
                                                Logout
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                ) : (
                                    <VStack spacing={4}>
                                        <Link href="/login" w="100%">
                                            <Button colorScheme="red" w="100%">
                                                <Text>Log in</Text>
                                            </Button>
                                        </Link>

                                        <Link href="/register" w="100%">
                                            <Button
                                                colorScheme="red"
                                                variant="outline"
                                                w="100%"
                                            >
                                                <Text>Sign up</Text>
                                            </Button>
                                        </Link>

                                        <Button
                                            onClick={toggleColorMode}
                                            w="100%"
                                        >
                                            {colorMode === "light" ? (
                                                <MoonIcon />
                                            ) : (
                                                <SunIcon />
                                            )}
                                        </Button>
                                    </VStack>
                                )}
                            </Stack>
                        </Box>
                    ) : null}
                </Box>
                <Divider />
            </Container>
        </>
    );
}

async function fetchUserRoleFromDatabase(username) {
    const response = await fetch(`/api/role/${username}`);
    const data = await response.json();
    return data.role;
}
