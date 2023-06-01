import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Card = ({ count, title, colour }) => {
  const navigate = useNavigate();
  return (
    <Box
      shadow={"base"}
      color={"white"}
      borderRadius={"10px"}
      w="250px"
      bgColor={colour}
    >
      <Box h="70px" p={"1rem"}>
        <Text>
          {count} {title}
        </Text>
      </Box>
      <Divider color={"#f2f2f2"} />
      <Flex
        onClick={() => {
          navigate("/request-status");
        }}
        cursor={"pointer"}
        p="0.7rem 1rem"
        justifyContent={"space-between"}
      >
        <Text>View Details</Text>
        <Text>
          <BiChevronRight />
        </Text>
      </Flex>
    </Box>
  );
};
export default Card;
