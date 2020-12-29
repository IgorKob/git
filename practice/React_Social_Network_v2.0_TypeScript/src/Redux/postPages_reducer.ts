import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';

type initialStatePostType = {
     id: number , 
     name: string, 
     text: string, 
     like: number
}
type initialStateType = {
  posts: Array<initialStatePostType>,
  profile: any,
  status: string | null
};

let initialState: initialStateType = {
  posts: [
    {id : 0, name: 'Admin', text : 'my post', like : 1},
    {id : 1, name: 'Igor', text : 'my post asd', like : 11},
  ],
  profile: null,
  status: ''
};

const postPagesReduce = (state = initialState, action: any): initialStateType => {
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

type addPostType = {
  type: typeof ADD_POST, 
  newPost: any
}
export const addPost = (newPost: any): addPostType => {
  return {type: ADD_POST, newPost}
}
type deletePostType = {
  type: typeof DELETE_POST, 
  postId: number
}
export const deletePost = (postId: number): deletePostType => {
  return {type: DELETE_POST, postId}
}
type savePhotoSuccessType = {
  type: typeof SAVE_PHOTO, 
  photos: string
}
export const savePhotoSuccess = (photos: string): savePhotoSuccessType => {
  return {type: SAVE_PHOTO, photos}
}
type setUsersProfileType = {
  type: typeof SET_USERS_PROFILE, 
  profile: any
}
export const setUsersProfile = (profile: any): setUsersProfileType => {
  return {type: SET_USERS_PROFILE, profile: profile}
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  // debugger
  let data = await usersAPI.getProfile(userId);
      dispatch(setUsersProfile(data));
}

type setStatusType = {
  type: typeof SET_STATUS, 
  status: string
}
export const setStatus = (status: string): setStatusType => {
  return {type: SET_STATUS, status}
}
export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
      dispatch(setStatus(response.data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
  // debugger
  let response = await profileAPI.savePhoto(file);
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
}

export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
  // debugger
  const userId = getState().authUser.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('ProfileDataForm',{_error: message}));
    // dispatch(stopSubmit("ProfileDataForm", {"contacts": {"facebook": response.data.messages[0]} }));
    return Promise.reject(response.data.messages[0]);
  }
}