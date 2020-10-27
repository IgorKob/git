const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';


let initialState = {
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
};


const postPagesReduce = (state = initialState, action) => {
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