import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import postPagesReduce from "./postPages_reducer";
import messagesPagesReduce from "./messagesPages_reducer";
import findUserReduce from "./findUser_reducer";
import mytestPages_reduce from "./mytestPages_reduce";
import authReducer from "./auth_reducer";
import appReducer from "./app_reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { ThunkAction } from 'redux-thunk';

let rootReducer = combineReducers({
  postPages: postPagesReduce,
  messagesPages: messagesPagesReduce,
  findUser: findUserReduce,
  mytestPages: mytestPages_reduce,
  authUser: authReducer,
  form: formReducer,
  app: appReducer
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>

// kim in ActionCreator in reducer_pages
type PropertiesTypes<T> = T extends {[key: string]: infer U } ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;



