import React from "react";
import { Box, Heading, Grid, GridItem, Flex } from "@chakra-ui/react";
import { PRODUCTS } from "../products";
import { Product } from "../components/shop/product";

export default function Shop() {
    return (
        <>
            <Box className="shop" p="1rem" marginLeft="2rem">
                {" "}
                <Flex justifyContent="center" mb="1rem">
                    {" "}
                    <Heading as="h1" size="lg">
                        Catalogus
                    </Heading>
                </Flex>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(4, 1fr)",
                    }}
                    gap={6}
                >
                    {PRODUCTS.map((product) => (
                        <GridItem key={product.id}>
                            <Box textAlign="center">
                                <Product data={product} />
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
