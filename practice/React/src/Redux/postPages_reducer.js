import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';

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
    case DELETE_POST:
      return {
        ...state,
        posts:[...state.posts.filter(el => el.id != action.postId)]
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
    case SAVE_PHOTO:
      return  {
      ...state,
        profile: {...state.profile, photos: action.photos}
    }
    default:
      return state;
  }
}

export default postPagesReduce;

export const addPost = (newPost) => {
  return {type: ADD_POST, newPost}
}
export const deletePost = (postId) => {
  return {type: DELETE_POST, postId}
}
export const savePhotoSuccess = (photos) => {
  // debugger
  return {type: SAVE_PHOTO, photos}
}

export const setUsersProfile = (profile) => {
  return {type: SET_USERS_PROFILE, profile: profile}
}
export const getUserProfile = (userId) => async (dispatch) => {
  let data = await usersAPI.getProfile(userId);
      dispatch(setUsersProfile(data));
}

export const setStatus = (status) => {
  return {type: SET_STATUS, status}
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
      dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
}
export const savePhoto = (file) => async (dispatch) => {
  // debugger
  let response = await profileAPI.savePhoto(file);
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
}