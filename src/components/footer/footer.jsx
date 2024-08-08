import { Box, Center, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            bg="#2a70b2"
            borderTopWidth={1}
            borderTopColor="black"
            p={4}
            width="100%"
        >
            <Center>
                <Text color="white">
                    &copy; 2024 Jasper's first motorsite. All rights reserved.
                </Text>
            </Center>
        </Box>
    );
}
