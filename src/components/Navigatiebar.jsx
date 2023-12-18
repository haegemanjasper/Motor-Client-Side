import React from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  HStack,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { HiUser } from "react-icons/hi";
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
      padding="30px"
      marginBottom="0"
    >
      <Box className="logo">
        <Image
          src={logo}
          alt="logo"
          boxSize="80px"
          objectFit="contain"
          marginLeft="30px"
        />
      </Box>
      <Text fontSize="xl" fontWeight="bold" marginLeft="20px">
        Outlaw Road Warriors
      </Text>
      <div style={{ marginLeft: "80px" }}>
        <SearchBar />
      </div>
      <HStack
        as="ul"
        spacing={4}
        align="center"
        listStyleType="none"
        bg="navbarBg"
        display="flex"
        alignItems={"center"}
        width={["15%", "10%", "35%"]}
        marginLeft="auto"
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
          href="/locations"
          _hover={{
            textDecoration: "none",
            color: "#B74C44",
            fontSize: "20px",
          }}
        >
          Locations
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
        <Link
          href="/cart"
          _hover={{ textDecoration: "none", color: "#B74C44" }}
        >
          <Icon as={FiShoppingCart} boxSize={6} />
        </Link>
        {/* Login pictogram */}
        <Link
          href="/login"
          _hover={{ textDecoration: "none", color: "#B74C44" }}
        >
          <Icon as={HiUser} boxSize={6} />
        </Link>
      </HStack>
    </Flex>
  );
}

export default Navigatiebar;
