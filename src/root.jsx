import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/navigation/navbar";
import Footer from "./components/footer/footer.jsx";

export default function Root() {
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <CustomNavbar />
            <Box flex="1">
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}
