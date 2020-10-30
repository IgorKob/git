import React from 'react'

const ADD_USERS = 'ADD_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_START_PAGE = 'SET_START_PAGE'

const initialstate = {
  totalCount: 0,
  startPage: 1,
  pageSize: 100,
  users: []
};

const users_reduce = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: [...action.users]      
      }
      case SET_TOTAL_COUNT:
        return {
          ...state,
          totalCount: action.totalCount     
        }
        case SET_START_PAGE:
          return {
            ...state,
            startPage: action.startPage     
          }
    default:
      return state;
  }
}

export const setUsersActionCreator = (users) => {
  return {type: ADD_USERS, users: users}
}
export const setTotalCountActionCreator = (totalCount) => {
  return {type: SET_TOTAL_COUNT, totalCount: totalCount}
}
export const setStartPageActionCreator = (startPage) => {
  return {type: SET_START_PAGE, startPage: startPage}
}

export default users_reduce;