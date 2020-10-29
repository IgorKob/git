import React from 'react';
import {addPostActionCreator, newPostTextActionCreator} from "../../Redux/postPages_reduce";
import Profile from "./Profile";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    postPages: state.postPages.posts,
    newPost: state.postPages.newPost
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newPostText: (text) => {
      let action = newPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;