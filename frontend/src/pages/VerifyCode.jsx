import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const { userId, isOTPverified, isNewPassword } = useSelector((store) => store.authReducer);
  const navigate = useNavigate()
  const [code , setCode]=useState("")

  const [form, setForm] = useState({
    userId,
    newPassword:""
  });
  const handleSendCode = () => {
    console.log(code)
  };
  const handleSetNewPassword = () => {
    console.log(form)
  };

  useEffect(()=>{
    if(isNewPassword){
        navigate("/login")
    }

  },[isNewPassword])
  return (
    <Box bgColor={"#f2f2f2"} h={"100vh"}>
      <Box
        position={"absolute"}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="35%"
        borderRadius={"10px"}
        bgColor={"white"}
        shadow={"base"}
      >
        <Box p="1rem">
          <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"500"}>
            {" "}
            {isOTPverified ? "Enter new password" : "Verify OTP"}
          </Text>
          <Flex gap="20px" justifyContent={"center"} mt="20px">
            <HStack>
              <PinInput onChange={(e)=>{setCode(e)}}>
                <PinInputField/>
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <Button
              isDisabled={isOTPverified === true}
              onClick={handleSendCode}
              colorScheme="whatsapp"
            >
              Verify code
            </Button>
          </Flex>
        </Box>
        {/*<---Form---->*/}
        <Box p="1rem">
          <FormControl>
            <FormLabel>New password</FormLabel>
            <Input
              isDisabled={isOTPverified === false}
              onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
              placeholder="Enter new password"
            />
          </FormControl>
          <Box float={"right"} p="1rem 0rem">
            <Button
              isDisabled={isOTPverified === false}
              onClick={handleSetNewPassword}
              colorScheme="whatsapp"
              mr="10px"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerifyCode;
