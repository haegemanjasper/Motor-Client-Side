import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Button, Input, Flex, Image, Text } from "@chakra-ui/react";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            mb={4}
        >
            <Flex direction="column" align="center" flex={1}>
                <Text fontWeight="bold" mb={2}>
                    Item
                </Text>
                <Image
                    src={productImage}
                    alt={productName}
                    boxSize="100px"
                    mb={2}
                />
                <Text fontWeight="bold" mb={1}>
                    {productName}
                </Text>
                <Text mb={2}>Price: €{price.toFixed(2)}</Text>
            </Flex>

            <Flex direction="column" align="center" flex={1}>
                <Text fontWeight="bold" mb={2}>
                    Quantity
                </Text>
                <Flex align="center">
                    <Button size="sm" onClick={() => removeFromCart(id)}>
                        -
                    </Button>
                    <Input
                        value={cartItems[id]}
                        onChange={(e) =>
                            updateCartItemCount(Number(e.target.value), id)
                        }
                        w="50px"
                        mx={2}
                        size="sm"
                    />
                    <Button size="sm" onClick={() => addToCart(id)}>
                        +
                    </Button>
                </Flex>
            </Flex>

            <Flex direction="column" align="center" flex={1}>
                <Text fontWeight="bold" mb={2}>
                    Total
                </Text>
                <Text>€ {(cartItems[id] * price).toFixed(2)}</Text>
            </Flex>
        </Flex>
    );
};
