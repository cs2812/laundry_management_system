import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../store/auth/otpAction";

const SendOTP = () => {
  const { isOTPsent } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    code: `${Math.floor(1000 + Math.random() * 9000)}`,
  });
  const handleSendOTP = () => {
    // dispatch(sendOTP(form))
  };
  const handleCancleRequest = () => {
    setForm({
      userId: "",
      email: "",
      code: "",
    });
    navigate("/login");
  };
  useEffect(() => {
    if (isOTPsent) {
      navigate("/verify-otp");
    }
  }, [isOTPsent]);
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
        {/*<---Form---->*/}
        <Box p="2rem">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter email"
            />
          </FormControl>
          <Box float={"right"} p="1rem 0rem">
            <Button onClick={handleSendOTP} colorScheme="whatsapp" mr="10px">
              Send OTP
            </Button>
            <Button onClick={handleCancleRequest} colorScheme="red">
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SendOTP;
