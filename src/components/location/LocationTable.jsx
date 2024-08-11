import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const LocationTable = ({ locations, onDelete }) => (
    <Table variant="simple">
        <Thead>
            <Tr>
                <Th>Name</Th>
                <Th>Street</Th>
                <Th>House Number</Th>
                <Th>Postal Code</Th>
                <Th>City</Th>
                <Th>Actions</Th>
            </Tr>
        </Thead>
        <Tbody>
            {locations.map((location) => (
                <Tr key={location.id}>
                    <Td>{location.naam}</Td>
                    <Td>{location.straat}</Td>
                    <Td>{location.huisnummer}</Td>
                    <Td>{location.postcode}</Td>
                    <Td>{location.stad}</Td>
                    <Td>
                        <IconButton
                            icon={<DeleteIcon />}
                            colorScheme="red"
                            aria-label="Delete location"
                            onClick={() => onDelete(location)}
                        />
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
);

export default LocationTable;
