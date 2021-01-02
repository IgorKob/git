import {authAPI, securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./redux_store";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null
};

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>


const authReducer = (state = initialState, action: ActionsTypes): initialStateType => {

  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload
      }
      case 'GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default authReducer;


export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: 'SET_USER_DATA', payload: {userId, email, login, isAuth} as const}
  },
  getCaptchaUrlSuccess: (captchaUrl: string) => {
    return {type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}  as const}
  }
}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let data = await usersAPI.getAuthMe();
    if (data.resultCode === 0) {
      let {id, email, login} = data.data;
      dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const Loginkim = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
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

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(actions.setAuthUserData(null, null, null, false));
    }
}
  
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}