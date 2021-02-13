import React from "react"
import { call, put } from 'redux-saga/effects'
import { manifestFetch } from "../../api/api"
import { SET_MANIFEST, SET_IS_LOADING, SET_ERROR_MESS } from "../actionTypes"

export function* manifestSaga({roverName}) {
    yield put({ type: SET_IS_LOADING })
    try {
        const response = yield call(manifestFetch, roverName)
        if (response.status === 200) {
            yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest })
        } else {
            yield put({ type: SET_ERROR_MESS, payload: response.data.message })
        }
    }
    catch(error) {
        yield put({ type: SET_ERROR_MESS, payload: error.response.data.message })
    }
        yield put({ type: SET_IS_LOADING})
}