import classes from "./profile.module.css";
import React from "react";
// import Form, {Field} from "redux-form";
import {Field, reduxForm} from "redux-form";
import {Input} from "../all/FormsControls/FormsControls";
import {maxLengthCreater, required} from "../../utils/validators";

export const ProfileDataForm = (props) => {
  //contact
  let arr = Object.entries(props.profile.contacts)
  let userPhoto = 'https://source.unsplash.com/random';

  const onPhotoSelected = (e) => {
    // debugger
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  let maxLength30 = maxLengthCreater(30);

  return (
    <Form>
      <div onClick={props.goToSaveMode}><button>Save</button></div>
      <div>fullName: {<Field component={Input}
                             type="text"
                             name={'fullName'}
                             placeholder={'Full name ...'}
                             validate={[required, maxLength30]}
      />}</div>
      <div>userId: {props.profile.userId}</div>
      <img src={props.profile.photos.large || userPhoto} className={classes.userPhoto} />
      {props.isOwner && <input type='file' onChange={(event) => onPhotoSelected(event)} />}

      <div>aboutMe: {props.profile.aboutMe}</div>
      <div>lookingForAJob: {props.profile.lookingForAJob}</div>
      <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
      <div>contacts: {arr.map(el=>{
        return (
          <div>{el[0]}: {el[1]}</div>
        )
      })}
      </div>
    </Form>
  );
}