import React from "react"
import { call, put } from 'redux-saga/effects'
import { locationFetch } from "../../api"
import { SET_LOCATION, SET_IS_LOADING, SET_ERROR_MESS } from "../actionTypes"

export function* locationSaga({page, name, typeLocation, dimension}) {
    const encodeName = encodeURI(name);
    const encodeType = encodeURI(typeLocation);
    const encodeDimension = encodeURI(dimension);

    yield put({ type: SET_IS_LOADING })
    try {
        const response = yield call(locationFetch, page, encodeName, encodeType, encodeDimension)
        yield put({ type: SET_ERROR_MESS, payload: ''})
        if (response.status === 200) {
            yield put({ type: SET_LOCATION, payload: response.data })
        } else {
            yield put({ type: SET_ERROR_MESS, payload: response.data.message })
        }
    }
    catch(error) {
        yield put({ type: SET_ERROR_MESS, payload: error.response.data.error })
    }
        yield put({ type: SET_IS_LOADING})
}