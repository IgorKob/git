import classes2 from "./profile.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../all/FormsControls/FormsControls";
import {maxLengthCreater, required} from "../../utils/validators";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';

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


export const ProfileDataForm = (props) => {
  const classes = useStyles();

  let arr = Object.entries(props.profile.contacts)
  let userPhoto = 'https://source.unsplash.com/random';

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  let maxLength30 = maxLengthCreater(30);

  return (
    <form onSubmit={props.handleSubmit}>

        <div>fullName: <Field component={Input}
                              type="text"
                              name={'fullName'}
                              placeholder={'fullName ...'}
                              // validate={[required, maxLength30]}

        /></div>

      <div>userId: {props.profile.userId}</div>


      <img src={props.profile.photos.large || userPhoto} className={classes2.userPhoto} />

{/* Upload photo */}
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


{/* edit */}
      <div>aboutMe: <Field component={Input}
                           type="text"
                           name={'aboutMe'}
                           placeholder={'aboutMe ...'}
                           // validate={[required, maxLength30]}
      /></div>

      <div>lookingForAJob: <Field component={Input}
                                  type="text"
                                  name={'lookingForAJob'}
                                  placeholder={'lookingForAJob ...'}
      /></div>


      <div>lookingForAJobDescription: <Field component={Input}
                                             type="text"
                                             name={'lookingForAJobDescription'}
                                             placeholder={'lookingForAJobDescription ...'}

      /></div>


      <div>
          <b>Contacts:</b> {Object.keys(props.profile.contacts).map((el, index) => {
              return (
                  <div key={index.toString()}>
                      <b>{el}: </b><p><Field component={Input}
                                            type="text"
                                            name={`contacts.${el}`}
                                            placeholder={'...'}
                  /></p>
                  </div>
              );
      })}
      </div>



{/* Save */}
      <div className={classes.root}>
        <input
          className={classes.input}
          id="contained-button-file3"
          type='submit'
        />
        <label htmlFor="contained-button-file3">
          <Button variant="contained" color="primary" component="span" startIcon={<SaveIcon />}>
             Save
          </Button>
        </label>
        </div>


{/* error */}
        {props.error && <div className={classes2.error}>{props.error}</div>}

        
    </form>
  );
}


export const ProfileDataReduxForm = reduxForm({
    form: 'ProfileDataForm'
})(ProfileDataForm)