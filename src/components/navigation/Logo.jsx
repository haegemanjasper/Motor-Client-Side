import React from "react";
import { Box } from "@chakra-ui/react";
import logo from "../../assets/logo site.png";

const Logo = () => {
    return (
        <Box>
            <img src={logo} alt="Logo" height="50px" width="75px" />
        </Box>
    );
};

export default Logo;
