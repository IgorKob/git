import * as types from '../Redux/ActionTypes'
import { messageList, usersList } from '../Redux/ActionCreators'

const setupSocket = (dispatch, username) => {

  const socket = new WebSocket('ws://localhost:8989')

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.SET_USER,
      name: username
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case types.SET_MESSAGE:
        dispatch(messageList(data.message, data.author))
        break
      case types.GET_USERS:
        dispatch(usersList(data.users))
        break
      default:
        break
    }
  }

  return socket
}

export default setupSocket