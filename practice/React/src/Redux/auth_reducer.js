import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
        ...action.payload,
        // isAuth: true

      }
    default:
      return state;
  }
}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
}
export const getAuthUserData = () => (dispatch) => {
  // debugger
  return usersAPI.getAuthMe()
    .then((data) => {
      if (data.resultCode === 0) {
        // let {userId, email, login} = data.data;
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
}


//login
export const Loginkim = (email, password, rememberMe) => (dispatch) => {

  authAPI.login(email, password, rememberMe)
    .then((response) => {
      if (response.data.resultCode === 0) {
        // let {userId, email, login} = data.data;
        dispatch(getAuthUserData());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login',{_error: message}));
      }
    });
}

//
export const logout = () => (dispatch) => {
  authAPI.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        // let {userId, email, login} = data.data;
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
}