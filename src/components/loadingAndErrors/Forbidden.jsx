import { Text, Highlight, Image, Center, Flex } from "@chakra-ui/react";
import errorImg from "../../assets/errorTransparent.png";

export default function Forbidden() {
    return (
        <Center data-cy="403Forbidden_page">
            <Flex direction="column" align="center">
                <Image src={errorImg} alt="Forbidden" />
                <Text m={8} fontSize="4xl">
                    <Highlight
                        query="403"
                        styles={{ color: "red.500", fontWeight: "bolder" }}
                    >
                        403 Forbidden
                    </Highlight>
                </Text>
                <Text fontSize="lg" color="gray.500" mt={4}>
                    Sorry, you do not have permission to view this page.
                </Text>
            </Flex>
        </Center>
    );
}
