import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { sendOTP } from "../store/auth/otpAction";

const SendOTP = () => {
  const { isOTPsent } = useSelector((store) => store.authReducer);
  const EmailForm = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState({
    email: "",
    otp: `${Math.floor(1000 + Math.random() * 9000)}`,
  });
  const handleSendOTP = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        EmailForm.current,
        process.env.REACT_APP_ACCOUNT_ID
      )
      .then(
        (result) => {
          dispatch(sendOTP(form, toast));
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleCancleRequest = () => {
    setForm({
      userId: "",
      email: "",
      otp: "",
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
          {/*<---------Sending HTML to user Email------->*/}
          <form ref={EmailForm} style={{ display: "none" }}>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              defaultValue={form.email || ""}
            />
            <input name="message" defaultValue={form.otp || ""} />
          </form>
          {/*<---------Visibel Form for User------->*/}
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              name="user_email"
              placeholder="Enter your valid email address"
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
