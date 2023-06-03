import {
  GENERATE_PASSWORD_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  OTP_REQUEST_SENT,
  OTP_REQUEST_VERIFIED,
  PROFILE_UPDATE,
  PROFILE_UPDATE_IMAGE,
  REGISTER_USER_SUCCESS,
} from "./auth_Type";

const userId = localStorage.getItem("userId");
const getUser = localStorage.getItem("username");
const userAvatar = localStorage.getItem("userImage");
const email = localStorage.getItem("email");
const initialState = {
  register: false,
  isOTPsent: false,
  isOTPverified: false,
  isNewPassword: false,
  email:email?email:"",
  isAuth: userId ? true : false,
  username: getUser ? getUser : "Chetan",
  userId: userId ? userId : "",
  userImage: userAvatar
    ? userAvatar
    : "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS: {
      localStorage.setItem("userId", payload._id);
      localStorage.setItem("username", payload.username);
      localStorage.setItem("userImage", payload.avatar);
      return {
        ...state,
        isAuth: true,
        username: payload.username,
        userImage: payload.avatar,
        userId:payload._id
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
    case PROFILE_UPDATE_IMAGE: {
      return {
        ...state,
        userImage: payload.avatar,
      };
    }
    case OTP_REQUEST_SENT: {
      localStorage.setItem("email", payload.email);
      return {
        ...state,
        email: payload.email,
        isOTPverified: false,
        isNewPassword: false,
        isOTPsent: true,
      };
    }
    case OTP_REQUEST_VERIFIED: {
      return {
        ...state,
        email: payload.email,
        isOTPsent: false,
        isNewPassword: false,
        isOTPverified: true,
      };
    }
    case GENERATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        isOTPsent: false,
        isOTPverified: false,
        isNewPassword: true,
      };
    }
    default: {
      return { ...state };
    }
  }
};
