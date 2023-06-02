import {
  NOTIFICATION_CREATED,
  NOTIFICATION_DELETE,
  NOTIFICATION_READ,
  NOTIFICATION_GET,
} from "./notType";

const initialState = {
  notifications: [],
  unRead: 0,
};

export const notReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NOTIFICATION_CREATED: {
      localStorage.setItem("requestId", payload._id);
      state.notifications.unshift(payload);
      return {
        ...state,
        unRead: state.unRead + 1,
      };
    }
    case NOTIFICATION_GET: {
      let pending = payload.filter((ele) => ele.isRead === false);
      return {
        ...state,
        notifications: payload,
        unRead: pending.length,
      };
    }
    case NOTIFICATION_DELETE: {
      let newArr = state.notifications.filter((ele) => ele._id !== payload._id);
      return {
        ...state,
        notifications: newArr,
      };
    }
    case NOTIFICATION_READ: {
      let newArr = state.notifications.map((ele) => {
        return { ...ele, isRead: true };
      });
      return {
        ...state,
        notifications: newArr,
        unRead: 0,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
