import { isAxiosError } from "axios";
import { Text, Image, Center, Flex, Button, Link } from "@chakra-ui/react";
import errorImg from "/errorTransparent.png";

export default function Error({ error }) {
    if (error) {
        return (
            <Center data-cy="error_page">
                <Flex direction="column">
                    <Image src={errorImg} alt="Error" />
                    <Text fontSize="4xl" m={4}>Something's wrong here...</Text>
                    {isAxiosError(error) ?
                        error.response?.data?.message || error.message
                        :
                        error.message || JSON.stringify(error)
                    }
                    <Center>
                        <Link href="/#" >
                            <Button colorScheme="red" pr="6em" pl="6em" m={4} data-cy="error_page_btn_return">
                                Return
                            </Button>
                        </Link>
                    </Center>
                </Flex>
            </Center>
        );
    }

    return null;
}
