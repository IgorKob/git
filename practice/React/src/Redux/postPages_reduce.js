const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';


const postPagesReduce = (state, action) => {
  // if (action.type === ADD_POST) {
  //   let newPost = {id : 7, name: 'Admin', text : state.newPost, like : 0};
  //   state.posts.push(newPost);
  //   state.newPost = '';
  //   // this.renderKim(this._state);
  // } else
  // if(action.type === NEW_POST_TEXT) {
  //   state.newPost = action.text;
  //   // this.renderKim(this._state);
  // }
  // return state;
  switch (action.type) {
    case ADD_POST:
      let newPost = {id : 7, name: 'Admin', text : state.newPost, like : 0};
      state.posts.push(newPost);
      state.newPost = '';
      return state;
    case NEW_POST_TEXT:
      state.newPost = action.text;
      return state;
    default:
      return state;
  }
}

export default postPagesReduce;

export const addPostActionCreator = () => {
  return {type: ADD_POST}
}
export const newPostTextActionCreator = (text) => {
  return {type: NEW_POST_TEXT, text: text}
}