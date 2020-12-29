import {applyMiddleware, combineReducers, createStore} from "redux";
import postPagesReduce from "./postPages_reducer";
import messagesPagesReduce from "./messagesPages_reducer";
import findUserReduce from "./findUser_reducer";
import mytestPages_reduce from "./mytestPages_reduce";
import authReducer from "./auth_reducer";
import appReducer from "./app_reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  postPages: postPagesReduce,
  messagesPages: messagesPagesReduce,
  findUser: findUserReduce,
  mytestPages: mytestPages_reduce,
  authUser: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;



