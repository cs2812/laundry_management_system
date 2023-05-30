import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menus from "./Menus";
import Notification from "./Notification";

const Navbar = () => {
  return (
    <Flex
      boxShadow="md"
      bgColor={"#2c5883"}
      justifyContent={"space-between"}
      p={"0.6rem"}
      color={"#d0d6db"}
    >
      <Box display={"flex"}>
        <Text fontSize={"2xl"}>Laundry Management system </Text>
        <Text ml={"10px"} mt="13px">
          <GiHamburgerMenu />
        </Text>
      </Box>
      <Flex>
        <Notification />
        <Box>
          <Menus />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
