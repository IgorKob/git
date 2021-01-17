import React from 'react';

const initialState = {
    user: {id: null, name: ''},
    users: [],
    messages: [
        {id: 111, author: 'Admin1', message: 'message1'},
        {id: 112, author: 'Admin2', message: 'message2'},
        {id: 113, author: 'Admin1', message: 'message3'},
    ],
};

const chat_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, user: {id: action.id, name: action.name}
            };
        case 'GET_USERS':
            return {
                ...state, users: action.users
            };
        case 'SET_MESSAGE':
        case 'GET_MESSAGES':
            return {
                ...state,
                messages: state.messages.concat([
                    {
                      id: action.id,
                      author: action.author,
                      message: action.message,
                    }
                ])
            }
        default:
            return state;
    }
}

export default chat_reducer;
  