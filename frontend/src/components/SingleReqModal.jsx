import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const SingleReqModal = (props) => {
  let data = Object.entries(props.data);
  let { username } = useSelector((store) => store.authReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size="sm" onClick={onOpen}>
        View
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Request Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Filds</Th>
                    <Th>Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data &&
                    data.map((ele, i) => (
                      <Tr key={i}>
                        <Td>
                          {ele[0] === "_id"
                            ? "RequestId"
                            : ele[0] === "userId"
                            ? "Name"
                            : ele[0]}
                        </Td>
                        <Td>{ele[0] === "userId" ? username : ele[1]}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SingleReqModal;
