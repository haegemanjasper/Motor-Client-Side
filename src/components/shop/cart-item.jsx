import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {
    Button,
    Input,
    Flex,
    Image,
    Text,
    Box,
    IconButton,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import imageMap from "../../assets/imageMap";

export const CartItem = ({ itemId }) => {
    const {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        removeItemFromCart,
        motors,
    } = useContext(ShopContext);

    const motor = motors.find((motor) => motor.id === Number(itemId));
    if (!motor) return <Text>Item not found</Text>;

    const { model, merk } = motor;
    const imageSrc = imageMap[merk] || motor.image;

    const handleDecrease = () => {
        if (cartItems[itemId] > 1) {
            removeFromCart(itemId);
        }
    };

    const handleIncrease = () => {
        addToCart(itemId);
    };

    const handleChange = (e) => {
        const newCount = Math.max(Number(e.target.value), 1);
        updateCartItemCount(newCount, itemId);
    };

    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            mb={6}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="sm"
            spacing={{ base: 4, md: 6 }}
        >
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                flex={2}
                mb={{ base: 4, md: 0 }}
            >
                <Image
                    boxSize="120px"
                    objectFit="cover"
                    src={imageSrc}
                    alt={model}
                    borderRadius="md"
                    mr={4}
                />
                <VStack align="start" spacing={1} textAlign="left">
                    <Text fontWeight="bold" fontSize="lg">
                        {merk}
                    </Text>
                    <Text fontSize="md">{model}</Text>
                </VStack>
            </Flex>

            <Flex
                direction="column"
                align="center"
                flex={10}
                mb={{ base: 4, md: 0 }}
                mx={{ base: 0, md: 4 }}
            >
                <Text mb={2} fontWeight="bold" fontSize="md">
                    Days
                </Text>
                <HStack spacing={2}>
                    <Button
                        size="sm"
                        onClick={handleDecrease}
                        colorScheme="red"
                        isDisabled={cartItems[itemId] <= 1}
                    >
                        -
                    </Button>
                    <Input
                        value={cartItems[itemId] || 1}
                        onChange={handleChange}
                        w="60px"
                        size="sm"
                        type="number"
                        textAlign="center"
                        min="1"
                    />
                    <Button
                        size="sm"
                        onClick={handleIncrease}
                        colorScheme="green"
                    >
                        +
                    </Button>
                </HStack>
                <IconButton
                    aria-label="Remove from cart"
                    icon={<FaTrash />}
                    size="sm"
                    colorScheme="red"
                    mt={2}
                    onClick={() => removeItemFromCart(itemId)}
                />
            </Flex>
            <Flex
                align="center"
                justify="flex-end"
                flex={1}
                mb={{ base: 4, md: 0 }}
            >
                <Text fontWeight="bold" fontSize="lg">
                    Total: €
                    {(
                        (cartItems[itemId] || 1) *
                        parseFloat(motor.huurprijs_per_dag)
                    ).toFixed(2)}
                </Text>
            </Flex>
        </Flex>
    );
};
