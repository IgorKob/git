import React from 'react';
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../Redux/messagesPages_reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    igor: state.messagesPages.igor,
    messStart: state.messagesPages.messStart
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newMessageChangeActionCreator: (text) => {
      dispatch(newMessageChangeActionCreator(text));
    },
    addMessageActionCreator: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;