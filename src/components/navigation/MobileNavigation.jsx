import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Divider,
    Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../../context/auth-context";
import Logo from "./Logo";
import {
    NavigationLinks,
    MobileNavigationLinks,
    Links,
} from "./NavigationLinks";
import UserMenu from "./UserMenu";
import AuthButtons from "./AuthButtons";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
    const [userRole, setUserRole] = useState("Guest");

    useEffect(() => {
        fetchUserRoleFromDatabase().then((role) => setUserRole(role));
    }, []);

    const filteredLinks = Links.filter((link) => link.roles.includes(userRole));
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuthed } = useAuth();

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
                            <Logo />
                            <NavigationLinks filteredLinks={filteredLinks} />
                        </HStack>
                        <Flex
                            alignItems={"center"}
                            display={{ base: "none", md: "flex" }}
                        >
                            {isAuthed ? <UserMenu /> : <AuthButtons />}
                        </Flex>
                    </Flex>
                    <MobileNavigation
                        isOpen={isOpen}
                        filteredLinks={filteredLinks}
                        isAuthed={isAuthed}
                    />
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
