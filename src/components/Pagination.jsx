import { Flex } from "@chakra-ui/react";
import PaginationOffsetButtonNavigation from "./pagination/PaginationOffsetButtonNavigation";
import PaginationOffsetInput from "./pagination/PaginationOffsetInput";
import PaginationSelectLimit from "./pagination/PaginationSelectLimit";
import PaginationPageDisplay from "./pagination/PaginationPageDisplay";

export default function Pagination({ searchParams, setSearchParams, totalPages, results }) {

    function handleFirstPage() {
        searchParams.set("offset", 1);
        setSearchParams(searchParams);
    }

    function handlePreviousPage() {
        searchParams.set("offset", Math.max(1, Number(searchParams.get("offset") - 1)));
        setSearchParams(searchParams);
    }

    function handleNextPage() {
        searchParams.set("offset", Math.min(totalPages, Number(searchParams.get("offset")) + 1));
        setSearchParams(searchParams);
    }

    function handleLastPage() {
        searchParams.set("offset", totalPages);
        setSearchParams(searchParams);
    }

    function handleGoTo(page) {
        if (page <= totalPages) {
            searchParams.set("offset", page);
            setSearchParams(searchParams);
        }
    }

    function handleSelect(limit) {
        searchParams.set("limit", limit);

        const totalPages = Math.ceil(results / limit);
        if (Number(searchParams.get("offset")) > totalPages) {
            searchParams.set("offset", totalPages);
        }

        setSearchParams(searchParams);
    }

    return (
        <Flex 
            justifyContent="center" 
            alignItems="center" w="100%" p={0} m={0}
            direction={{ base: "column-reverse", md: "row" }}
        >
            <PaginationOffsetButtonNavigation 
                onFirstPage={() => handleFirstPage()} 
                onPreviousPage={() => handlePreviousPage()}
                onNextPage={() => handleNextPage()}
                onLastPage={() => handleLastPage()}
                canGetPreviousPage={Number(searchParams.get("offset")) > 1}
                canGetNextPage={Number(searchParams.get("offset")) < totalPages}
            >
                <PaginationPageDisplay 
                    currentPage={searchParams.get("offset")} 
                    totalPages={String(totalPages)} 
                />
                <PaginationOffsetInput 
                    onChange={(page) => handleGoTo(page)} 
                    minValue={1} 
                    maxValue={totalPages} 
                    defaultValue={searchParams.get("offset")} 
                />
                <PaginationSelectLimit
                    onSelect={(limit) => handleSelect(limit)}
                    value={searchParams.get("limit")}
                    limits={[10, 20, 30, 40, 50]}
                />
            </PaginationOffsetButtonNavigation>
        </Flex>
    );
}
