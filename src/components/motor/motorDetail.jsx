import React from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import StarRating from "./starRating";

const Motors = ({
  merk,
  model,
  datum,
  huurprijs_per_dag,
  beschikbaarheid,
  rating,
}) => {
  const backendRating = rating;

  const brandImages = {
    BMW: "https://i.imgur.com/eHmVqri.png",
    Yamaha: "https://i.imgur.com/6RjflDi.png",
    "Harley Davidson": "https://i.imgur.com/ZAFPhyI.png",
    KTM: "https://i.imgur.com/kTAKUVv.jpg",
    Honda: "https://i.imgur.com/uPzBHD8.png",
    Kawasaki: "https://i.imgur.com/oY6HSGF.png",
  };

  const image = brandImages[merk] || "";

  return (
    <Box
      width="100%"
      padding="4"
      mb="4"
      border="1px"
      borderRadius="md"
      borderColor="brown.300"
      marginRight="1%"
      flexBasis="30%"
      flexShrink={0}
    >
      <Flex direction="column" align="center">
        <Box mb="1">
          <img
            src={image}
            alt={`${merk} ${model} - ${new Date(datum).toLocaleDateString()}`}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "250px",
            }}
          />
        </Box>
        <Box mb="2" marginRight="30px">
          <strong>{`${model}`}</strong>
        </Box>
        <Box mb="2" textAlign="center">
          <p>{merk}</p>
          <p>
            € <strong>{huurprijs_per_dag}</strong> / dag
          </p>
          <p>Beschikbaar: {beschikbaarheid ? "Ja" : "Nee"}</p>
          <Flex marginLeft="10px">
            <StarRating selectedStars={backendRating} totalStars={5} />
          </Flex>
        </Box>
        <Flex alignItems="center">
          <Text as="p" color="red.500" cursor="pointer" marginRight="100px">
            MEER INFO
          </Text>
          <Button marginLeft="100px" colorScheme="red">
            BOEK
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Motors;
