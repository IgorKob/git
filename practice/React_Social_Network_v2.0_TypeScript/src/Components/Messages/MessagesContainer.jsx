import React from 'react';
import {addMessageActionCreator} from "../../Redux/messagesPages_reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    igor: state.messagesPages.igor,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageActionCreator: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);