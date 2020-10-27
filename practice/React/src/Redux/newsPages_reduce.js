const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';


let initialState = {
  newPostText: '',
  newPost: [
    {id: 1, name: 'Admin', text: 'hello world'},
  ]
};

const newsPagesReduce = (state = initialState, action) => {
  // if (action.type === ADD_NEW_POST_TEXT) {
  //   state.newPostText = action.text;
  //   // this.renderKim(this._state);
  // } else if (action.type === ADD_NEW_POST) {
  //   let text = state.newPostText;
  //   let post = {id: 2, name: 'Administrator', text: text};
  //   state.newPost.push(post);
  //   state.newPostText = '';
  //   // this.renderKim(this._state);
  // }
  // return state;

  switch (action.type) {
    case ADD_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    case ADD_NEW_POST:
      let text = state.newPostText;
      let post = {id: 2, name: 'Administrator', text: text};
      state.newPost.push(post);
      state.newPostText = '';
      return state;
    default:
      return state;
  }
}

export default newsPagesReduce;


export const addNewsPostTextActionCreator = (text) => {
  return {type: ADD_NEW_POST_TEXT, text: text};
}
export const addNewsPostActionCreator = () => {
  return {type: ADD_NEW_POST};
}