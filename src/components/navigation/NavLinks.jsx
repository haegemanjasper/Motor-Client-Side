import React from "react";
import { Box, useColorModeValue, Stack, HStack } from "@chakra-ui/react";

const Links = [
    { text: "Home", link: "/", roles: ["Klant", "Admin"] },
    { text: "About Us", link: "/aboutus", roles: ["Klant", "Admin"] },
    { text: "Rent A Bike", link: "/rentabike", roles: ["Klant", "Admin"] },
    { text: "Dashboard", link: "/dashboard", roles: ["Admin"] },
];

const NavLink = ({ children, link }) => (
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

const NavLinks = ({ userRole, isOpen }) => {
    const filteredLinks = Links.filter((link) => link.roles.includes(userRole));

    return (
        <>
            <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
            >
                {filteredLinks.map(({ text, link }) => (
                    <NavLink key={text} link={link}>
                        {text}
                    </NavLink>
                ))}
            </HStack>
            {isOpen && (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {filteredLinks.map(({ text, link }) => (
                            <NavLink key={text} link={link}>
                                {text}
                            </NavLink>
                        ))}
                    </Stack>
                </Box>
            )}
        </>
    );
};

export default NavLinks;
