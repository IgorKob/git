import React from 'react'
import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import episodeReducer from './episodeReducer';
import locationReducer from './locationReducer';
import profileReducer from './profileReducer';
import allReducer from './allReducer';

const rootReducer = combineReducers({
    character: characterReducer,
    episode: episodeReducer,
    location: locationReducer,
    profile: profileReducer,
    all: allReducer,
});
export default rootReducer;