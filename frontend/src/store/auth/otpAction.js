import axios from "axios";
import { OTP_REQUEST_SENT, OTP_REQUEST_VERIFIED } from "./auth_Type";

const baseurl = "http://localhost:8080/otp";

export const sendOTP = (form) => (dispatch) => {
  axios
    .post(`${baseurl}/request`, form)
    .then((res) => {
      dispatch({ type: OTP_REQUEST_SENT, payload: res.data.data });
      alert("OTP sent on your email. Please check");
    })
    .catch((error) => {
      console.log("Error", error);
      alert("Process failed");
    });
};
export const verifyOTP = (form) => (dispatch) => {
  axios
    .post(`${baseurl}/verify`, form)
    .then((res) => {
      dispatch({ type: OTP_REQUEST_VERIFIED, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error", error);
      alert("Invaild OTP");
    });
};
