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
        >
            <Flex align="center" flex={2}>
                <Image
                    boxSize="120px"
                    objectFit="cover"
                    src={imageSrc}
                    alt={model}
                    borderRadius="md"
                    mr={4}
                />
                <Box>
                    <Text fontWeight="bold" fontSize="lg">
                        {merk} {model}
                    </Text>
                </Box>
            </Flex>

            <Flex
                direction="column"
                align="center"
                flex={1}
                mt={{ base: 4, md: 0 }}
            >
                <HStack>
                    <Button
                        size="sm"
                        onClick={() =>
                            cartItems[itemId] > 1
                                ? removeFromCart(itemId)
                                : null
                        }
                        colorScheme="red"
                        isDisabled={cartItems[itemId] <= 1}
                    >
                        -
                    </Button>
                    <Input
                        value={cartItems[itemId] || 1}
                        onChange={(e) =>
                            updateCartItemCount(
                                Math.max(Number(e.target.value), 1),
                                itemId
                            )
                        }
                        w="60px"
                        size="sm"
                        type="number"
                        textAlign="center"
                        min="1"
                    />
                    <Button
                        size="sm"
                        onClick={() => addToCart(itemId)}
                        colorScheme="green"
                    >
                        +
                    </Button>
                </HStack>
                <IconButton
                    aria-label="Verwijder uit winkelwagen"
                    icon={<FaTrash />}
                    size="sm"
                    colorScheme="red"
                    mt={2}
                    onClick={() => removeItemFromCart(itemId)} // Verwijder het item met de nieuwe functie
                />
            </Flex>

            <Flex
                align="center"
                justify="flex-end"
                flex={1}
                mt={{ base: 4, md: 0 }}
            >
                <Text fontWeight="bold" fontSize="lg">
                    Totaal: €
                    {(
                        (cartItems[itemId] || 1) *
                        parseFloat(motor.huurprijs_per_dag)
                    ).toFixed(2)}
                </Text>
            </Flex>
        </Flex>
    );
};
