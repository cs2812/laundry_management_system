import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword, changeProfile } from "../store/auth/auth.Action";

const Profile = () => {
  const data = useSelector((store) => store.authReducer);
  const dispatch = useDispatch()
  const navitate = useNavigate()
  const [form, setName] = useState({
    userId:data.userId,
    newUsername:data.username
  });
  const [password , setPassword]=useState({
    userId:data.userId,
    currentPassword:"",
    newPassword:""
  })
  const handleChangePassword=()=>{
    // console.log(password)
    dispatch(changePassword(password))
  }
  const handleChangeProfile=()=>{
    // console.log(form)
    dispatch(changeProfile(form))
  }

  useEffect(()=>{
    if(!data.isAuth){
      navitate("/login")
    }

  },[data.isAuth])

  return (
    <Box bgColor="#f7f7f7" w="80%">
      {/* <------Profile Name----->*/}
      <Flex p="1rem">
        <Box p="1rem" w="30%">
          <Text fontSize={"2xl"} fontWeight={"500"}>
            Profile Information
          </Text>
          <Text color="gray">Update your Profile name</Text>
        </Box>
        <Box w="65%" p="1rem" bgColor="white" borderRadius={"10px"}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={(e) => setName({...form,newUsername:e.target.value})}
              fontWeight={"500"}
              value={form.newUsername}
              placeholder="Enter name"
            />
          </FormControl>
          <Button onClick={handleChangeProfile} colorScheme="blue" mt="10px" float={"right"}>
            Save
          </Button>
        </Box>
      </Flex>
      <Box p="1rem">
        <Divider fontSize={"2xl"} color="white" />
      </Box>

      {/* <------User Password Change----->*/}
      <Flex p="1rem">
        <Box p="1rem" w="30%">
          <Text fontSize={"2xl"} fontWeight={"500"}>
            Update Password
          </Text>
          <Text color="gray">
            Ensure your account is using a long, random password to stay secure.
          </Text>
        </Box>
        <Box w="65%" p="1rem" bgColor="white" borderRadius={"10px"}>
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input
              onChange={(e) => setPassword({...password,currentPassword:e.target.value})}
              fontWeight={"500"}
              placeholder="Enter current Password"
            />
          </FormControl>
          <FormControl mt="20px">
            <FormLabel>New Password</FormLabel>
            <Input
              onChange={(e) => setPassword({...password,newPassword:e.target.value})}
              fontWeight={"500"}
              placeholder="Enter new password"
            />
          </FormControl>
          <Button onClick={handleChangePassword} colorScheme="blue" mt="10px" float={"right"}>
            Save
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
