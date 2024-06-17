import React, { useState } from "react";
import { Box, Flex, Input, Button, Select } from "@chakra-ui/react";

const Filter = ({ onApplyFilters }) => {
    const [filterValue, setFilterValue] = useState("");
    const [filterType, setFilterType] = useState("name");

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
    };

    const applyFilters = () => {
        onApplyFilters(filterType, filterValue);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            applyFilters();
        }
    };

    return (
        <Flex align="center" mb="4">
            <Box mr="2">
                <Select value={filterType} onChange={handleFilterTypeChange}>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                </Select>
            </Box>
            <Box mr="2">
                <Input
                    placeholder={`Filter by ${filterType}`}
                    value={filterValue}
                    onChange={handleFilterChange}
                    onKeyPress={handleKeyPress}
                />
            </Box>
            <Button onClick={applyFilters}>Apply</Button>
        </Flex>
    );
};

export default Filter;
