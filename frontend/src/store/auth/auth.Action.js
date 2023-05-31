import axios from "axios";
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PROFILE_UPDATE,
  REGISTER_USER_SUCCESS,
} from "./auth_Type";

const baseurl = "http://localhost:8080/user";

export const registerUser = (form) => (dispatch) => {
  //   dispatch({ type: AUTH_LOADING_ON });
  axios
    .post(`${baseurl}/signup`, form)
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS });
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

export const changePassword = (form) => (dispatch) => {
  axios
    .put(`${baseurl}/change-password/${form.userId}`, form)
    .then((res) => {
      if (res.data.message === "Password changed successfully") {
        alert("Password Update successfully. Please Login again");
        dispatch({ type: LOGIN_USER_FAIL });
      } else {
        console.log("error", res);
        alert("Process failed");
      }
    })
    .catch((err) => {
      console.log("Error", err);
      alert("Process failed");
    });
};

export const changeProfile = (form) => (dispatch) => {
  axios
    .put(`${baseurl}/change-profile/${form.userId}`, form)
    .then((res) => {
      if (res.data.message === "Profile changed successfully") {
        dispatch({ type: PROFILE_UPDATE, payload: res.data.data });
        alert("Profile Name changed successfully");
      } else {
        console.log("error", res);
        alert("Process failed");
      }
    })
    .catch((err) => {
      alert("Process failed");
      console.log("Error", err);
    });
};
