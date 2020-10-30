import React from 'react'
import { connect } from 'react-redux';
import { setStartPageActionCreator, setTotalCountActionCreator, setUsersActionCreator } from '../../myredux/users_reduce';
import Users from './Users';

const mypropsState = (state) => {
  return {
    users: state.users_reduce.users,
    totalCount: state.users_reduce.totalCount,
    startPage: state.users_reduce.startPage,
    pageSize: state.users_reduce.pageSize,
  }
}

const mypropsAction = (dispatch) => {
  return {
    addUsers: (users) => dispatch(setUsersActionCreator(users)),
    setTotalCount: (totalCount) => dispatch(setTotalCountActionCreator(totalCount)),
    setStartPage: (startPage) => dispatch(setStartPageActionCreator(startPage))
  }
}

const UsersContainer = connect(mypropsState, mypropsAction)(Users);

export default UsersContainer;