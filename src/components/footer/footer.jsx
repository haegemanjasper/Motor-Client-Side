import { Box, Center, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            bg="#516845"
            borderTopWidth={1}
            borderTopColor="black"
            p={2}
            position="fixed"
            bottom={0}
            width="100%"
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
