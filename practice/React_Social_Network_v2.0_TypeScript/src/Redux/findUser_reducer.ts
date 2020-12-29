import {usersAPI} from "../api/api";

const ADD_FOLLOW = 'ADD_FOLLOW';
const ADD_UNFOLLOW = 'ADD_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [] as Array<any>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [12334, 12333, 12332] as Array<number>,
};

export type initialStateType = typeof initialState;

const findUserReduce = (state = initialState, action: any): initialStateType => {

  switch (action.type) {
    case ADD_FOLLOW:
      return {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.userId) { return {...el, followBtn: true};}
          return el;
        }),
      }
    case ADD_UNFOLLOW:
      return {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.userId) { return {...el, followBtn: false};}
          return el;
        }),
      }
    case SET_USERS:
    return {
      ...state,
      users: [...action.users]
    }
      case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.currentPage
    }
    case SET_TOTAL_USER_COUNT:
    return {
      ...state,
      totalUsersCount: action.count
    }
    case TOGGLE_IS_FETCHING:
    return {
      ...state,
      isFetching: action.isFetching
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
    return {
      ...state,
      followingInProgress: action.followingInProgress ?
        [...state.followingInProgress, action.userId] :
        state.followingInProgress.filter(el => el != action.userId)
    }
    default:
      return state;
  }
}

export default findUserReduce;


type followBtnType = {
  type: typeof ADD_FOLLOW, 
  userId: number
}
export const followBtn = (userId: number): followBtnType => {
  return {type: ADD_FOLLOW, userId: userId}
}
type unfollowBtnType = {
  type: typeof ADD_UNFOLLOW, 
  userId: number
}
export const unfollowBtn = (userId: number): unfollowBtnType => {
  return {type: ADD_UNFOLLOW, userId: userId}
}
type setUsersType = {
  type: typeof SET_USERS, 
  users: any
}
export const setUsers = (users: any): setUsersType => {
  return {type: SET_USERS, users: users}
}
type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE, 
  currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageType => {
  return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}
type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USER_COUNT, 
  count: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => {
  return {type: SET_TOTAL_USER_COUNT, count: totalUsersCount}
}
type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING, 
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => {
  return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}
type toggleFollowingInProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, 
  followingInProgress: any, 
  userId: number 
}
export const toggleFollowingInProgress = (followingInProgress: any, userId: number): toggleFollowingInProgressType => {
  return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId}
}


export const getUsersThunkCreater = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
}


export const followAndUnfollow = async (dispatch: any, userId: number, apiMethod: any, followAndUnfollowBtn: any) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(followAndUnfollowBtn(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {
  followAndUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followBtn);
}

export const unfollow = (userId: number) => async (dispatch: any) => {
  followAndUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowBtn);
}