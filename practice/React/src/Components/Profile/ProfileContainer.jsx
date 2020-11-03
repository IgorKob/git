import React from 'react';
import {addPost, getStatus, getUserProfile, newPostText, updateStatus} from "../../Redux/postPages_reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
// import {withRouter, Redirect} from "react-router";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
// import Redirect from "react-router-dom";

class ProfileContainerClass extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || 2;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);

  }

  render() {
    // debugger
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
      />
    )
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainerClass)


let mapStateToProps = (state) => {
  return {
    postPages: state.postPages.posts,
    newPost: state.postPages.newPost,
    profile: state.postPages.profile,
    isAuth: state.authUser.isAuth,
    status: state.postPages.status,
  }
}

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// const ProfileContainer = connect(mapStateToProps, {newPostText, addPost, getUserProfile})(WithUrlDataContainerComponent);
//
// export default ProfileContainer;

export default compose(
  connect(mapStateToProps, {newPostText, addPost, getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainerClass);
