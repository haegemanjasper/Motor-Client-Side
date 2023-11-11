import React from "react";
import { Box, Icon, Link, HStack } from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <Box
      bg="#3A1E19"
      color="#FFFFFF"
      padding="20px"
      display="flex"
      justifyContent="center"
    >
      <HStack spacing="20px">
        <Link href="https://www.facebook.com/" isExternal>
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="https://twitter.com/" isExternal>
          <Icon as={FaTwitter} boxSize={6} />
        </Link>
        <Link href="https://www.instagram.com/" isExternal>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
        <Link href="https://www.linkedin.com/" isExternal>
          <Icon as={FaLinkedin} boxSize={6} />
        </Link>
        <Link href="https://www.youtube.com/" isExternal>
          <Icon as={FaYoutube} boxSize={6} />
        </Link>
      </HStack>
    </Box>
  );
}

export default Footer;
