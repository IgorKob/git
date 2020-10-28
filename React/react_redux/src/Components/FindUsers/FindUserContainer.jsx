import React from 'react';
import {connect} from "react-redux";
import FindUser from "./FindUser";
import {addFwollowActionCreator, addUnFollowActionCreator, setUsersActionCreator} from "../../Redux/findUser_reduce";

const mapStateToProps = (state) => {
  return {
    users: state.findUser.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followBtn: (userId) => {
      dispatch(addFwollowActionCreator(userId))
    },
    unfollowBtn: (userId) => {
      dispatch(addUnFollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
  }
}

const FindUserContainer = connect(mapStateToProps, mapDispatchToProps)(FindUser);

export default FindUserContainer;