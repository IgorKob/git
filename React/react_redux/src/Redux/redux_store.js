import {combineReducers, createStore} from "redux";
import postPagesReduce from "./postPages_reduce";
import messagesPagesReduce from "./messagesPages_reduce";
import newsPagesReduce from "./newsPages_reduce";
import findUserReduce from "./findUser_reduce";
import mytestPages_reduce from "./mytestPages_reduce";

let reducers = combineReducers({
  postPages: postPagesReduce,
  messagesPages: messagesPagesReduce,
  newsPages: newsPagesReduce,
  findUser: findUserReduce,
  mytestPages: mytestPages_reduce,
});

let store = createStore(reducers);

window.store = store;

export default store;



