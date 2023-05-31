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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {isAuth} =useSelector((store)=>store.authReducer)
  const navigate = useNavigate()
  let data = [
    { count: 1, title: "New Request", colour: "#fed144" },
    { count: 2, title: "Accept!", colour: "#2db3e5" },
    { count: 3, title: "Inprocess!", colour: "#17c22e" },
    { count: 4, title: "Finish!", colour: "#fc2747" },
  ];
  let LaundryPrice = [
    { name: "Top Wear Laundry Price", price: 12 },
    { name: "Bootom Wear Laundry Price", price: 22 },
    { name: "Woolen Cloth Laundry Price", price: 20 },
  ];
  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
  },[isAuth])
  
  return (
    <Box p="1rem" w="80%">
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

        <Box>
          <TableContainer>
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
                <Td fontWeight={500} border={"2px solid #f2f2f2"}>
                  Other Price
                </Td>
                <Td border={"2px solid #f2f2f2"}>
                  other price depand upon cloth varity(other than above three
                  category)
                </Td>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
