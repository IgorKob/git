import React from 'react';
import classes from './messages.module.css';
import Dialog from "../Dialog/Dialog";
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../Redux/messagesPages_reduce";
import Messages from "./Messages";



const MessagesContainer = (props) => {
// debugger

  let newMessage = React.createRef();
  let addMessage = () => {
    // let text = newMessage.current.value;
    // alert(text);
    // debugger
    // props.addMessage(text);
    // props.addMessage();
    // debugger
    props.dispatch(addMessageActionCreator());
  }

  let newMessageChange = (text) => {
    // debugger
// alert(newMessage.current.value)
//     let text = newMessage.current.value;
    // props.newMessageChange(text);

    // let action = {type: 'NEW-MESSAGE-CHANGE', text: text};
    props.dispatch(newMessageChangeActionCreator(text));
  }

  return (
      <Messages
        igor={props.state.messagesPages.igor}
        newMessageChangeActionCreator={newMessageChange}
        messStart={props.state.messagesPages.messStart}
        addMessageActionCreator={addMessage}
      />

  );
}

export default MessagesContainer;