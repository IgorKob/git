import React from 'react';
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../Redux/messagesPages_reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

// let AuthRedirectComponent = withAuthRedirect(Messages)
//
// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default MessagesContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);