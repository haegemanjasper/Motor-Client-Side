import { Box, Center, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            py={2}
            bg="#516845"
            borderTopWidth={1}
            borderTopColor="black"
            p={4}
            position="fixed"
            bottom={0}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Center>
                <Text>
                    &copy; 2024 Jasper's first motorsite. All rights reserved.
                </Text>
            </Center>
        </Box>
    );
}
