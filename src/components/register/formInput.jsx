import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from "@chakra-ui/react";

const FormInput = ({
    id,
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    error,
}) => (
    <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Input
            id={id}
            type={type}
            placeholder={placeholder}
            width="100%"
            value={value}
            onChange={onChange}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
);

export default FormInput;
