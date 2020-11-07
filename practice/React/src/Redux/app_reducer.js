import {getAuthUserData} from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
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

export const initializedSuccess = () => {
  return {type: INITIALIZED_SUCCESS}
}

// export const InitializeApp = () => (dispatch) => {
//   let promise = dispatch(getAuthUserData());
//   Promise.all([promise])
//     .then(()=>{
//       dispatch(initializedSuccess());
//     });
// }
export const InitializeApp = () => async (dispatch) => {
  let promise = dispatch(getAuthUserData());
  let data = await Promise.all([promise]);
      dispatch(initializedSuccess());
}

export default appReducer;