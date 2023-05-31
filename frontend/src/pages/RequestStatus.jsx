import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const RequestStatus = () => {
  return (
    <Box w="80%" p="1rem" bg="#f7f7f7"> 
      <TableContainer bg="whiteAlpha.800" shadow={"base"}>
        <Table variant="simple">
          <TableCaption>Laundry Request Status</TableCaption>
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th w="30%" border={"2px solid #f7f7f7"}>request id</Th>
              <Th border={"2px solid #f7f7f7"} >Pick Up date</Th>
              <Th border={"2px solid #f7f7f7"}>status</Th>
              <Th textAlign={"center"}>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>yards</Td>
              <Td w="30%" border={"2px solid #f7f7f7"}>metres (m)</Td>
              <Td border={"2px solid #f7f7f7"} >0.91444</Td>
              <Td border={"2px solid #f7f7f7"}>0.91444</Td>
              <Td color={"blue"} cursor={"pointer"} textAlign={"center"}>View</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RequestStatus;
