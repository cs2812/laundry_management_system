import {
  LAUNDRY_GET_PRICE,
  LAUNDRY_GET_REQUEST_SUCCESS,
  LAUNDRY_REQUEST_CONFIRM,
  LAUNDRY_REQUEST_SUCCESS,
} from "./app_Type";

const initialState = {
  pendingRequest: 0,
  confirmRequest: 0,
  inprocessRequest: 0,
  finishRequest: 0,
  currentId: "",
  requests: [],
  price:{}
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAUNDRY_REQUEST_SUCCESS: {
      state.requests.unshift(payload);
      return {
        ...state,
        pendingRequest: state.pendingRequest + 1,
        currentId: payload._id,
      };
    }
    case LAUNDRY_GET_PRICE: {
      return {
        ...state,
        price:payload
      };
    }
    case LAUNDRY_GET_REQUEST_SUCCESS: {
      let pending = payload.filter((ele) => ele.status === "pending");
      let confirm = payload.filter((ele) => ele.status === "confirmed");
      return {
        ...state,
        requests: payload,
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
        pendingRequest: state.pendingRequest - 1,
        confirmRequest: state.confirmRequest + 1,
        currentId: "",
      };
    }
    default: {
      return { ...state };
    }
  }
};
