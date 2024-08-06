import React from "react";
import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    useColorMode,
    useColorModeValue,
    Divider,
    Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLinks from "./NavLinks";
import AuthControls from "./AuthControls";
import logo from "../../assets/logo site.png";
import { useAuth } from "../../context/auth-context";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuthed, klant, logout } = useAuth();
    const userRole = klant ? klant.role : "Klant";

    return (
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
                    <Flex alignItems={"center"}>
                        <Box>
                            <img
                                src={logo}
                                alt="Logo"
                                height="50px"
                                width="75px"
                            />
                        </Box>
                        <NavLinks userRole={userRole} isOpen={false} />
                    </Flex>
                    <AuthControls
                        isAuthed={isAuthed}
                        klant={klant}
                        logout={logout}
                        toggleColorMode={toggleColorMode}
                        colorMode={colorMode}
                    />
                </Flex>
                {isOpen && <NavLinks userRole={userRole} isOpen={true} />}
                <Divider />
            </Box>
        </Container>
    );
};

export default Navbar;
