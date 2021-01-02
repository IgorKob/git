import {getAuthUserData} from "./auth_reducer";
import { AppStateType } from "./redux_store";
import { ThunkAction } from 'redux-thunk';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type initialStateType = {
  initialized: boolean
};

let initialState: initialStateType = {
  initialized: false
};

type ActionType = initializedSuccessType;

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


export const InitializeApp = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => async (dispatch) => {
  let promise = dispatch(getAuthUserData());
  let data = await Promise.all([promise]);
      dispatch(initializedSuccess());
}

export default appReducer;