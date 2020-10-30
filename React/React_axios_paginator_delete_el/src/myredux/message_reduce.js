import React from 'react'

const NEW_MESSAGE = 'NEW_MESSAGE'
const ADD_MESSAGES = 'ADD_MESSAGES'
const DEL_MESSAGES = 'DEL_MESSAGES'
const ADD2_MESSAGES = 'ADD2_MESSAGES'

const initialstate = {
    newMessage: '',
    messages: []
};

const message_reduce = (state = initialstate, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.text
      }
    case ADD_MESSAGES:
      return {
        ...state,
        newMessage: '',
        messages: [...state.messages, {id: state.messages.length + 1, name: 'Admin3', text: state.newMessage}]      
      }
    case DEL_MESSAGES:
      return {
        ...state,
        messages: [...state.messages.filter((el) => {
          if (el.id != action.id) return el
        })]      
      }
    case ADD2_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.arr.map((el) => el)]      
      }
    default:
      return state;
  }
} 

export const newMessageActionCreator = (text) => {
  return {type: NEW_MESSAGE, text: text}
}
export const addMessagesActionCreator = () => {
  return {type: ADD_MESSAGES}
}
export const delMessagesActionCreator = (actionId) => {
  return {type: DEL_MESSAGES, id: actionId}
}
export const add2MessagesActionCreator = (arr) => {
  return {type: ADD2_MESSAGES, arr: arr}
}

export default message_reduce;