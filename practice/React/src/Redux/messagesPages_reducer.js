const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  igor: [
    {id : 1, message: 'Art hello'},
    {id : 2, message: 'Art sdf hello'},
  ]
};

const messagesPagesReduce = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        igor: [...state.igor, {id : 5, message: action.newMessage}]
    }
    default:
      return state;
  }
}

export default messagesPagesReduce;

export const addMessageActionCreator = (newMessage) => {
  return {type: ADD_MESSAGE, newMessage}
}

