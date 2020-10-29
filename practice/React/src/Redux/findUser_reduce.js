const ADD_FOLLOW = 'ADD_FOLLOW';
const ADD_UNFOLLOW = 'ADD_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

let initialState = {
  users: [
    // {
    //   id: 1,
    //   fullName: 'Admin',
    //   src: 'https://source.unsplash.com/random',
    //   followBtn: true,
    //   text: 'My follow is ...',
    //   location: {country: 'Urkaine', city: 'Lviv'},
    // },
    // {
    //   id: 2,
    //   fullName: 'Admin',
    //   src: 'https://source.unsplash.com/random',
    //   followBtn: false,
    //   text: 'My car ...',
    //   location: {country: 'Urkaine', city: 'Kyiv'},
    // },
    // {
    //   id: 3,
    //   fullName: 'Admin',
    //   src: 'https://source.unsplash.com/random',
    //   followBtn: true,
    //   text: 'My asd...',
    //   location: {country: 'Urkaine', city: 'Lviv'},
    // },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
    default:
      return state;
  }
}

export default findUserReduce;


export const addFwollowActionCreator = (userId) => {
  return {type: ADD_FOLLOW, userId: userId}
}
export const addUnFollowActionCreator = (userId) => {
  // debugger
  return {type: ADD_UNFOLLOW, userId: userId}
}
export const setUsersActionCreator = (users) => {
  return {type: SET_USERS, users: users}
}
export const setCurrentPageActionCreator = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}
export const setTotalUsersCountActionCreator = (totalUsersCount) => {
  return {type: SET_TOTAL_USER_COUNT, count: totalUsersCount}
}
