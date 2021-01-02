// kim 'jest' test thunk fun
import findUserReduce, { initialStateType } from "./findUser_reducer"
import { actions } from './findUser_reducer';
import { usersAPI } from './../api/api';

jest.mock('./../api/api')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const result: APIResponseType = {
  resultCode: ResultCodesEnum.Success,
  messages: [],
  data: {}
} 

// @ts-ignore
usersAPIMock.followBtn.mockReturnValue(Promise.resolve(result));


// @ts-ignore
test("1. Test thunk: follow success", async () => {

  const thunk = actions.followBtn(1);

  // @ts-ignore
  const dispatchMock = jest.fn();

  const getStateMock = jest.fn();

  // @ts-ignore
  await thunk(dispatchMock, getStateMock, {})

  // @ts-ignore
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
})