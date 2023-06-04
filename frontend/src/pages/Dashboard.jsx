import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import Card from "../components/Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPrice, getRequest } from "../store/app/app_Action";
import { getNotification } from "../store/notification/notAction";

const Dashboard = () => {
  const { isAuth, userId } = useSelector((store) => store.authReducer);
  const {
    price,
    pendingRequest,
    confirmRequest,
    inprocessRequest,
    finishRequest,
  } = useSelector((store) => store.appReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  let data = [
    { count: pendingRequest, title: "New Request", colour: "#fed144" },
    { count: confirmRequest, title: "Accept!", colour: "#2db3e5" },
    { count: inprocessRequest, title: "Inprocess!", colour: "#17c22e" },
    { count: finishRequest, title: "Finish!", colour: "#fc2747" },
  ];
  let LaundryPrice = [
    { name: "Top Wear Laundry Price", price: price.topwear },
    { name: "Bootom Wear Laundry Price", price: price.bootomwear },
    { name: "Woolen Cloth Laundry Price", price: price.woolen },
  ];
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    } else {
      dispatch(getRequest(userId));
      dispatch(getNotification(userId));
      dispatch(getPrice());
    }
  }, [isAuth]);

  return (
    <Box p="1rem" w="80%" bg="#f7f7f7">
      {/* Request Status */}
      <Flex justifyContent={"space-between"}>
        {data.map((ele, i) => (
          <Card
            key={i}
            count={ele.count}
            title={ele.title}
            colour={ele.colour}
          />
        ))}
      </Flex>
      <Box>
        <Text mt="20px" fontSize={"3xl"} textAlign={"center"}>
          Laundry Price(Per Unit)
        </Text>

        <Box shadow={"md"}>
          <TableContainer bg="whiteAlpha.700">
            <Table variant="simple">
              <Tbody>
                {LaundryPrice.map((ele, i) => {
                  return (
                    <Tr key={i}>
                      <Td fontWeight={500} border={"2px solid #f2f2f2"}>
                        {ele.name}
                      </Td>
                      <Td border={"2px solid #f2f2f2"}>{ele.price}</Td>
                    </Tr>
                  );
                })}

                {/* Infromation of other type of cloth*/}
                <Tr>
                  <Td fontWeight={500} border={"2px solid #f2f2f2"}>
                    Other Price
                  </Td>
                  <Td border={"2px solid #f2f2f2"}>{price.other}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
