import classes2 from "./profile.module.css";
import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export const ProfileData = (props) => {

  const classes = useStyles();

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
  
      <div>fullName: <b>{props.profile.fullName}</b></div>
      <div>userId: {props.profile.userId}</div>


      <img src={props.profile.photos.large || userPhoto} className={classes2.userPhoto} />

{/* btn Upload photo */}
      {props.isOwner && (
        <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(event) => onPhotoSelected(event)}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
            Upload photo
          </Button>
        </label>
        </div>
      )}


{/* contacts */}
      <h4>My contacts:</h4>
      <div>aboutMe: {props.profile.aboutMe}</div>
      <div>lookingForAJob: {props.profile.lookingForAJob}</div>
      <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
      <div>contacts: {arr.map(el=>{
        return (
            <div><b>{el[0]}</b>: {el[1]}</div>
        )
      })}
      </div>


{/* btn Edit contacts*/}
      {props.isOwner && (
      <div className={classes.root}>
        <input
          className={classes.input}
          id="contained-button-file2"
          onClick={props.goToEditMode}
        />
        <label htmlFor="contained-button-file2">
          <Button variant="contained" color="primary" component="span" startIcon={<EditIcon />}>
            Edit contacts
          </Button>
        </label>
        </div>
      )}

    </div>
  );
}