import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PROFILE_UPDATE,
  PROFILE_UPDATE_IMAGE,
  REGISTER_USER_SUCCESS,
} from "./auth_Type";

const userId = localStorage.getItem("userId");
const getUser = localStorage.getItem("username");
const userAvatar = localStorage.getItem("userImage");
const initialState = {
  isOTPsent :false,
  isOTPverified:false,
  isNewPassword:false,
  isAuth: userId ? true : false,
  register: false,
  username: getUser ? getUser : "Chetan",
  userId: userId ? userId : "",
  userImage: userAvatar?userAvatar:"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
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
    default: {
      return { ...state };
    }
  }
};
