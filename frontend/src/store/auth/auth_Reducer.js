import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS } from "./auth_Type";

const getToken = localStorage.getItem("userId");
const getUser = localStorage.getItem("name");
const initialState = {
  isAuth: getToken ? true : false,
  // isAuth:  false,
  register: false,
  token: getToken ? getToken : "",
  userName: getUser ? getUser : "Chetan",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS: {
      localStorage.setItem("userId", payload.id);
      localStorage.setItem("name", payload.un);
      return {
        ...state,
        isAuth: true,
        token: payload.id,
        userName: payload.userName,
      };
    }
    case LOGIN_USER_FAIL: {
      return {
        ...state,
        isAuth: false,
        token: "",
        userName: "",
      };
    }
    case REGISTER_USER_SUCCESS:{
      return {
        ...state,register:true
      };
    }
    default: {
      return { ...state };
    }
  }
};
