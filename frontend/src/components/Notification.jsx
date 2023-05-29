import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Notification = () => {
  const handleLogout = () => {};
  return (
    <Menu>
      <MenuButton
        colorScheme="white"
        color="#d0d6db"
        as={Button}
        //   rightIcon={<BiChevronDown />}
      >
        <Box cursor={"pointer"}>
          <Text
            position={"absolute"}
            bgColor={"red"}
            as="samp"
            fontSize={"12px"}
            color={"white"}
            // border={"1px solid"}
            borderRadius={"50%"}
            pl="0.3rem"
            pr="0.3rem"
          >
            {1}
          </Text>
          <IoMdNotificationsOutline size="30px" />
        </Box>
      </MenuButton>
      <MenuList color={"black"} w={"300px"}>
        <MenuItem>
          <Flex justifyContent={"space-between"}>
            <Box w="250px">
              <Text fontSize={"13px"} fontWeight={"500"}>
                {"Notifications"}
              </Text>
            </Box>
            <Text>
              <RxCross2 size="18px" />
            </Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Notification;
