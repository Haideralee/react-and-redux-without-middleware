import {
  FETCH_USER_START,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
} from "../constants/UserConstants";

const FetchUser = async (dispatch, id = 1) => {
  dispatch({ type: FETCH_USER_START });
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();
    
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: user
    });
  } catch (e) {
    dispatch({ type: FETCH_USER_FAILED });
  }
};

export const getUser = (dispatch) => {
  return (id) => FetchUser(dispatch, id);
};
