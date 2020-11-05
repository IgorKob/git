import React from 'react';
import {addPost, getStatus, getUserProfile, updateStatus} from "../../Redux/postPages_reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainerClass extends React.Component {

  componentDidMount() {
    // debugger
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        userId = this.props.history.push('/login');
      }
    }
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

let mapStateToProps = (state) => {
  return {
    postPages: state.postPages.posts,
    profile: state.postPages.profile,
    isAuth: state.authUser.isAuth,
    status: state.postPages.status,
    authorizedUserId: state.authUser.userId,
  }
}

export default compose(
  connect(mapStateToProps, {addPost, getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainerClass);
