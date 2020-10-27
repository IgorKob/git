import {combineReducers, createStore} from "redux";
import postPagesReduce from "./postPages_reduce";
import messagesPagesReduce from "./messagesPages_reduce";
import newsPagesReduce from "./newsPages_reduce";

let reducers = combineReducers({
  postPages: postPagesReduce,
  messagesPages: messagesPagesReduce,
  newsPages: newsPagesReduce,
});

let store = createStore(reducers);

export  default store;



