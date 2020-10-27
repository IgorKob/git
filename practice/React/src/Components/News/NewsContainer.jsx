import React from 'react';
import classes from './news.module.css';
import {addNewsPostActionCreator, addNewsPostTextActionCreator} from "../../Redux/newsPages_reduce";
import News from "./News";



const NewsContainer = (props) => {
  // debugger

  let onChangeTextarea = (text) => {
    props.dispatch(addNewsPostTextActionCreator(text));
  }
  let addPost = () => {
    props.dispatch(addNewsPostActionCreator());
  }

  return (
     <News
       textareaValue={props.state.newsPages.newPostText}
       addNewsPostTextActionCreator={onChangeTextarea}
       addNewsPostActionCreator={addPost}
       newPost={props.state.newsPages.newPost}

     />
  )
}

export default NewsContainer;