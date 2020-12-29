import {authAPI, securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

// export type initialStateType = {
//   userId: number | null,
//   email: string | null,
//   login: string | null,
//   isAuth: boolean,
//   captchaUrl: string | null
// };

// let initialState: initialStateType = {
//   userId: null,
//   email: null,
//   login: null,
//   isAuth: false,
//   captchaUrl: null
// };
  
let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {

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

type setAuthUserDataPayloadType = {
  userId: number | null, 
  email: string | null, 
  login: string | null, 
  isAuth: boolean
}
type setAuthUserDataType = {
  type: typeof SET_USER_DATA, 
  payload: setAuthUserDataPayloadType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => {
  return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
}

export const getAuthUserData = () => async (dispatch: any) => {
  // debugger
  let data = await usersAPI.getAuthMe();
      if (data.resultCode === 0) {
        // let {userId, email, login} = data.data;
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
}

export const Loginkim = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
}
  
type getCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS, 
  payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessType => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}