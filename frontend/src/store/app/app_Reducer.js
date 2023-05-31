import {
  LAUNDRY_GET_REQUEST_SUCCESS,
  LAUNDRY_REQUEST_CONFIRM,
  LAUNDRY_REQUEST_SUCCESS,
} from "./app_Type";

const initialState = {
  pendingRequest: 0,
  confirmRequest: 0,
  inprocessRequest: 0,
  finishRequest: 0,
  requests: [],
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAUNDRY_REQUEST_SUCCESS: {
      state.requests.unshift(payload);
      return {
        ...state,
        pendingRequest: state.pendingRequest++,
      };
    }
    case LAUNDRY_GET_REQUEST_SUCCESS: {
      let pending = payload.data.filter((ele) => ele.status !== "confirmed");
      let confirm = payload.data.filter((ele) => ele.status === "confirmed");
      return {
        ...state,
        requests: payload.data,
        pendingRequest: pending.length,
        confirmRequest: confirm.length,
      };
    }
    case LAUNDRY_REQUEST_CONFIRM: {
      let newArr = state.requests.map((ele) =>
        ele._id === payload._id ? payload : ele
      );
      return {
        ...state,
        requests: newArr,
        pendingRequest: state.pendingRequest--,
        confirmRequest: state.confirmRequest++,
      };
    }
    default: {
      return { ...state };
    }
  }
};
