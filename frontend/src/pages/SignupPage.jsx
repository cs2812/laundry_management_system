import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SignupPage = ({ reg, setLogin }) => {
  const redirect = () => {
    setLogin(!reg);
  };

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
            <Input placeholder="Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input placeholder="Mobile" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" />
          </FormControl>
          <Button w="100%" mt="10px" colorScheme="blue">
            Register
          </Button>
        </Box>

        {/*<---Form Footer---->*/}
        <Box textAlign={"center"} p="1rem">
          <Text onClick={redirect}>Login?</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
