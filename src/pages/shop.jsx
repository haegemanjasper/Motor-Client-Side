import React, { useContext } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import MotorList from "../components/motors/MotorList";
import { ShopContext } from "../context/shop-context";

export default function Shop() {
    const { motors, loading, error } = useContext(ShopContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box className="shop" p="1rem" marginLeft="2rem">
            <Flex justifyContent="center" mb="1rem">
                <Heading as="h1" size="lg">
                    Catalogus
                </Heading>
            </Flex>
            <MotorList motors={motors} />{" "}
        </Box>
    );
}
