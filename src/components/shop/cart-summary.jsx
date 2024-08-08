import React, { useContext } from "react";
import { Box, Image, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";

const CartSummary = () => {
    const { cartItems } = useContext(ShopContext);
    const calculateTotal = () => {
        let total = 0;
        Object.keys(cartItems).forEach((itemId) => {
            const product = PRODUCTS.find(
                (product) => product.id === parseInt(itemId)
            );
            total += cartItems[itemId] * (product?.price || 0);
        });
        return total.toFixed(2);
    };

    return (
        <Box
            width="300px"
            p="4"
            boxShadow="md"
            borderRadius="md"
            marginLeft="5rem"
            marginTop="5rem"
        >
            <Text fontSize="xl" fontWeight="bold" mb="4">
                Summary
            </Text>
            <VStack divider={<Divider />} spacing={4}>
                {Object.keys(cartItems).map((itemId) => {
                    const product = PRODUCTS.find(
                        (product) => product.id === parseInt(itemId)
                    );
                    if (!product || cartItems[itemId] <= 0) return null;
                    return (
                        <HStack
                            key={itemId}
                            width="100%"
                            justifyContent="space-between"
                        >
                            <Image
                                boxSize="50px"
                                objectFit="cover"
                                src={product.productImage}
                                alt={product.productName}
                            />
                            <Text>{product.productName}</Text>
                            <Text fontWeight="bold">
                                €
                                {(cartItems[itemId] * product.price).toFixed(2)}
                            </Text>
                        </HStack>
                    );
                })}
            </VStack>
            <Divider my="4" />
            <Text fontSize="xl" fontWeight="bold">
                Total: € {calculateTotal()}
            </Text>
        </Box>
    );
};

export default CartSummary;
