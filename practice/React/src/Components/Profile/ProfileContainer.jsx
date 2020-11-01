import React from 'react';
import {addPost, newPostText, setUsersProfile} from "../../Redux/postPages_reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from "react-router";
import {usersAPI} from "../../api/api";

class ProfileContainerClass extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || 2;

    usersAPI.getProfile(userId)
      .then((data) => {
        this.props.setUsersProfile(data);
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
