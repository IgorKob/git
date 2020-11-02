import React from 'react';
import {addPost, getUserProfile, newPostText} from "../../Redux/postPages_reducer";
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
  }

  render() {
    // debugger
    return (
      <Profile {...this.props}
               profile={this.props.profile}
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
    isAuth: state.authUser.isAuth
  }
}

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// const ProfileContainer = connect(mapStateToProps, {newPostText, addPost, getUserProfile})(WithUrlDataContainerComponent);
//
// export default ProfileContainer;

export default compose(
  connect(mapStateToProps, {newPostText, addPost, getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainerClass);
