// import axios from "axios";
// import { OTP_REQUEST_SENT } from "./auth_Type";
// import nodemailer from "nodemailer";

const baseurl = "http://localhost:8080/otp";

export const sendOTP = (form) => (dispatch) => {
//   console.log("otpAction", form);

  // let res = setOTPOnEmail(form)
  // if(res){
  //     alert("OTP sent on email")
  // }
  //   axios
  //     .post(`${baseurl}/request`, form)
  //     .then((res) => {
  //       dispatch({ type: OTP_REQUEST_SENT, payload: res.data.data });
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //       alert("Process failed");
  //     });
};
export const verifyOTP = (form) => (dispatch) => {};

