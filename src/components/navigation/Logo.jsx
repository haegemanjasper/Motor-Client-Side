import React from "react";
import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/logo site.png";

const Logo = (props) => (
    <Box {...props} display="flex" justifyContent="center" alignItems="center">
        <Image src={logo} alt="Logo" height="75px" width="75px" />
    </Box>
);

export default Logo;
