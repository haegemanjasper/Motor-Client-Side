import React from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cart");
    };

    return (
        <Box position="relative" mr={4}>
            <IconButton
                icon={<FaShoppingCart />}
                aria-label="Open Shopping Cart"
                onClick={handleClick}
            />
        </Box>
    );
};

export default CartButton;
