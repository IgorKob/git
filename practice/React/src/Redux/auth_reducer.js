import {authAPI, securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        // isAuth: true

      }
      case GET_CAPTCHA_URL_SUCCESS:
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

export const getAuthUserData = () => async (dispatch) => {
  // debugger
  let data = await usersAPI.getAuthMe();
      if (data.resultCode === 0) {
        // let {userId, email, login} = data.data;
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
}

export const Loginkim = (email, password, rememberMe, captcha) => async (dispatch) => {
 let response = await authAPI.login(email, password, rememberMe, captcha);
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
          if (response.data.resultCode === 10) {

          }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login',{_error: message}));
      }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
}


export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}