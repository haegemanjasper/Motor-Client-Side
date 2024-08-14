import React from "react";
import {
    Box,
    Flex,
    IconButton,
    Stack,
    Divider,
    Container,
    Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure, useColorMode } from "@chakra-ui/react";
import { useAuth } from "../../context/auth-context";
import { useLocation } from "react-router-dom";
import LogoComponent from "./Logo";
import NavLinks from "./NavLinks";
import AuthControls from "./AuthControls";
import CreateMotorButton from "../motors/CreateMotorForm";

const Links = [
    { text: "Home", link: "/", roles: ["klant", "admin", "guest"] },
    { text: "About Us", link: "/aboutus", roles: ["klant", "guest"] },
    { text: "Motorcycle Rentals", link: "/rentabike", roles: ["guest"] },
    { text: "Motorcycle Rentals", link: "/shop", roles: ["klant", "admin"] },
    { text: "Cart", link: "/cart", roles: ["klant"] },
    { text: "Customers", link: "/viewcustomers", roles: ["admin"] },
    { text: "Locations", link: "/viewlocations", roles: ["admin"] },
];

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuthed, klant, logout } = useAuth();
    const location = useLocation();

    const userRole =
        isAuthed && klant && klant.roles && klant.roles.length > 0
            ? klant.roles[0].toLowerCase()
            : "guest";

    console.log(
        "Navbar -> isAdmin passed to AuthControls:",
        userRole === "admin"
    );

    const filteredLinks = Links.filter((link) => link.roles.includes(userRole));

    const isOnShopPage = location.pathname === "/shop";

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
                            {isOnShopPage && <CreateMotorButton />}
                        </Flex>
                        <AuthControls
                            isAuthed={isAuthed}
                            isAdmin={userRole === "admin"}
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
                                    isAdmin={userRole === "admin"}
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
