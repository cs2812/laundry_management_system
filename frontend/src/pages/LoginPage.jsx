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
import { userLogin } from "../store/auth/auth.Action";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.authReducer);
  const toast = useToast()

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    dispatch(userLogin(form,toast));
  };
  const redirect = () => {
    navigate("/registration");
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <Box bgColor={"#f2f2f2"} h={"100vh"}>
      <Box
        position={"absolute"}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="25%"
        borderRadius={"10px"}
        bgColor={"white"}
        shadow={"base"}
      >
        {/*<---Form Heading---->*/}
        <Box textAlign={"center"} shadow={"base"} p="0.5rem">
          <Text fontSize={"2xl"}>LMS || User Login</Text>
        </Box>

        {/*<---Form---->*/}
        <Box p="1rem">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Password"
            />
          </FormControl>
          <Button onClick={handleLogin} w="100%" mt="10px" colorScheme="blue">
            Login
          </Button>
        </Box>

        {/*<---Form Footer---->*/}
        <Box textAlign={"center"} p="0.5rem" pb="0.5rem">
          <Text cursor={"pointer"} color={"blue"} onClick={redirect}>
            Create New Account?
          </Text>
          <Text onClick={()=>{navigate("/request-otp")}} cursor={"pointer"} color={"blue"}>
            Forget Password?
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
