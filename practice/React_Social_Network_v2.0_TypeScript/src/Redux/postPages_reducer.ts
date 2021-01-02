import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./redux_store";

type initialStatePostType = {
     id: number , 
     name: string, 
     text: string, 
     like: number
}
type initialStateType = {
  posts: Array<initialStatePostType>,
  profile: string | null,
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

// export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>


const postPagesReduce = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case 'ADD_POST':
      return {
      ...state, 
      posts:[...state.posts, {id : 7, name: 'Admin', text : action.newPost, like : 0}]
    } 
    case 'DELETE_POST':
      return { 
        ...state,
        posts:[...state.posts.filter(el => el.id != action.postId)]
      }
    case 'SET_USERS_PROFILE':
      return  {
      ...state,
        profile: action.profile
    }
    case 'SET_STATUS':
      return  {
      ...state,
        status: action.status
    }
    case 'SAVE_PHOTO':
      return  {
      ...state,
        // profile: {...state.profile, photos: action.photos}    //TypeScript error
    } 
    default: 
      return state;
  }
}

export default postPagesReduce;

 
export const actions = {
  addPost: (newPost: string) => {
    return {type: 'ADD_POST', newPost} as const
  },
  deletePost: (postId: number) => {
    return {type: 'DELETE_POST', postId} as const
  },
  savePhotoSuccess: (photos: string | null) => {
    return {type: 'SAVE_PHOTO', photos} as const
  },
  setUsersProfile: (profile: string | null) => {
    return {type: 'SET_USERS_PROFILE', profile: profile} as const
  },
  setStatus: (status: string) => {
    return {type: 'SET_STATUS', status} as const
  }
}


export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
  let data = await usersAPI.getProfile(userId);
    dispatch(actions.setUsersProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(response.data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: string): ThunkType => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: any): ThunkType => async (dispatch, getState) => {
  const userId = getState().authUser.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else { 
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('ProfileDataForm',{_error: message}));
    return Promise.reject(response.data.messages[0]);
  }
}