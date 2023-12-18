import React from "react";
import { Box, Flex, Text, Button, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "./ShoppingCartContext";

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Flex align="center">
        <Box>
          <FaShoppingCart size={24} />
        </Box>
        <Text fontSize="lg" fontWeight="bold" ml={2}>
          Winkelmandje
        </Text>
        <Badge colorScheme="red" ml={2}>
          {cartItems.length}
        </Badge>
      </Flex>

      {cartItems.length > 0 ? (
        <Box mt={4}>
          <Text fontWeight="bold">Inhoud van het winkelmandje:</Text>
          {cartItems.map((item) => (
            <Text key={item.id}>{item.name}</Text>
          ))}
          <Button colorScheme="teal" mt={2}>
            Afrekenen
          </Button>
        </Box>
      ) : (
        <Text mt={4}>Uw winkelmandje is leeg.</Text>
      )}
    </Box>
  );
};

export default ShoppingCart;
