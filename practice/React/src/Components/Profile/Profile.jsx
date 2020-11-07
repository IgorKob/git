import React from 'react';
import classes from './profile.module.css';
import Post from "../Post/Post";
import Preloader from "../all/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../utils/validators";
import {Textarea} from "../all/FormsControls/FormsControls";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const Profile = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  let addNewPost = (value) => {
    // newPostElement.current.value = '';
    props.addPost(value.newPost);
  }

//contact
  let arr = Object.entries(props.profile.contacts)

  return (
    <>
      <h3 className={classes.profile}>Profile</h3>

      {/*<ProfileStatus status={props.status}*/}
      {/*  updateStatus={props.updateStatus}*/}
      {/*/>      */}
      <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus}
      />

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

        <AddNewPostFormRedux onSubmit={addNewPost} />

      </div>

      {props.postPages.map((el) => (
        <Post key={el.id}  name={el.name} text={el.text} like={el.like} />
      ))}

    </>
  );
}

let maxLength10 = maxLengthCreater(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name='newPost'
             placeholder='Add post..'
             validate={[required, maxLength10]}
      />
      <button className={classes.NewMyPost_btn}>Send</button>
    </form>
  );
}

const AddNewPostFormRedux = reduxForm({form: 'PostFormPage'})(AddNewPostForm);

export default Profile;