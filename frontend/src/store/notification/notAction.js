import axios from "axios";

import {
  NOTIFICATION_CREATED,
  NOTIFICATION_DELETE,
  NOTIFICATION_GET,
  NOTIFICATION_READ,
} from "./notType";
import { notify } from "../../utils";

const baseurl = "https://hyscaler-lms.onrender.com/notification";

export const createNotification = (form,toast) => (dispatch) => {
  axios
    .post(`${baseurl}/send`, form)
    .then((res) => {
      dispatch({ type: NOTIFICATION_CREATED, payload: res.data.data });
      notify(toast,"Request Accepted","success")
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

export const getNotification = (userId) => (dispatch) => {
  axios
    .get(`${baseurl}/${userId}`)
    .then((res) => {
      dispatch({ type: NOTIFICATION_GET, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

export const deleteNotification = (id) => (dispatch) => {
  axios
    .delete(`${baseurl}/${id}`)
    .then((res) => {
      dispatch({ type: NOTIFICATION_DELETE, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

export const readNotification = (userId) => (dispatch) => {
  axios
    .put(`${baseurl}/read/${userId}`)
    .then((res) => {
      dispatch({ type: NOTIFICATION_READ, payload: res.data.data });
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
