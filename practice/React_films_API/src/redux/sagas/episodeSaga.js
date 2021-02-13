import React from "react"
import { call, put } from 'redux-saga/effects'
import { episodeFetch } from "../../api"
import { SET_EPISODE, SET_IS_LOADING, SET_ERROR_MESS } from "../actionTypes"

export function* episodeSaga({page, name, episode}) {
    const encodeName = encodeURI(name);
    const encodeEpisode = encodeURI(episode);
    
    yield put({ type: SET_IS_LOADING })
    try {
        const response = yield call(episodeFetch, page, encodeName, encodeEpisode)       
        if (response.status === 200) {
            yield put({ type: SET_EPISODE, payload: response.data })
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