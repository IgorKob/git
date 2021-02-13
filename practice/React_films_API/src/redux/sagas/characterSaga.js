import React from "react"
import { call, put } from 'redux-saga/effects'
import { characterFetch } from "../../api"
import { SET_CHARACTER, SET_IS_LOADING, SET_ERROR_MESS } from "../actionTypes"

export function* characterSaga({page, species, status, gender}) {
    yield put({ type: SET_IS_LOADING })
    try {
        const response = yield call(characterFetch, page, species, status, gender)
        if (response.status === 200) {
            yield put({ type: SET_CHARACTER, payload: response.data })
            yield put({ type: SET_ERROR_MESS, payload: ''})
        } else {
            yield put({ type: SET_ERROR_MESS, payload: response.data.message })
        }
    }
    catch(error) {
        yield put({ type: SET_ERROR_MESS, payload: error.response.data.error })
    }
        yield put({ type: SET_IS_LOADING})
}