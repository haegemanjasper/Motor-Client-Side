import React from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

const Loading = () => (
    <Box p={4} textAlign="center">
        <Spinner size="lg" />
        <Text mt={4}>Loading...</Text>
    </Box>
);

export default Loading;
