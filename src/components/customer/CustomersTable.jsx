import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const CustomersTable = ({ customers, onDelete }) => (
    <Table variant="simple">
        <Thead>
            <Tr>
                <Th>Name</Th>
                <Th>First Name</Th>
                <Th>Email</Th>
                <Th>Street</Th>
                <Th>House Number</Th>
                <Th>Postal Code</Th>
                <Th>City</Th>
                <Th>Actions</Th>
            </Tr>
        </Thead>
        <Tbody>
            {customers.map((customer) => (
                <Tr key={customer.id}>
                    <Td>{customer.naam}</Td>
                    <Td>{customer.voornaam}</Td>
                    <Td>{customer.email}</Td>
                    <Td>{customer.straat}</Td>
                    <Td>{customer.huisnummer}</Td>
                    <Td>{customer.postcode}</Td>
                    <Td>{customer.stad}</Td>
                    <Td>
                        <IconButton
                            icon={<DeleteIcon />}
                            colorScheme="red"
                            aria-label="Delete customer"
                            onClick={() => onDelete(customer)}
                        />
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
);

export default CustomersTable;
