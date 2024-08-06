import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";

const NavLink = ({ children, link }) => (
    <Box
        as={RouterLink}
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        to={link}
        textAlign="center"
    >
        {children}
    </Box>
);

const NavLinks = ({ filteredLinks }) => (
    <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
        {filteredLinks.map((item) => (
            <NavLink key={item.text} link={item.link}>
                {item.text}
            </NavLink>
        ))}
    </HStack>
);

export default NavLinks;
