import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
  // debugger
  return (
    <div className={classes.post}>
      <img className={classes.post_img} src='https://source.unsplash.com/random' />
      <h3>{props.name}</h3>
      <p>{props.text}</p>
      <div className={classes.post_link}>Like {props.like}</div>

    </div>
  ); 
}

export default Post;