import axios from "axios";
import {
  LAUNDRY_GET_REQUEST_SUCCESS,
  LAUNDRY_REQUEST_CONFIRM,
  LAUNDRY_REQUEST_SUCCESS,
} from "./app_Type";

const baseurl = "http://localhost:8080/laundry";

export const createRequest = (form) => (dispatch) => {
  axios
    .post(`${baseurl}/create-request`, form)
    .then((res) => {
      dispatch({ type: LAUNDRY_REQUEST_SUCCESS,payload:res.data.data});
      alert("Request Created successfully");
    })
    .catch((error) => {
      console.log("Error", error);
      alert("Process failed");
    });
};

export const getRequest = (userId) => (dispatch) => {
  axios
    .get(`${baseurl}/${userId}`)
    .then((res) => {
      dispatch({ type: LAUNDRY_GET_REQUEST_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error", error);
      alert("Somthing went wrong");
    });
};

export const acceptRequest = (requestId) => (dispatch) => {
  axios
    .put(`${baseurl}/confirm-request/${requestId}`)
    .then((res) => {
      dispatch({ type: LAUNDRY_REQUEST_CONFIRM, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
