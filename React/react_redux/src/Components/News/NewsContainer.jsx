import React from 'react';
import {addNewsPostActionCreator, addNewsPostTextActionCreator} from "../../Redux/newsPages_reduce";
import News from "./News";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    textareaValue: state.newsPages.newPostText,
    newPost: state.newsPages.newPost
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewsPostTextActionCreator: (text) => {
      dispatch(addNewsPostTextActionCreator(text));
    },
    addNewsPostActionCreator: () => {
      dispatch(addNewsPostActionCreator());
    }
  }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;