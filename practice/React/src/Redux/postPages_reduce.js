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
  switch (action.type) {
    case ADD_POST:
      return {
      ...state,
      newPost: '',
      posts:[...state.posts, {id : 7, name: 'Admin', text : state.newPost, like : 0}]
    }
    case NEW_POST_TEXT:
      return  {
      ...state,
      newPost: action.text
    }
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