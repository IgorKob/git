import postPagesReduce from "./postPages_reduce";
import messagesPagesReduce from "./messagesPages_reduce";
import newsPagesReduce from "./newsPages_reduce";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE';

const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';


let store = {
  _state: {
    postPages : {
      posts: [
        {id : 0, name: 'Admin', text : 'my post', like : 1},
        {id : 1, name: 'Igor', text : 'my post asd', like : 11},
        {id : 2, name: 'Anna', text : 'my post sad', like : 6},
        {id : 3, name: 'Vala', text : 'my post fsa', like : 5},
        {id : 4, name: 'Oleg', text : 'my post dfefe', like : 8},
        {id : 5, name: 'Igor', text : 'my post grg', like : 4},
        {id : 6, name: 'Art', text : 'my post hthtr', like : 5},
      ],
      newPost: '...'
    },
    messagesPages : {
      messStart: '',
      igor: [
        {id : 1, message: 'Art hello'},
        {id : 2, message: 'Art sdf hello'},
        {id : 3, message: 'hello'},
        {id : 4, message: 'sdfd hello'},
      ]
    },
    newsPages: {
      newPostText: '',
      newPost: [
        {id: 1, name: 'Admin', text: 'hello world'},
      ],
    },
  },
  getState() {
    return this._state;
  },
  renderKim(state) {
    console.log('renderKim state1');
  },
  renderKimState(render) {
    this.renderKim = render
  },

  dispatch(action) {

    this._state.postPages = postPagesReduce(this._state.postPages, action);
    this._state.messagesPages = messagesPagesReduce(this._state.messagesPages, action);
    this._state.newsPages = newsPagesReduce(this._state.newsPages, action);

    this.renderKim(this._state);

  }
}


export default store;
window.store = store;

// //post.jsx
// export const addPostActionCreator = () => {
//   return {type: ADD_POST}
// }
// export const newPostTextActionCreator = (text) => {
//   return {type: NEW_POST_TEXT, text: text}
// }

// //message.jsx
// export const addMessageActionCreator = () => {
//   return {type: ADD_MESSAGE}
// }
// export const newMessageChangeActionCreator = (text) => {
//   return {type: NEW_MESSAGE_CHANGE, text: text}
// }

// //newsPages.jsx
// export const addNewsPostTextActionCreator = (text) => {
//   return {type: ADD_NEW_POST_TEXT, text: text};
// }
// export const addNewsPostActionCreator = () => {
//   return {type: ADD_NEW_POST};
// }

