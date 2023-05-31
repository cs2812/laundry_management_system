import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PROFILE_UPDATE,
  REGISTER_USER_SUCCESS,
} from "./auth_Type";

const userId = localStorage.getItem("userId");
const getUser = localStorage.getItem("username");
const initialState = {
  isAuth: userId ? true : false,
  register: false,
  username: getUser ? getUser : "Chetan",
  userId: userId ? userId : "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS: {
      localStorage.setItem("userId", payload._id);
      localStorage.setItem("username", payload.username);
      return {
        ...state,
        isAuth: true,
        username: payload.username,
      };
    }
    case LOGIN_USER_FAIL: {
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      return {
        ...state,
        isAuth: false,
        username: "",
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        register: true,
      };
    }
    case PROFILE_UPDATE: {
      localStorage.setItem("username", payload.username);
      return {
        ...state,
        username: payload.username,
      };
    }
    default: {
      return { ...state };
    }
  }
};
