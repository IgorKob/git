import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true

      }
    default:
      return state;
  }
}

export default authReducer;

export const setAuthUserData = (userId, email, login) => {
  return {type: SET_USER_DATA, data: {userId, email, login}}
}
export const getAuthUserData = () => (dispatch) => {
  usersAPI.getAuthMe()
    .then((data) => {
      if (data.resultCode === 0) {
        let {userId, email, login} = data.data;
        dispatch(setAuthUserData(userId, email, login));
      }
    });
}
