import classes from "./profile.module.css";
import React from "react";
import Form, {Field, reduxForm} from "redux-form";
// import {Field, reduxForm} from "redux-form";
import {Input} from "../all/FormsControls/FormsControls";
import {maxLengthCreater, required} from "../../utils/validators";
import createField from "redux-form/lib/createField";

export const ProfileDataForm = (props) => {
    // debugger
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
    <form onSubmit={props.handleSubmit}>

      <div><button>Save</button></div>

        {props.error && <div className={classes.error}>{props.error}</div>}

        <div>fullName: <Field component={Input}
                              type="text"
                              name={'fullName'}
                              placeholder={'fullName ...'}
                              // validate={[required, maxLength30]}

        /></div>

      <div>userId: {props.profile.userId}</div>

      <img src={props.profile.photos.large || userPhoto} className={classes.userPhoto} />
      {props.isOwner && <input type='file' onChange={(event) => onPhotoSelected(event)} />}

      {/*<div>aboutMe: {props.profile.aboutMe}</div>*/}
      <div>aboutMe: <Field component={Input}
                           type="text"
                           name={'aboutMe'}
                           placeholder={'aboutMe ...'}
                           // validate={[required, maxLength30]}
      /></div>

      {/*<div>lookingForAJob: {props.profile.lookingForAJob}</div>*/}
      <div>lookingForAJob: <Field component={Input}
                                  type="text"
                                  name={'lookingForAJob'}
                                  placeholder={'lookingForAJob ...'}
          // validate={[required, maxLength30]}
      /></div>

      {/*<div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>*/}
      <div>lookingForAJobDescription: <Field component={Input}
                                             type="text"
                                             name={'lookingForAJobDescription'}
                                             placeholder={'lookingForAJobDescription ...'}
          // validate={[required, maxLength30]}
      /></div>

      {/*<div>contacts: {arr.map(el=>{*/}
      {/*  return (*/}
      {/*      // <div><b>{el[0]}</b>: {el[1]}</div>*/}
      {/*      <div><b>{el[0]}</b>: <Field component={Input}*/}
      {/*                                  type="text"*/}
      {/*                                  name={`${el[1]}`}*/}
      {/*                                  placeholder={'...'}*/}
      {/*          // validate={[required, maxLength30]}*/}
      {/*      /></div>*/}
      {/*  )*/}
      {/*})}*/}
      {/*</div>*/}
      <div>
          <b>Contacts:</b> {Object.keys(props.profile.contacts).map((el, index) => {
              return (
                  <div key={index.toString()}>
                      {/*<b>{el}:</b><p>{createField(el, "contacts." + el, [], Input)}</p>*/}
                      <b>{el}: </b><p><Field component={Input}
                                            type="text"
                                            name={`contacts.${el}`}
                                            placeholder={'...'}
                  /></p>
                  </div>
              );
      })}
      </div>
    </form>
  );
}


export const ProfileDataReduxForm = reduxForm({
    form: 'ProfileDataForm'
})(ProfileDataForm)