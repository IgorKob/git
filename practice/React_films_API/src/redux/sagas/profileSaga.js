import React from "react"
import { call, put } from 'redux-saga/effects'
import { getLocalStorageFetch, setLocalStorageFetch } from "../../api"
import { SET_MY_WATCH_LIST, SET_IS_LOADING, SET_ERROR_MESS } from "../actionTypes"

export function* getLocalStorageSaga({nameDB}) {
    yield put({ type: SET_IS_LOADING })
    try {
        const response = yield call(getLocalStorageFetch, nameDB)
        if (response) {
            yield put({ type: SET_MY_WATCH_LIST, payload: response })
        }
    }
    catch(error) {
        yield put({ type: SET_ERROR_MESS, payload: error.response.data.message })
    }
        yield put({ type: SET_IS_LOADING})
}

export function* setLocalStorageSaga({nameDB, episodes}) {
    yield put({ type: SET_IS_LOADING })
    try {
        yield call(setLocalStorageFetch, nameDB, episodes)
        yield put({ type: SET_MY_WATCH_LIST, payload: episodes })
    }
    catch(error) {
        yield put({ type: SET_ERROR_MESS, payload: error.response.data.message })
    }
        yield put({ type: SET_IS_LOADING})
}