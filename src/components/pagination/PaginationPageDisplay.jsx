import { Text } from "@chakra-ui/react";

export default function PaginationPageDisplay({ currentPage, totalPages }) {

    return (
        <Text m={1} >
            Page{" "}
            <Text fontWeight="bold" as="span" data-cy="pagination_page_display_current">
                {currentPage}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span" data-cy="pagination_page_display_total">
                {totalPages}
            </Text>
        </Text>
    );
}
