import React from 'react';
import {addPost, newPostText, setUsersProfile} from "../../Redux/postPages_reduce";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
// import withRouter from "react-router-dom";
import { withRouter } from "react-router";

class ProfileContainerClass extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.id || 2
    // debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
  }

  render() {
    // debugger
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    postPages: state.postPages.posts,
    newPost: state.postPages.newPost,
    profile: state.postPages.profile,
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerClass);

const ProfileContainer = connect(mapStateToProps, {newPostText, addPost, setUsersProfile})(WithUrlDataContainerComponent);

export default ProfileContainer;
