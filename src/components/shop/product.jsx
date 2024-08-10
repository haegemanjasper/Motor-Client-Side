import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Button, Image, Box, Text, VStack } from "@chakra-ui/react";

export const Product = (props) => {
    const { id, merk, model, huurprijs_per_dag, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id] || 0;

    return (
        <Box textAlign="center" p={4}>
            <VStack spacing="4">
                <Image src={image} alt={model} maxH="200px" />
                <Box textAlign="left">
                    <Text fontWeight="bold">{model}</Text>
                    <Text>€{huurprijs_per_dag.toFixed(2)}</Text>
                </Box>
            </VStack>
            <Button
                colorScheme="red"
                mt={4}
                w="150px"
                onClick={() => addToCart(id)}
            >
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </Button>
        </Box>
    );
};
