import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Button, Input, Flex, Image, Text } from "@chakra-ui/react";
import imageMap from "../../assets/imageMap";

export const CartItem = ({ itemId }) => {
    const {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        motors,
    } = useContext(ShopContext);

    const motor = motors.find((motor) => motor.id === Number(itemId));
    if (!motor) return <Text>Item not found</Text>;

    const { model, huurprijs_per_dag, image } = motor;
    const imageSrc = imageMap[motor.merk];

    return (
        <Flex direction="row" align="center" justify="space-between" mb={4}>
            <Flex direction="row" align="center" flex={1}>
                <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={imageSrc}
                    alt={model}
                />
                <Text ml={4}>{model}</Text>
            </Flex>
            <Flex direction="row" align="center" flex={1} justify="center">
                <Button size="sm" onClick={() => removeFromCart(itemId)}>
                    -
                </Button>
                <Input
                    value={cartItems[itemId] || 0}
                    onChange={(e) =>
                        updateCartItemCount(Number(e.target.value), itemId)
                    }
                    w="50px"
                    mx={2}
                    size="sm"
                    type="number"
                    min="0"
                />
                <Button size="sm" onClick={() => addToCart(itemId)}>
                    +
                </Button>
            </Flex>
            <Flex direction="row" align="center" flex={1} justify="flex-end">
                <Text>
                    €
                    {(
                        (cartItems[itemId] || 0) * parseFloat(huurprijs_per_dag)
                    ).toFixed(2)}
                </Text>
            </Flex>
        </Flex>
    );
};
