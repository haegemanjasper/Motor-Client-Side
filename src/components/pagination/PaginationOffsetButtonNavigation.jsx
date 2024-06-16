import {
    Flex, Tooltip, IconButton
} from "@chakra-ui/react";
import { 
    ArrowLeftIcon, ArrowRightIcon,
    ChevronLeftIcon, ChevronRightIcon
} from "@chakra-ui/icons";

export default function PaginationOffsetButtonNavigation({ 
    onFirstPage, onPreviousPage, onNextPage, onLastPage, 
    canGetPreviousPage, canGetNextPage,
    children
}) {

    return (
        <>
            <Flex m={1}>
                <Tooltip label="First Page">
                    <IconButton
                        onClick={() => onFirstPage()}
                        isDisabled={!canGetPreviousPage}
                        icon={<ArrowLeftIcon h={3} w={3}/>}
                        mr={4}
                        colorScheme="red"
                        data-cy="pagination_button_first_page"
                    />
                </Tooltip>
                <Tooltip label="Previous Page">
                    <IconButton
                        onClick={() => onPreviousPage()}
                        isDisabled={!canGetPreviousPage}
                        icon={<ChevronLeftIcon h={6} w={6}/>}
                        colorScheme="red"
                        data-cy="pagination_button_previous_page"
                    />
                </Tooltip>
            </Flex>
            {children}
            <Flex m={1} >
                <Flex>
                    <Tooltip label="Next Page">
                        <IconButton
                            onClick={() => onNextPage()}
                            isDisabled={!canGetNextPage}
                            icon={<ChevronRightIcon h={6} w={6}/>}
                            colorScheme="red"
                            data-cy="pagination_button_next_page"
                        />
                    </Tooltip>
                    <Tooltip label="Last Page">
                        <IconButton
                            onClick={() => onLastPage()}
                            isDisabled={!canGetNextPage}
                            icon={<ArrowRightIcon h={3} w={3}/>}
                            ml={4}
                            mr={4}
                            colorScheme="red"
                            data-cy="pagination_button_last_page"
                        />
                    </Tooltip>
                </Flex>
            </Flex>
        </>
    );
}
