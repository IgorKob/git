import { takeEvery } from 'redux-saga/effects'
import * as types from './ActionTypes'
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware()

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.SET_MESSAGE, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage

