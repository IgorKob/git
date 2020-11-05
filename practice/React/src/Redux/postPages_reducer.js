import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id : 0, name: 'Admin', text : 'my post', like : 1},
    {id : 1, name: 'Igor', text : 'my post asd', like : 11},
  ],
  profile: null,
  status: ''
};

const postPagesReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
      ...state,
      posts:[...state.posts, {id : 7, name: 'Admin', text : action.newPost, like : 0}]
    }
    case SET_USERS_PROFILE:
      return  {
      ...state,
        profile: action.profile
    }
    case SET_STATUS:
      return  {
      ...state,
        status: action.status
    }
    default:
      return state;
  }
}

export default postPagesReduce;

export const addPost = (newPost) => {
  return {type: ADD_POST, newPost}
}

export const setUsersProfile = (profile) => {
  return {type: SET_USERS_PROFILE, profile: profile}
}
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then((data) => {
      dispatch(setUsersProfile(data));
    });
}

export const setStatus = (status) => {
  return {type: SET_STATUS, status}
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then((response) => {
      dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then((response) => {
      // debugger
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
}