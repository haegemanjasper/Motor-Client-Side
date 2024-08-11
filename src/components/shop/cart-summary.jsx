import React, { useContext } from "react";
import { Box, Image, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { ShopContext } from "../../context/shop-context";
import imageMap from "../../assets/imageMap";

const CartSummary = () => {
    const { cartItems, motors } = useContext(ShopContext);

    const calculateTotal = () => {
        let total = 0;
        Object.keys(cartItems).forEach((itemId) => {
            const motor = motors.find((motor) => motor.id === parseInt(itemId));
            total += (cartItems[itemId] || 0) * (motor?.huurprijs_per_dag || 0);
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
                    const motor = motors.find(
                        (motor) => motor.id === parseInt(itemId)
                    );
                    if (!motor || (cartItems[itemId] || 0) <= 0) return null;

                    // Verkrijg het juiste afbeeldingspad uit de imageMap
                    const imageSrc =
                        imageMap[motor.merk] ||
                        motor.image ||
                        "/path/to/default-image.jpg";

                    return (
                        <HStack
                            key={itemId}
                            width="100%"
                            justifyContent="space-between"
                        >
                            <Image
                                boxSize="50px"
                                objectFit="cover"
                                src={imageSrc}
                                alt={motor.model}
                            />
                            <Text>{motor.model}</Text>
                            <Text fontWeight="bold">
                                €
                                {(
                                    cartItems[itemId] * motor.huurprijs_per_dag
                                ).toFixed(2)}
                            </Text>
                        </HStack>
                    );
                })}
            </VStack>
            <Divider my="4" />
            <Text fontSize="xl" fontWeight="bold">
                Total: €{calculateTotal()}
            </Text>
        </Box>
    );
};

export default CartSummary;
