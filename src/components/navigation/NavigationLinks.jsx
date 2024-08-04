import React from "react";
import { Box, HStack, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

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

const NavigationLinks = ({ filteredLinks }) => {
    return (
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {filteredLinks.map((item) => (
                <NavLink key={item.text} link={item.link}>
                    {item.text}
                </NavLink>
            ))}
        </HStack>
    );
};

const MobileNavigationLinks = ({ filteredLinks }) => {
    return (
        <Stack as={"nav"} spacing={4} display={{ md: "none" }}>
            {filteredLinks.map((item) => (
                <NavLink key={item.text} link={item.link}>
                    {item.text}
                </NavLink>
            ))}
        </Stack>
    );
};

export { NavigationLinks, MobileNavigationLinks, Links };
