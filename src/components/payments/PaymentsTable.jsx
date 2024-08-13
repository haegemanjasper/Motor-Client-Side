import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const PaymentsTable = ({ payments, onDelete }) => (
    <Table variant="simple">
        <Thead>
            <Tr>
                <Th>Location</Th>
                <Th>Amount</Th>
                <Th>Payment Method</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
            </Tr>
        </Thead>
        <Tbody>
            {payments.map((payment) => (
                <Tr key={payment.id}>
                    <Td>{payment.huurlocatieNaam || "Unknown"}</Td>
                    <Td>{payment.bedrag}</Td>
                    <Td>{payment.betaalmethode}</Td>
                    <Td>{new Date(payment.datum).toLocaleDateString()}</Td>
                    <Td>
                        <IconButton
                            icon={<DeleteIcon />}
                            colorScheme="red"
                            aria-label="Delete payment"
                            onClick={() => onDelete(payment)}
                        />
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
);

export default PaymentsTable;
