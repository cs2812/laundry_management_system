
import axios from "axios";
import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS } from "./auth_Type";

const baseurl = "http://localhost:8080/user";

export const registerUser = (form) => (dispatch) => {
  //   dispatch({ type: AUTH_LOADING_ON });
  axios
    .post(`${baseurl}/signup`, form)
    .then((res) => {
      dispatch({type:REGISTER_USER_SUCCESS})
      alert("User Registered successfully");
    })
    .catch((error) => {
      console.log("Error", error);
      alert("Signup failed");
    });
};

export const userLogin = (form) => (dispatch) => {
  axios
    .post(`${baseurl}/login`, form)
    .then((res) => {
      if (res.data.message === "User logedin successfully") {
        alert("User logedin successfully");
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.data });
      } else {
        console.log("error", res);
        alert("Login failed");
        dispatch({ type: LOGIN_USER_FAIL });
      }
    })
    .catch((err) => {
      console.log("Error", err);
      alert("Login failed");
      dispatch({ type: LOGIN_USER_FAIL });
    });
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
