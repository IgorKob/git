import React from 'react';
import {connect} from "react-redux";
// import FindUser from "./FindUser";
import FindUser from "./FindUserClassC";
import {
  addFwollowActionCreator,
  addUnFollowActionCreator,
  setCurrentPageActionCreator, setTotalUsersCountActionCreator,
  setUsersActionCreator
} from "../../Redux/findUser_reduce";

const mapStateToProps = (state) => {
  return {
    users: state.findUser.users,
    pageSize: state.findUser.pageSize,
    totalUsersCount: state.findUser.totalUsersCount,
    currentPage: state.findUser.currentPage
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountActionCreator(totalCount))
    },
  }
}

const FindUserContainer = connect(mapStateToProps, mapDispatchToProps)(FindUser);

export default FindUserContainer;