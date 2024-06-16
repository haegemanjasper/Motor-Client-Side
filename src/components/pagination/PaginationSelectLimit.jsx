import { Select } from "@chakra-ui/react";

export default function PaginationSelectLimit({ onSelect, value, limits }) {

    return (
        <Select m={1} w={32}
            value={value}
            onChange={(e) => onSelect(Number(e.target.value))}
            data-cy="pagination_select_limit"
            focusBorderColor="red.100"
        >
            {limits.map((limit) => (
                <option key={limit} value={limit} data-cy={`pagination_select_limit_option_${limit}`}>
                    Show {limit}
                </option>
            ))} 
        </Select>
    );
}
