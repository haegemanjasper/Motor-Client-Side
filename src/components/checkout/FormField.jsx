import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from "@chakra-ui/react";

const FormField = ({
    name,
    value,
    onChange,
    placeholder,
    label,
    error,
    type = "text",
}) => (
    <FormControl mb="4" isInvalid={error}>
        <FormLabel>{label}</FormLabel>
        <Input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
);

export default FormField;
