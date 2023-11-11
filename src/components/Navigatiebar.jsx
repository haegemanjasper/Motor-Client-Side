import React from "react";
import { Box, Flex, Image, Link, HStack, Text } from "@chakra-ui/react";
import logo from "../images/logo.png";
import SearchBar from "../components/Searchbar.jsx";

function Navigatiebar() {
  return (
    <Flex
      className="navbar"
      bg="navbarBg"
      color="#FFFFFF"
      justifyContent="space-between"
      alignItems="center"
      padding="10px"
    >
      <Box className="logo">
        <Image
          src={logo}
          alt="logo"
          boxSize="100px"
          objectFit="contain"
          marginLeft="25px"
        />
      </Box>
      <Text fontSize="xl" fontWeight="bold" marginRight="200px">
        Outlaw Road Warriors
      </Text>
      <SearchBar />
      <HStack
        as="ul"
        spacing={4}
        align="center"
        listStyleType="none"
        bg="navbarBg"
        display="flex"
        alignItems={"center"}
        width={["100%", "50%", "25%"]}
      >
        <Link
          href="/"
          _hover={{
            textDecoration: "none",
            color: "#B74C44",
            fontSize: "20px",
          }}
        >
          Home
        </Link>
        <Link
          href="/routes"
          _hover={{
            textDecoration: "none",
            color: "#B74C44",
            fontSize: "20px",
          }}
        >
          Routes
        </Link>
        <Link
          href="/motors"
          _hover={{
            textDecoration: "none",
            color: "#B74C44",
            fontSize: "20px",
          }}
        >
          Models
        </Link>
        <Link
          href="/about"
          _hover={{
            textDecoration: "none",
            color: "#B74C44",
            fontSize: "20px",
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          _hover={{
            textDecoration: "none",
            color: "#B74C44",
            fontSize: "20px",
          }}
        >
          Contact
        </Link>
      </HStack>
    </Flex>
  );
}

export default Navigatiebar;
