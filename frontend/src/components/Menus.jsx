import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Menus = () => {
  // console.log(data)
  const handleLogout = () => {};
  return (
    <Menu>
      <MenuButton
        colorScheme="white"
        color="#d0d6db"
        as={Button}
        rightIcon={<BiChevronDown />}
      >
        <Flex gap="5px">
          <CgProfile size="28px" />
          <Text fontSize={"20px"}>Name</Text>
        </Flex>
      </MenuButton>
      <MenuList marginLeft={"4.6%"} color={"black"}>
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Menus;
