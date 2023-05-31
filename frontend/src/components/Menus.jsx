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
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/auth/auth.Action";
import { useNavigate } from "react-router-dom";

const Menus = () => {
  // console.log(data)
  const navigate = useNavigate();
  const { username } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };
  const redirect = () => {
    navigate("/profile");
  };
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
          <Text fontSize={"20px"}>{username}</Text>
        </Flex>
      </MenuButton>
      <MenuList marginLeft={"4.6%"} color={"black"}>
        <MenuItem onClick={redirect}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Menus;
