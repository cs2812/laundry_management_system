import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../store/app/app_Action";
import SingleReqModal from "../components/SingleReqModal";
import { getNotification } from "../store/notification/notAction";

const RequestStatus = () => {
  const { requests } = useSelector((store) => store.appReducer);
  const { userId } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequest(userId));
    dispatch(getNotification(userId));
  }, []);

  return (
    <Box w="80%" p="1rem" bg="#f7f7f7">
      <TableContainer bg="whiteAlpha.800" shadow={"base"}>
        <Table variant="simple">
          <TableCaption>Laundry Request Status</TableCaption>
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th w="30%" border={"2px solid #f7f7f7"}>
                request id
              </Th>
              <Th border={"2px solid #f7f7f7"}>Pick Up date</Th>
              <Th border={"2px solid #f7f7f7"}>status</Th>
              <Th textAlign={"center"}>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            {requests &&
              requests.map((ele, i) => (
                <Tr key={i}>
                  <Td>{i + 1}</Td>
                  <Td w="30%" border={"2px solid #f7f7f7"}>
                    {ele._id}
                  </Td>
                  <Td border={"2px solid #f7f7f7"}>{ele.pickupDate}</Td>
                  <Td
                    color={ele.status === "pending" ? "#f9c528" : "#09b6f5"}
                    border={"2px solid #f7f7f7"}
                  >
                    {ele.status}
                  </Td>
                  <Td color={"blue"} cursor={"pointer"} textAlign={"center"}>
                    <SingleReqModal data={ele} />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RequestStatus;
