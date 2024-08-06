import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

export default function RentABikePage() {
    return (
        <Container maxW="container.md" py={10}>
            <Box textAlign="center">
                <Heading as="h1" size="xl" mb={4}>
                    Rent A Bike
                </Heading>
                <Text fontSize="lg" mb={6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus imperdiet, nulla nec cursus dapibus, urna metus
                    iaculis mauris, ut laoreet odio leo eu ligula. Donec sed
                    fermentum magna. Quisque vitae varius libero. Nulla
                    facilisi. Curabitur in interdum felis. Vestibulum ac nibh ac
                    nunc tincidunt cursus non sit amet metus. Pellentesque ac
                    neque eget erat fermentum fringilla.
                </Text>
                <Text fontSize="lg">
                    Morbi laoreet mauris ut tortor sodales, a interdum sapien
                    tincidunt. Mauris vehicula, nisi ac vehicula consequat,
                    risus quam efficitur risus, eu dapibus urna justo nec lorem.
                    Vestibulum varius vitae urna eget iaculis. Duis sit amet
                    fermentum ex. Fusce scelerisque orci sed neque tempor, nec
                    fermentum odio pretium. Aenean auctor venenatis urna, at
                    consequat nunc eleifend ut. Donec hendrerit nisi at ligula
                    cursus, a cursus ligula lacinia.
                </Text>
            </Box>
        </Container>
    );
}
