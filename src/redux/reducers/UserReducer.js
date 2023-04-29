import {
  FETCH_USER_START,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
} from "../constants/UserConstants";

const InitialUserState = {
  isLoading: false,
  error: false,
  user: {},
};

const userReducer = (state = InitialUserState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        error: false,
        isLoading: false,
        user: action.payload,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
