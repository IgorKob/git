import {getAuthUserData} from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type initialStateType = {
  initialized: boolean
};

let initialState: initialStateType = {
  initialized: false
};

const appReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

type initializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessType => {
  return {type: INITIALIZED_SUCCESS}
}


export const InitializeApp = () => async (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  let data = await Promise.all([promise]);
      dispatch(initializedSuccess());
}

export default appReducer;