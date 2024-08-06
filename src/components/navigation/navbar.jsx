import React from "react";
import {
    Box,
    Flex,
    IconButton,
    Stack,
    Divider,
    Container,
    VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure, useColorMode } from "@chakra-ui/react";
import { useAuth } from "../../context/auth-context";
import LogoComponent from "./Logo";
import NavLinks from "./NavLinks";
import AuthControls from "./AuthControls";

const Links = [
    { text: "Home", link: "/", roles: ["klant", "admin", "guest"] },
    { text: "About Us", link: "/aboutus", roles: ["klant", "admin", "guest"] },
    {
        text: "Rent A Bike",
        link: "/rentabike",
        roles: ["klant", "admin", "guest"],
    },
];

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuthed, klant, logout } = useAuth();

    const userRole =
        isAuthed && klant && klant.role ? klant.role.toLowerCase() : "guest";

    const filteredLinks = Links.filter((link) => link.roles.includes(userRole));

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
                        <Flex alignItems={"center"} spacing={8}>
                            <LogoComponent />
                            <NavLinks filteredLinks={filteredLinks} />
                        </Flex>
                        <AuthControls
                            isAuthed={isAuthed}
                            logout={logout}
                            toggleColorMode={toggleColorMode}
                            userName={klant?.naam}
                        />
                    </Flex>
                    {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as={"nav"} spacing={4}>
                                <NavLinks filteredLinks={filteredLinks} />
                                <AuthControls
                                    isAuthed={isAuthed}
                                    logout={logout}
                                    toggleColorMode={toggleColorMode}
                                    userName={klant?.naam}
                                />
                            </Stack>
                        </Box>
                    ) : null}
                </Box>
                <Divider />
            </Container>
        </>
    );
};

export default Navbar;
