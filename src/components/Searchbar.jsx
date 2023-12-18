import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

const SearchBar = ({ items, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (items) {
      const filteredItems = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      onSearch(filteredItems);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [searchTerm, items, onSearch]);

  const handleClear = () => {
    setSearchTerm("");
    onSearch(items);
  };

  return (
    <Box>
      <InputGroup>
        <Input
          type="text"
          placeholder="Zoeken..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputRightElement>
          {searchTerm && (
            <IconButton
              aria-label="Clear search"
              icon={<CloseIcon />}
              onClick={handleClear}
            />
          )}
          <IconButton
            aria-label="Search"
            colorScheme="blue"
            icon={<SearchIcon />}
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
