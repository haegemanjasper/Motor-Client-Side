import React, { useContext } from "react";
import { Box, Heading, Button, Text, Stack, Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "../components/shop/cart-item";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount().toFixed(2);
    const navigate = useNavigate();

    if (!cartItems) {
        return <Text>Loading...</Text>;
    }

    return (
        <Box p={4} maxW="1200px" mx="auto">
            <Stack
                direction="row"
                align="center"
                spacing={2}
                mb={6}
                justify="center"
            >
                <Icon as={FaShoppingCart} boxSize={8} color="blue.500" />
            </Stack>

            <Box mb={6}>
                {Object.keys(cartItems).length > 0 ? (
                    <Stack spacing={4}>
                        {Object.keys(cartItems).map((itemId) => (
                            <CartItem key={itemId} itemId={itemId} />
                        ))}
                    </Stack>
                ) : (
                    <Box textAlign="center">
                        <Heading as="h2" size="lg" mb={4}>
                            Your Shopping Cart is Empty.
                        </Heading>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            onClick={() => navigate("/shop")}
                        >
                            Explore Shop
                        </Button>
                    </Box>
                )}
            </Box>

            {totalAmount > 0 && (
                <Box textAlign="center">
                    <Text fontSize="xl" mb={4}>
                        <b>Subtotal:</b> € {totalAmount}
                    </Text>
                    <Stack direction="row" spacing={4} justify="center">
                        <Button
                            colorScheme="blue"
                            size="lg"
                            onClick={() => navigate("/shop")}
                        >
                            Continue Shopping
                        </Button>
                        <Button
                            colorScheme="teal"
                            size="lg"
                            onClick={() => {
                                checkout();
                                navigate("/checkout");
                            }}
                        >
                            Checkout
                        </Button>
                    </Stack>
                </Box>
            )}
        </Box>
    );
}
