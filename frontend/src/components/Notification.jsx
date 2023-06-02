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
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNotification,
  readNotification,
} from "../store/notification/notAction";

const Notification = () => {
  const { unRead, notifications } = useSelector((store) => store.notReducer);
  const { userId } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteNotification(id));
  };
  const handleReadNotification = () => {
    dispatch(readNotification(userId));
  };

  return (
    <Menu>
      <MenuButton
        colorScheme="white"
        color="#d0d6db"
        as={Button}
        onClick={handleReadNotification}
      >
        <Box cursor={"pointer"}>
          {unRead ? (
            <Text
              position={"absolute"}
              bgColor={"red"}
              as="samp"
              fontSize={"12px"}
              color={"white"}
              borderRadius={"50%"}
              pl="0.3rem"
              pr="0.3rem"
            >
              {unRead}
            </Text>
          ) : (
            ""
          )}
          <IoMdNotificationsOutline size="30px" />
        </Box>
      </MenuButton>
      <MenuList color={"black"} w={"350px"}>
        {notifications &&
          notifications.map((ele, i) => (
            <MenuItem key={i}>
              <Flex justifyContent={"space-between"}>
                <Box w="300px">
                  <Text fontSize={"12px"} fontWeight={"500"}>
                    {ele.message}
                  </Text>
                </Box>
                <Text
                  onClick={() => {
                    handleDelete(ele._id);
                  }}
                >
                  <RxCross2 size="18px" />
                </Text>
              </Flex>
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default Notification;
