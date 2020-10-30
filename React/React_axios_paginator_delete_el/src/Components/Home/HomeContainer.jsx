import React from 'react'
import { connect } from 'react-redux'
import { add2MessagesActionCreator, addMessagesActionCreator, delMessagesActionCreator, newMessageActionCreator } from '../../myredux/message_reduce'
import Home from './Home'

const mypropsState = (state) => {
  // debugger
  return {
    newMessage: state.message_reduce.newMessage,
    messages: state.message_reduce.messages,
  }
}

const mypropsAction = (dispatch) => {
  return {
    onNewMessage: (text) => dispatch(newMessageActionCreator(text)),
    onAddMessage: () => dispatch(addMessagesActionCreator()),
    onDelMessage: (actionId) => dispatch(delMessagesActionCreator(actionId)),
    onAdd2Message: (arr) => dispatch(add2MessagesActionCreator(arr)),
  }
}
 
const HomeContainer = connect(mypropsState, mypropsAction)(Home);


export default HomeContainer;