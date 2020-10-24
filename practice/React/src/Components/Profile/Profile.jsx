import React from 'react';
import classes from './profile.module.css';
import Post from "../Post/Post";

// {id : 0, name: 'Admin', text : 'my post', like : 1},
const Profile = (props) => {
  // debugger

  let newPostElement = React.createRef();
  let addPost = () => {
    // let text = newPostElement.current.value;
    // props.addPost(text);
    props.addPost();
    // newPostElement.current.value = '';
  }

  let newPostText = () => {
    let text = newPostElement.current.value;
    props.newPostText(text);
  }

  return (
    <>
      <header className={classes.profile_header}>
        <img className={classes.profile_header__img} src='https://source.unsplash.com/random' />
      </header>
      <h3 className={classes.profile}>Profile</h3>

      <div className={classes.NewMyPost}>
        <textarea ref={newPostElement} value={props.newPost} onChange={newPostText} className={classes.NewMyPost_text} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={addPost} className={classes.NewMyPost_btn}>Send</button>
      </div>

      <Post  name='admin' text='' like='' />
      {props.posts.map((el) => (
        <Post key={el.id}  name={el.name} text={el.text} like={el.like} />
      ))}


    </>
  );
}

export default Profile;