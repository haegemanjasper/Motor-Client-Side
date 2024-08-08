import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Box, Heading, Button } from "@chakra-ui/react";
import { PRODUCTS } from "../products";
import { CartItem } from "../components/shop/cart-item";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount().toFixed(2);
    const navigate = useNavigate();

    return (
        <Box className="cart" p={4}>
            {" "}
            <Heading as="h1" mb={4} textAlign="center">
                Your Cart Items
            </Heading>{" "}
            <Box className="cartItems" marginLeft="4rem" marginTop="2rem">
                {" "}
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />;
                    }
                    return null;
                })}
            </Box>
            {totalAmount > 0 ? (
                <Box className="checkout" mt={4} textAlign="center">
                    {" "}
                    <p>
                        <b>Subtotal:</b> € {totalAmount}
                    </p>
                    <Button
                        colorScheme="blue"
                        mr={2}
                        onClick={() => navigate("/shop")}
                    >
                        Continue Shopping
                    </Button>{" "}
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            checkout();
                            navigate("/checkout");
                        }}
                    >
                        Checkout
                    </Button>{" "}
                </Box>
            ) : (
                <Box mt={4} textAlign="center">
                    <Heading as="h1">Your Shopping Cart is Empty.</Heading>
                    <Button
                        colorScheme="red"
                        mt={2}
                        marginTop="10rem"
                        onClick={() => navigate("/shop")}
                    >
                        Explore Shop
                    </Button>
                </Box>
            )}
        </Box>
    );
}
