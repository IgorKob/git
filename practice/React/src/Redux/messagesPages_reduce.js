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
  // if ( action.type === ADD_MESSAGE) {
  //   let message = {id : 5, message: state.messStart};
  //   state.igor.push(message);
  //   state.messStart = '';
  //   // this.renderKim(this._state);
  // } else
  //   if ( action.type === NEW_MESSAGE_CHANGE) {
  //     state.messStart = action.text;
  //     // this.renderKim(this._state);
  //   }
  // return state;
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {id : 5, message: state.messStart};
      state.igor.push(message);
      state.messStart = '';
      return state;
    case NEW_MESSAGE_CHANGE:
      state.messStart = action.text;
      return state;
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
