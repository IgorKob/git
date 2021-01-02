// kim test reducer fun
import findUserReduce, { initialStateType } from "./findUser_reducer"
import { actions } from './findUser_reducer';

let state: initialStateType;
  // @ts-ignore
beforeEach(() => {
  state = {
    users: [
      {id: 0, name: 'Admin1', followed: false, photos: {small: null, large: null}, status: 'status1'},
      {id: 0, name: 'Admin2', followed: false, photos: {small: null, large: null}, status: 'status2'},
      {id: 0, name: 'Admin3', followed: true, photos: {small: null, large: null}, status: 'status3'},
      {id: 0, name: 'Admin4', followed: true, photos: {small: null, large: null}, status: 'status4'},
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
  };
})
  // @ts-ignore
test("1. Test: follow success", () => {

  const newState = findUserReduce(state, actions.followBtn(1));
  // @ts-ignore
  expect(newState.users[0].followed).toFalsy();
  // @ts-ignore
  expect(newState.users[1].followed).toBeTruthy();
})