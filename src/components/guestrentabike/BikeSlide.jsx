import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import RatingStars from "../motors/RatingStars";
import FlashBanner from "./FlashBanner";

const BikeSlide = ({ bike, onOpen, isLoggedIn }) => (
    <Box
        borderWidth={1}
        borderRadius="md"
        overflow="hidden"
        p={4}
        boxShadow="md"
        bg="white"
        height="400px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
    >
        <FlashBanner />
        <Box
            width="100%"
            height="200px"
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Image
                width="auto"
                height="100%"
                src={bike.image}
                alt={bike.name}
                borderRadius="md"
                objectFit="contain"
            />
        </Box>
        <Box
            width="100%"
            p={4}
            textAlign="center"
            bg="white"
            borderTopWidth={1}
            borderColor="gray.200"
            flexGrow={1}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box>
                <Heading as="h3" size="md" mb={2}>
                    {bike.name}
                </Heading>
                <Text fontSize="md" color="gray.600" mb={2}>
                    {bike.description}
                </Text>
            </Box>
            <RatingStars rating={bike.rating} />
            {!isLoggedIn && (
                <Button mt={4} colorScheme="blue" onClick={onOpen}>
                    Rent Now
                </Button>
            )}
        </Box>
    </Box>
);

export default BikeSlide;
