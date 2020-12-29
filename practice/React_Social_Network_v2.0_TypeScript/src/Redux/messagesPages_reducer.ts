const ADD_MESSAGE = 'ADD-MESSAGE';

type initialStateMessType = {
  id: number 
  message: string
}

let initialState = {
  igor: [
    {id : 1, message: 'Art hello'},
    {id : 2, message: 'Art sdf hello'},
  ] as Array<initialStateMessType>
};

export type initialStateType = typeof initialState;

const messagesPagesReduce = (state = initialState, action: any): initialStateType => {

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

type addMessageActionCreatorType = {
  type: typeof ADD_MESSAGE, 
  newMessage: initialStateMessType
}
export const addMessageActionCreator = (newMessage: any): addMessageActionCreatorType => {
  return {type: ADD_MESSAGE, newMessage}
}

