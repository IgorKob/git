import React from 'react';
import classes from './profile.module.css';
import Post from "../Post/Post";
import Preloader from "../all/Preloader/Preloader";

const Profile = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  let newPostElement = React.createRef();
  let addPost = () => {
    newPostElement.current.value = '';
    props.addPost();
  }

  let newPostText = () => {
    let text = newPostElement.current.value;
    props.newPostText(text);
  }

//contact
  let arr = Object.entries(props.profile.contacts)

  return (
    <>
      <header className={classes.profile_header}>
        <img className={classes.profile_header__img} src='https://source.unsplash.com/random' />
      </header>
      <h3 className={classes.profile}>Profile</h3>

      <div>
        <div>fullName: {props.profile.fullName}</div>
        <div>userId: {props.profile.userId}</div>
        <img src={props.profile.photos.large} />
        <div>aboutMe: {props.profile.aboutMe}</div>
        <div>lookingForAJob: {props.profile.lookingForAJob}</div>
        <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
        <div>contacts: {arr.map(el=>{
          return (
            <div>{el[0]}: {el[1]}</div>
          )
        })}
        </div>


      </div>

      <div className={classes.NewMyPost}>
        <textarea ref={newPostElement}
                  value={props.newPost}
                  onChange={newPostText}
                  className={classes.NewMyPost_text}
                  name=""
                  id=""
                  cols="30"
                  rows="10">

        </textarea>
        <button onClick={addPost} className={classes.NewMyPost_btn}>Send</button>
      </div>
      {props.postPages.map((el) => (
        <Post key={el.id}  name={el.name} text={el.text} like={el.like} />
      ))}


    </>
  );
}

export default Profile;