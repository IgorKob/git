const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE';


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
  _addPost() {
    let newPost = {id : 7, name: 'Admin', text : this._state.postPages.newPost, like : 0};
    this._state.postPages.posts.push(newPost);
    this._state.postPages.newPost = '';
    this.renderKim(this._state);
  },
  _newPostText(text) {
    this._state.postPages.newPost = text;
    this.renderKim(this._state);
  },
  // addMessage() {
  //   let message = {id : 5, message: this._state.messagesPages.messStart};
  //   this._state.messagesPages.igor.push(message);
  //   this._state.messagesPages.messStart = '';
  //   this.renderKim(this._state);
  // },
  // newMessageChange(text) {
  //   this._state.messagesPages.messStart = text;
  //   this.renderKim(this._state);
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      // let newPost = {id : 7, name: 'Admin', text : this._state.postPages.newPost, like : 0};
      // this._state.postPages.posts.push(newPost);
      // this._state.postPages.newPost = '';
      // this.renderKim(this._state);
      this._addPost()
    } else {
      if(action.type === NEW_POST_TEXT) {
            // this._state.postPages.newPost = action.text;
            // this.renderKim(this._state);
            this._newPostText(action.text);
          } else {
        if ( action.type === ADD_MESSAGE) {
                    let message = {id : 5, message: this._state.messagesPages.messStart};
                    this._state.messagesPages.igor.push(message);
                    this._state.messagesPages.messStart = '';
                    this.renderKim(this._state);
                  } else {
          if ( action.type === NEW_MESSAGE_CHANGE) {
                              this._state.messagesPages.messStart = action.text;
                              this.renderKim(this._state);
                            }
        }
      }
    }
  },
};

export default store;
window.store = store;

//post.jsx
export const addPostActionCreator = () => {
  return {type: ADD_POST}
}
export const newPostTextActionCreator = (text) => {
  return {type: NEW_POST_TEXT, text: text}
}

//message.jsx
export const addMessageActionCreator = () => {
  return {type: 'ADD-MESSAGE'}
}
export const newMessageChangeActionCreator = (text) => {
  return {type: 'NEW-MESSAGE-CHANGE', text: text}
}