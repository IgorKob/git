import React from 'react'
import { combineReducers } from 'redux';
import manifestReducer from './manifestReducer';
import photosReducer from './photosReducer';

const rootReducer = combineReducers({
    manifest: manifestReducer,
    photos: photosReducer,
});

export default rootReducer;