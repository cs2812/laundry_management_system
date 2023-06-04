import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/auth/auth.Action";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register } = useSelector((store) => store.authReducer);
  const toast = useToast()

  const [form, setForm] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const handleSignup = () => {
    dispatch(registerUser(form,toast));
  };
  const redirect = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (register) {
      navigate("/login");
    }
  }, [register]);

  return (
    <Box bgColor={"#f2f2f2"} h={"100vh"}>
      <Box
        position={"absolute"}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="25%"
        // border={"solid"}
        shadow={"base"}
        borderRadius={"10px"}
        bgColor={"white"}
      >
        {/*<---Form Heading---->*/}
        <Box textAlign={"center"} shadow={"base"} p="0.5rem">
          <Text fontSize={"2xl"}>LMS || User Registration</Text>
        </Box>

        {/*<---Form---->*/}
        <Box p="1rem">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={(e) => {
                setForm({ ...form, username: e.target.value });
              }}
              placeholder="Name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              placeholder="Email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input
              onChange={(e) => {
                setForm({ ...form, mobile: e.target.value });
              }}
              placeholder="Mobile"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              placeholder="Password"
            />
          </FormControl>
          <Button onClick={handleSignup} w="100%" mt="10px" colorScheme="blue">
            Register
          </Button>
        </Box>

        {/*<---Form Footer---->*/}
        <Box textAlign={"center"} p="1rem">
          <Text cursor={"pointer"} color={"blue"} onClick={redirect}>
            Login?
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
