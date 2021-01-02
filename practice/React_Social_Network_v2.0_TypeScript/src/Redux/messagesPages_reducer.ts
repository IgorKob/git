import { InferActionsTypes } from "./redux_store";

export type initialStateMessType = {
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
type ActionsTypes = InferActionsTypes<typeof actions>


const messagesPagesReduce = (state = initialState, action: ActionsTypes): initialStateType => {

  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        igor: [...state.igor, {id : 5, message: action.newMessage}]
    }
    default:
      return state;
  }
}

export default messagesPagesReduce;

export const actions = {
  addMessageActionCreator: (newMessage: any) => {
    return {type: 'ADD_MESSAGE', newMessage} as const
  }
}