import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const IntroText = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="#3A1E19"
      padding="20px"
    >
      <Text fontSize="2xl" fontWeight="bold" color="white">
        Welkom op Outlaw Road Warriors!
      </Text>
      <Text fontSize="lg" color="white">
        Ontdek onze geweldige collectie motoren en laat je inspireren.
      </Text>
    </Flex>
  );
};

export default IntroText;
