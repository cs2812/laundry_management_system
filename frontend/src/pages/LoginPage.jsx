import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.authReducer);

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
            <Input placeholder="Email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" />
          </FormControl>
          <Button w="100%" mt="10px" colorScheme="blue">
            Login
          </Button>
        </Box>

        {/*<---Form Footer---->*/}
        <Box textAlign={"center"} p="0.5rem" pb="0.5rem">
          <Text cursor={"pointer"} color={"blue"} onClick={redirect}>
            Create New Account?
          </Text>
          <Text cursor={"pointer"} color={"blue"}>
            Forget Password?
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
