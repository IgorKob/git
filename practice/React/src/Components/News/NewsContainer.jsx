import React from 'react';
import classes from './news.module.css';
import {addNewsPostActionCreator, addNewsPostTextActionCreator} from "../../Redux/newsPages_reduce";
import News from "./News";
import {connect} from "react-redux";
import Messages from "../Messages/Messages";



// const NewsContainer = (props) => {
//   // debugger
//
//   let onChangeTextarea = (text) => {
//     props.dispatch(addNewsPostTextActionCreator(text));
//   }
//   let addPost = () => {
//     props.dispatch(addNewsPostActionCreator());
//   }
//
//   return (
//      <News
//        textareaValue={props.state.newsPages.newPostText}
//        addNewsPostTextActionCreator={onChangeTextarea}
//        addNewsPostActionCreator={addPost}
//        newPost={props.state.newsPages.newPost}
//
//      />
//   )
// }

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