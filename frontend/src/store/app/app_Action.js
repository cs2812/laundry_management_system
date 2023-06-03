import axios from "axios";
import {
  LAUNDRY_GET_REQUEST_SUCCESS,
  LAUNDRY_REQUEST_CONFIRM,
  LAUNDRY_REQUEST_SUCCESS,
} from "./app_Type";
import { createNotification } from "../notification/notAction";

const baseurl = "http://localhost:8080/laundry";

export const acceptRequest = (requestId) => (dispatch) => {
  // console.log("acceptRequest", requestId);
  axios
    .put(`${baseurl}/confirm-request/${requestId}`)
    .then((res) => {
      dispatch({ type: LAUNDRY_REQUEST_CONFIRM, payload: res.data.data });
      
      setTimeout(() => {
        dispatch(
          createNotification({
            userId: res.data.data.userId,
            message: `Request(id: ${requestId}) Accepted`,
          })
        );
      }, 10000);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

export const createRequest = (form) => (dispatch) => {
  axios
    .post(`${baseurl}/create-request`, form)
    .then((res) => {
      dispatch({ type: LAUNDRY_REQUEST_SUCCESS, payload: res.data.data });
      alert(
        "Request Created successfully. It will be accepted within 10 minutes"
      );
      setTimeout(() => {
        dispatch(acceptRequest(res.data.data._id));
      }, 10000);
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
