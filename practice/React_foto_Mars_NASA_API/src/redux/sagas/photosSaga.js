import React from "react"
import { call, put } from 'redux-saga/effects'
import { photosFetch } from "../../api/api"
import { SET_IS_LOADING2, SET_PHOTOS, SET_ERROR_MESS2 } from "../actionTypes"

export function* photosSaga({name, sol, camera, page}) {
    yield put({ type: SET_IS_LOADING2})
    try {
        const response = yield call(photosFetch, name, sol, camera, page)
        if (response.status === 200) {
            yield put({ type: SET_PHOTOS, payload: response.data })
        } else {
            yield put({ type: SET_ERROR_MESS2, payload: response.data.message })
        }
    }
    catch(error) {
        yield put({ type: SET_ERROR_MESS2, payload: error.response.data.message })
    }
        yield put({ type: SET_IS_LOADING2})
}