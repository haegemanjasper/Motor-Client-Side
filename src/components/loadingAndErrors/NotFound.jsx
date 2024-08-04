import { Text, Highlight, Image, Center, Flex } from "@chakra-ui/react";
import errorImg from "/errorTransparent.png";

export default function NotFound() {
    return (
        <Center data-cy="404NotFound_page">
            <Flex direction="column">
                <Image src={errorImg} alt="Error" />
                <Text m={8} fontSize="4xl">
                    <Highlight query="404" styles={{ color: "red.500", fontWeight: "bolder" }}>
                        404 Page Not Found
                    </Highlight>
                </Text>
            </Flex>
        </Center>
    );
}
