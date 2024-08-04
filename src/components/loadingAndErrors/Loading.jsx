import { Spinner, Text, Center } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Center data-cy="loading_page">
            <Text fontSize="3xl" m={4}>Loading...</Text>
            <Spinner
                thickness="7px"
                speed="1s"
                size="xl"
                emptyColor="gray.200"
                color="#F31515"
            />
        </Center>
    );
}
