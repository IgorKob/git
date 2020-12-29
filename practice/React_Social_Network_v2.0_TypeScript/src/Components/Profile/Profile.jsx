import React, {useState} from 'react';
import classes from './profile.module.css';
import Post from "../Post/Post";
import Preloader from "../all/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../utils/validators";
import {Textarea} from "../all/FormsControls/FormsControls";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileData} from "./ProfileData";
import {ProfileDataReduxForm} from "./ProfileDataForm";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Profile = (props) => {

  const [editMode, setEditMode] = useState(false);

// debugger
  if (!props.profile) {
    return <Preloader />
  }

  let addNewPost = (value) => {
    props.addPost(value.newPost);
    // newPostElement.current.value = '';
  }


  const onSubmit = (formData) => {
      props.saveProfile(formData).then(() => {
          setEditMode(false);
      });
  }


  return (
    <>
      <h3 className={classes.profile}>Profile</h3>

{/* Status */}
      <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus}
      />


{/* Contact form */}
      {editMode ? <ProfileDataReduxForm {...props}
                                        onSubmit={onSubmit}
                                        initialValues={props.profile}
                                />
                : <ProfileData {...props} goToEditMode={() => setEditMode(true)}/>}

                
     <br></br>

{/* My post */}
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
  const classes = useStyles();

  return (
    <form onSubmit={props.handleSubmit}>
 
      <Field component={Textarea}
             name='newPost'
             placeholder='Add post..'
             validate={[required, maxLength10]}
             style={{width: '100%'}}
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        type='submit'
      >
        Send
      </Button>

    </form>
  );
}

const AddNewPostFormRedux = reduxForm({form: 'PostFormPage'})(AddNewPostForm);

export default Profile;


