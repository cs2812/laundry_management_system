import axios from "axios";
import {
  GENERATE_PASSWORD_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PROFILE_UPDATE,
  PROFILE_UPDATE_IMAGE,
  REGISTER_USER_SUCCESS,
} from "./auth_Type";
import { notify } from "../../utils";

const baseurl = "https://hyscaler-lms.onrender.com/user";

export const registerUser = (form, toast) => (dispatch) => {
  //   dispatch({ type: AUTH_LOADING_ON });
  axios
    .post(`${baseurl}/signup`, form)
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS });
      notify(toast, "User Registered successfully", "success");
    })
    .catch((error) => {
      console.log("Error", error);
      notify(toast, "Signup failed", "error");
    });
};

export const userLogin = (form, toast) => (dispatch) => {
  axios
    .post(`${baseurl}/login`, form)
    .then((res) => {
      if (res.data.message === "User logedin successfully") {
        notify(toast, "User logged in successfully", "success");
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.data });
      } else {
        console.log("error", res);
        notify(toast, "Login failed", "error","Please check your email and password");
        dispatch({ type: LOGIN_USER_FAIL });
      }
    })
    .catch((err) => {
      console.log("Error", err);
      notify(toast, "Login failed", "error","Please check your email and password");
      dispatch({ type: LOGIN_USER_FAIL });
    });
};

export const changePassword = (form, toast) => (dispatch) => {
  axios
    .put(`${baseurl}/change-password/${form.userId}`, form)
    .then((res) => {
      if (res.data.message === "Password changed successfully") {
        dispatch({ type: LOGIN_USER_FAIL });
        notify(
          toast,
          "Password Update",
          "success",
          "Password Updated successfully. Please Login again"
        );
      } else {
        console.log("error", res);
        notify(toast, "Process failed", "error", "Enter Currect Password");
      }
    })
    .catch((err) => {
      console.log("Error", err);
      notify(toast, "Process failed", "error", "Enter Currect Password");
    });
};

export const GenerateNewPassword = (form, toast) => (dispatch) => {
  axios
    .put(`${baseurl}/forget-password`, form)
    .then((res) => {
      if (res.data.message === "Password changed successfully") {
        dispatch({ type: GENERATE_PASSWORD_SUCCESS });
        notify(
          toast,
          "Password Update",
          "success",
          "Password Updated successfully. Please Login again"
        );
      } else {
        console.log("error", res);
      }
    })
    .catch((err) => {
      console.log("Error", err);
      notify(toast, "Process failed", "error");
    });
};

export const changeProfile = (form,toast) => (dispatch) => {
  axios
    .put(`${baseurl}/change-profile/${form.userId}`, form)
    .then((res) => {
      if (res.data.message === "Profile changed successfully") {
        dispatch({ type: PROFILE_UPDATE, payload: res.data.data });
        notify(
          toast,
          "Name updated",
          "success",
          "Profile Name updated successfully"
        );
        // alert("Profile Name changed successfully");
      } else {
        console.log("error", res);
        notify(toast, "Process failed", "error");
      }
    })
    .catch((err) => {
      console.log("Error", err);
      notify(toast, "Process failed", "error");
    });
};

export const changeProfileImage = (form,toast) => (dispatch) => {
  // let {userId,avatar}=form
  axios
    .put(`${baseurl}/update-profile-image`, form)
    .then((res) => {
      if (res.data.message === "Profile image updated successfully") {
        dispatch({ type: PROFILE_UPDATE_IMAGE, payload: res.data.data });
        notify(
          toast,
          "Profile updated",
          "success",
          "Profile image updated successfully"
        );
      } else {
        console.log("error", res);
        notify(toast, "Process failed", "error");
      }
    })
    .catch((err) => {
      console.log("Error", err);
      notify(toast, "Process failed", "error");
    });
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
