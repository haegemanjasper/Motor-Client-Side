import {
    NumberInput, NumberInputField, NumberInputStepper, 
    NumberIncrementStepper, NumberDecrementStepper
} from "@chakra-ui/react";

export default function PaginationOffsetInput({ onChange, minValue, maxValue, defaultValue }) {

    return (
        <NumberInput m={1} w={28} focusBorderColor="red.100"
            min={minValue}
            max={maxValue}
            defaultValue={defaultValue}
            onChange={(value) => onChange(value)}
        >
            <NumberInputField data-cy="pagination_go_to_page_input"/>
            <NumberInputStepper>
                <NumberIncrementStepper data-cy="pagination_go_to_page_increment"/>
                <NumberDecrementStepper data-cy="pagination_go_to_page_decrement"/>
            </NumberInputStepper>
        </NumberInput>
    );
}
