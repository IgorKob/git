const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';


let initialState = {
  newPostText: '',
  newPost: [
    {id: 1, name: 'Admin', text: 'hello world'},
  ]
};

const newsPagesReduce = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
    }
    case ADD_NEW_POST:
      return {
        ...state,
        newPostText: '',
        newPost: [...state.newPost, {id: 2, name: 'Administrator', text: state.newPostText}]
    }
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