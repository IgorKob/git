import {renderKim} from '../render.js'

const state = {
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

};

export default state;
window.state = state;

// export let addPost = (message) => {
export let addPost = () => {
  // debugger;
  // let newPost = {id : 7, name: 'Admin', text : message, like : 0};
  let newPost = {id : 7, name: 'Admin', text : state.postPages.newPost, like : 0};
  state.postPages.posts.push(newPost);
  state.postPages.newPost = '';
  renderKim(state);
}

export let newPostText = (text) => {
  // debugger;
  state.postPages.newPost = text;
  renderKim(state);
}

// export let addMessage = (text) => {
export let addMessage = () => {
  // debugger
  let message = {id : 5, message: state.messagesPages.messStart};
  state.messagesPages.igor.push(message);
  state.messagesPages.messStart = '';
  // debugger
  renderKim(state);
}

export let newMessageChange = (text) => {
  state.messagesPages.messStart = text;
  renderKim(state);
}