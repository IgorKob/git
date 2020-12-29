import React from 'react'
import {connect} from "react-redux";
import MytestPages from "./MytestPages";
import {mydeleteActionCreater, mytestaddActionCreater, mytestChangeActionCreater} from "../../Redux/mytestPages_reduce";

const mypropsState = (state) => {
  return {
    mytestText: state.mytestPages.mytestText,
    mytestArr: state.mytestPages.mytestArr
  }
};

const mypropsAction = (dispatch) => {
  return {
    mytestChange: (ev) => {
      return dispatch(mytestChangeActionCreater(ev));
    },
    mytestadd: () => {
      return dispatch(mytestaddActionCreater());
    },
    mydelete: (actionId) => {
      return dispatch(mydeleteActionCreater(actionId));
    },
  }
};

const MytestPagesContainer = connect(mypropsState, mypropsAction)(MytestPages);

export default MytestPagesContainer;