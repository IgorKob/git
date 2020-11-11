import React, {useState} from 'react';
import classes from './profile.module.css';
import Post from "../Post/Post";
import Preloader from "../all/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../utils/validators";
import {Textarea} from "../all/FormsControls/FormsControls";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileData} from "./ProfileData";
import {ProfileDataForm, ProfileDataReduxForm} from "./ProfileDataForm";


const Profile = (props) => {

  const [editMode, setEditMode] = useState(false);


// debugger
  if (!props.profile) {
    return <Preloader />
  }

  let addNewPost = (value) => {
    // newPostElement.current.value = '';
    props.addPost(value.newPost);
  }


  const onSubmit = (formData) => {
      props.saveProfile(formData).then(() => {
          setEditMode(false);
      });
  }


  return (
    <>
      <h3 className={classes.profile}>Profile</h3>

      {/*<ProfileStatus status={props.status}*/}
      {/*  updateStatus={props.updateStatus}*/}
      {/*/>      */}
      <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus}
      />

      {editMode ? <ProfileDataReduxForm {...props}
                                        onSubmit={onSubmit}
                                        initialValues={props.profile}
                                />
                : <ProfileData {...props} goToEditMode={() => setEditMode(true)}/>}

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


