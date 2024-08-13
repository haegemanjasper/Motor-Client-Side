import React from "react";
import { Box, Alert, AlertIcon } from "@chakra-ui/react";

const Error = ({ message }) => (
    <Box p={4} textAlign="center">
        <Alert status="error">
            <AlertIcon />
            {message}
        </Alert>
    </Box>
);

export default Error;
