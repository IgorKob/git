const ADD_FOLLOW = 'ADD_FOLLOW';
const ADD_UNFOLLOW = 'ADD_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
};

const findUserReduce = (state = initialState, action) => {

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
      // debugger
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
    default:
      return state;
  }
}

export default findUserReduce;


export const followBtn = (userId) => {
  return {type: ADD_FOLLOW, userId: userId}
}
export const unfollowBtn = (userId) => {
  return {type: ADD_UNFOLLOW, userId: userId}
}
export const setUsers = (users) => {
  return {type: SET_USERS, users: users}
}
export const setCurrentPage = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}
export const setTotalUsersCount = (totalUsersCount) => {
  return {type: SET_TOTAL_USER_COUNT, count: totalUsersCount}
}
export const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
}
