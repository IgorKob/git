import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import postPagesReduce, {addPost, deletePost} from "./postPages_reducer";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux_store";

let state = {
  posts: [
    {id : 0, name: 'Admin', text : 'my post', like : 1},
    {id : 1, name: 'Igor', text : 'my post asd', like : 11},
  ],
};

// 1. test
it ('add new test, kim test', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line react/jsx-no-undef
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <Provider store={store}><App /></Provider>
      </React.StrictMode>
    </Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// 2.
it ('add new post, kim test', () => {
  let action = addPost('I add new post');
  const newState = postPagesReduce(state, action);
  //довжина нового масиву має бути 3
  expect(newState.posts.length).toBe(3);
});

// 3.
it ('add new x === y, kim test', () => {
  let action = addPost('I add new post');
  const newState = postPagesReduce(state, action);
  //перевіряємо рядок чи містить цей рядок
  expect(newState.posts[2].text).toBe('I add new post');
});

// 4.
it ('add new delete el, kim test', () => {
  let action = deletePost(1);
  const newState = postPagesReduce(state, action);
  //перевіряємо кількість елементів у масиві
  expect(newState.posts.length).toBe(1);
});