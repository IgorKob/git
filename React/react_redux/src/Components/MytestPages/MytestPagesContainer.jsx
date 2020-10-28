import React from 'react'
import {connect} from "react-redux";
import MytestPages from "./MytestPages";
import {mytestaddActionCreater, mytestChangeActionCreater} from "../../Redux/mytestPages_reduce";

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
    }
  }
};

const MytestPagesContainer = connect(mypropsState, mypropsAction)(MytestPages);

export default MytestPagesContainer;