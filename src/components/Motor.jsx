import React from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";

const Motors = ({ id, name, image, price, available }) => {
  return (
    <Box
      width="30%"
      padding="4"
      mb="4"
      border="1px"
      borderRadius="md"
      borderColor="brown.300"
      marginRight="1%"
    >
      <Flex direction="column" align="center">
        <Box mb="3">
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "250px",
              maxHeight: "250px",
            }}
          />
        </Box>
        <Box mb="2">
          <strong>{name}</strong>
        </Box>
        <Box mb="3">
          <p>Price/day: {price}</p>
          <p>Available: {available ? "Yes" : "No"}</p>
        </Box>
        <Flex alignItems="center">
          <Text as="p" color="red.500" cursor="pointer">
            MORE INFO
          </Text>
          <Button marginLeft="200px" colorScheme="red">
            BOOK
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Motors;
