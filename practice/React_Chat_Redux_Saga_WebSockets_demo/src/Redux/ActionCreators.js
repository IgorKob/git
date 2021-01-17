import * as types from './ActionTypes'

let nextMessageId = 0
const nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.SET_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const messageList = (message, author) => ({
  type: types.GET_MESSAGES,
  id: nextMessageId++,
  message,
  author
})

export const usersList = users => ({ type: types.GET_USERS, users })

export const addUser = (id, name) => ({ type: types.SET_USER, id, name })