import axios from "axios";
import {
  LAUNDRY_GET_PRICE,
  LAUNDRY_GET_REQUEST_SUCCESS,
  LAUNDRY_REQUEST_CONFIRM,
  LAUNDRY_REQUEST_SUCCESS,
} from "./app_Type";
import { createNotification } from "../notification/notAction";
import { notify } from "../../utils";

const baseurl = "https://hyscaler-lms.onrender.com/laundry";

export const getPrice = () => (dispatch) => {
  axios
    .get(`${baseurl}/price`)
    .then((res) => {
      dispatch({ type: LAUNDRY_GET_PRICE, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

export const acceptRequest = (requestId, toast) => (dispatch) => {
  // console.log("acceptRequest", requestId);
  axios
    .put(`${baseurl}/confirm-request/${requestId}`)
    .then((res) => {
      dispatch({ type: LAUNDRY_REQUEST_CONFIRM, payload: res.data.data });
      setTimeout(() => {
        dispatch(
          createNotification(
            {
              userId: res.data.data.userId,
              message: `Request(id: ${requestId}) Accepted`,
            },
            toast
          )
        );
      }, 10000);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

export const createRequest = (form, toast) => (dispatch) => {
  // console.log(form)
  axios
    .post(`${baseurl}/create-request`, form)
    .then((res) => {
      dispatch({ type: LAUNDRY_REQUEST_SUCCESS, payload: res.data.data });
      notify(
        toast,
        "Request Created successfully",
        "success",
        "Request will be accepted within 10 minutes"
      );

      setTimeout(() => {
        dispatch(acceptRequest(res.data.data._id, toast));
      }, 10000);
    })
    .catch((error) => {
      console.log("Error", error);
      notify(toast, "Process failed", "error");
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
    });
};
