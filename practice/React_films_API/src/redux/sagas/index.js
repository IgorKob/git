import React from 'react'
import { takeEvery } from 'redux-saga/effects'
import { CHARACTER_FETCH, EPISODE_FETCH, LOCATION_FETCH, GET_LOCALSTORAGE, SET_LOCALSTORAGE } from '../actionTypes';
import { characterSaga } from './characterSaga';
import { episodeSaga } from './episodeSaga';
import { locationSaga } from './locationSaga';
import { getLocalStorageSaga } from './profileSaga';
import { setLocalStorageSaga } from './profileSaga';

export default function* rootSaga() {
    yield takeEvery(CHARACTER_FETCH, characterSaga);
    yield takeEvery(EPISODE_FETCH, episodeSaga);
    yield takeEvery(LOCATION_FETCH, locationSaga);
    yield takeEvery(GET_LOCALSTORAGE, getLocalStorageSaga);
    yield takeEvery(SET_LOCALSTORAGE, setLocalStorageSaga);
}