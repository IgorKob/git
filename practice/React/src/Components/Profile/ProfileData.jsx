import classes from "./profile.module.css";
import React from "react";

export const ProfileData = (props) => {
  //contact
  let arr = Object.entries(props.profile.contacts)
  let userPhoto = 'https://source.unsplash.com/random';

  const onPhotoSelected = (e) => {
    // debugger
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      {props.isOwner && <div onClick={props.goToEditMode}><button>Edit</button></div>}
      <div>fullName: {props.profile.fullName}</div>
      <div>userId: {props.profile.userId}</div>
      <img src={props.profile.photos.large || userPhoto} className={classes.userPhoto} />
      {props.isOwner && <input type='file' onChange={(event) => onPhotoSelected(event)} />}

      <div>aboutMe: {props.profile.aboutMe}</div>
      <div>lookingForAJob: {props.profile.lookingForAJob}</div>
      <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
      <div>contacts: {arr.map(el=>{
        return (
            <div><b>{el[0]}</b>: {el[1]}</div>
        )
      })}
      </div>
    </div>
  );
}