import React from 'react';
import {actions, initialStateMessType} from "../../Redux/messagesPages_reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { AppStateType } from '../../Redux/redux_store';


type mapStateToPropsType = {
  igor: Array<initialStateMessType>
}

type mapDispatchToPropsType = {
  addMessageActionCreator: (value: string) => void
}
  
type ownToPropsType = {}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    igor: state.messagesPages.igor,
  }
}

const addMessageActionCreator = actions.addMessageActionCreator;

export default compose(
  connect<mapStateToPropsType, mapDispatchToPropsType, ownToPropsType, AppStateType>(mapStateToProps, {addMessageActionCreator}),
  withAuthRedirect
)(Messages);