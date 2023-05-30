import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { BsFillFolderFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  let nav = [
    {
      route: "Dashboard",
      icon: <AiFillDashboard size="20px" />,
      arrow: "",
      navigation: "/",
    },
    {
      route: "Laundry Request",
      icon: <BsFillFolderFill size="20px" />,
      arrow: <BiChevronRight size={"20px"} />,
      navigation: "/laundry-request",
    },
    {
      route: "Request Status",
      icon: <BsFillFolderFill size="20px" />,
      arrow: <BiChevronRight size={"20px"} />,
      navigation: "/request-status",
    },
  ];
  return (
    <Box w={"20%"} h="90.5vh" bgColor={"#234465"} color={"#d0d6db"}>
      {nav.map((ele, i) => (
        <Flex
          key={i}
          p="1rem"
          pr={"30px"}
          cursor={"pointer"}
          justifyContent={"space-between"}
          _hover={{ bg: "gray.400", color: "black" }}
          onClick={() => {
            navigate(ele.navigation);
          }}
        >
          <Flex>
            {ele.icon}
            <Text ml="6px" mt="-1.5" fontWeight={"400"} fontSize={"xl"}>
              {ele.route}
            </Text>
          </Flex>
          <Text mt="3px">{ele.arrow}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default SideBar;
