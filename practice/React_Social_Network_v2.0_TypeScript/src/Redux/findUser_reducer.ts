import { Dispatch } from "react";
import {usersAPI} from "../api/api";
import { AppStateType, BaseThunkType, InferActionsTypes } from "./redux_store";

export type initialStateFilterType = {
  term: string,
  // friend: null | boolean
}
 
let initialState = {
  users: [] as Array<any>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [12334, 12333, 12332] as Array<number>,
  filter: {
    term: '',
    // friend: null,
  } as initialStateFilterType
};

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


const findUserReduce = (state = initialState, action: ActionsTypes): initialStateType => {

  switch (action.type) {
    case 'ADD_FOLLOW':
      return {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.userId) { return {...el, followBtn: true};}
          return el;
        }),
      }
    case 'ADD_UNFOLLOW':
      return {   
        ...state,
        users: state.users.map(el => {
          if (el.id === action.userId) { return {...el, followBtn: false};}
          return el;
        }),
      }
    case 'SET_USERS':
    return {
      ...state,
      users: [...action.users]
    }
      case 'SET_CURRENT_PAGE':
    return {
      ...state,
      currentPage: action.currentPage
    }
    case 'SET_TOTAL_USER_COUNT':
    return {
      ...state,
      totalUsersCount: action.count
    }
    case 'TOGGLE_IS_FETCHING':
    return {
      ...state,
      isFetching: action.isFetching
    } 
    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
    return {
      ...state,
      followingInProgress: action.followingInProgress ?
        [...state.followingInProgress, action.userId] :
        state.followingInProgress.filter(el => el != action.userId)
    }
    case 'SET_FILTER':
      return {
        ...state,
        filter: {...state.filter, term: action.term}
      }
    default:
      return state;
  }
}

export default findUserReduce;


export const actions = {
  followBtn: (userId: number) => {
   return {type: 'ADD_FOLLOW', userId: userId} as const
  },
  unfollowBtn: (userId: number) => {
    return {type: 'ADD_UNFOLLOW', userId: userId} as const
  },
  setUsers: (users: any) => {
    return {type: 'SET_USERS', users: users} as const
  },
  setCurrentPage: (currentPage: number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage: currentPage} as const
  },
  setTotalUsersCount: (totalUsersCount: number) => {
    return {type: 'SET_TOTAL_USER_COUNT', count: totalUsersCount} as const
  },
  toggleIsFetching: (isFetching: boolean) => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching: isFetching} as const
  },
  toggleFollowingInProgress: (followingInProgress: any, userId: number) => {
    return {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', followingInProgress, userId} as const
  },
  setFilter: (term: string) => {
    return {type: 'SET_FILTER', term} as const
  },
}

  
export const getUsersThunkCreater = (page: number, pageSize: number, term: string):ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setFilter(term));    
debugger
    let data = await usersAPI.getUsers(page, pageSize, term);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
}


const _followAndUnfollow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, followAndUnfollowBtn: any ) => {
  dispatch(actions.toggleFollowingInProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(followAndUnfollowBtn(userId));
  }
  dispatch(actions.toggleFollowingInProgress(false, userId));
}

export const follow = (userId: number): ThunkType  => async (dispatch) => {
  await _followAndUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followBtn);
}

export const unfollow = (userId: number): ThunkType  => async (dispatch) => {
  await _followAndUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowBtn);
}