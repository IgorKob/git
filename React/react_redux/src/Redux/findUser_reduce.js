const ADD_FOLLOW = 'ADD_FOLLOW';
const ADD_UNFOLLOW = 'ADD_UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
      users: [...state.users, ...action.users]
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
