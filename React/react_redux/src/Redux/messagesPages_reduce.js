const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE';

let initialState = {
  messStart: '',
  igor: [
    {id : 1, message: 'Art hello'},
    {id : 2, message: 'Art sdf hello'},
    {id : 3, message: 'hello'},
    {id : 4, message: 'sdfd hello'},
  ]
};

const messagesPagesReduce = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messStart: '',
        igor: [...state.igor, {id : 5, message: state.messStart}]
    }
    case NEW_MESSAGE_CHANGE:
      return {
        ...state,
        messStart: action.text
    }
    default:
      return state;
  }
}

export default messagesPagesReduce;


export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE}
}
export const newMessageChangeActionCreator = (text) => {
  return {type: NEW_MESSAGE_CHANGE, text: text}
}
