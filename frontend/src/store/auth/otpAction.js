import axios from "axios";
import { OTP_REQUEST_SENT, OTP_REQUEST_VERIFIED } from "./auth_Type";
import { notify } from "../../utils";

const baseurl = "https://hyscaler-lms.onrender.com/otp";

export const sendOTP = (form, toast) => (dispatch) => {
  axios
    .post(`${baseurl}/request`, form)
    .then((res) => {
      dispatch({ type: OTP_REQUEST_SENT, payload: res.data.data });
      notify(
        toast,
        "OTP sent on email",
        "success",
        "OTP sent on your email. Please check"
      );
    })
    .catch((error) => {
      console.log("Error", error);
      notify(toast, "Process failed", "error");
    });
};
export const verifyOTP = (form, toast) => (dispatch) => {
  axios
    .post(`${baseurl}/verify`, form)
    .then((res) => {
      dispatch({ type: OTP_REQUEST_VERIFIED, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error", error);
      notify(toast, "Invaild OTP", "error");
    });
};
