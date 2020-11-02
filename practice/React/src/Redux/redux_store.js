import {applyMiddleware, combineReducers, createStore} from "redux";
import postPagesReduce from "./postPages_reducer";
import messagesPagesReduce from "./messagesPages_reducer";
import newsPagesReduce from "./newsPages_reducer";
import findUserReduce from "./findUser_reducer";
import mytestPages_reduce from "./mytestPages_reduce";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  postPages: postPagesReduce,
  messagesPages: messagesPagesReduce,
  newsPages: newsPagesReduce,
  findUser: findUserReduce,
  mytestPages: mytestPages_reduce,
  authUser: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;



