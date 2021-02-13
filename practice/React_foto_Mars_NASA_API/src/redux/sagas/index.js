import React from 'react'
import { takeEvery } from 'redux-saga/effects'
import { MANIFEST_FETCH, PHOTO_FETCH } from '../actionTypes/index';
import { manifestSaga } from './manifestSaga';
import { photosSaga } from './photosSaga';

export default function* rootSaga() {
    yield takeEvery(MANIFEST_FETCH, manifestSaga);
    yield takeEvery(PHOTO_FETCH, photosSaga);
}