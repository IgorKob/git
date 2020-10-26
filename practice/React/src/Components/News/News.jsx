import React from 'react';
import classes from './news.module.css';
import {addNewsPostActionCreator, addNewsPostTextActionCreator} from "../../Redux/newsPages_reduce";



const News = (props) => {
  // debugger
  let onChangeTextarea = (event) => {
    let text = event.target.value;
    props.dispatch(addNewsPostTextActionCreator(text));
  }
  let addPost = () => {
    props.dispatch(addNewsPostActionCreator());
  }
  let textareaValue = props.state.newsPages.newPostText;
  return (
  <>
    <h3>news</h3>
    <div className="add_new_post">
      <textarea
        value={textareaValue}
        onChange={onChangeTextarea}
        className="add_textarea"
        placeholder='Add new post'
      ></textarea>
      <button onClick={addPost} className={classes.addPost_btn}>Add post</button>
    </div>
    <div className="all_post">
      {props.state.newsPages.newPost.map(el => (
        <div key={el.id} className={classes.post}>
          {el.name} : {el.text}
        </div>
      ))}
    </div>
    </>
  )
}

export default News;