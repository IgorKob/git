////////////combined-reducers
npm install use-combined-reducers

import useCombinedReducers from 'use-combined-reducers';

const [state, dispatch] = useCombinedReducers({
    filter: useReducer(filterReducer, 'ALL'),
    todos: useReducer(todoReducer, initialTodos),
});
// 2.
const useCombinedReducer = combinedReducers => {
    // Global State
    const state =
    // Global Dispatch Function
    const dispatch =
    return [state, dispatch];
};
// 3.
const useCombinedReducer = combinedReducers => {
    // Global State
    const state = Object.keys(combinedReducers).reduce(
        (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
        {}
    );

    // Global Dispatch Function
    const dispatch = action =>
        Object.keys(combinedReducers)
            .map(key => combinedReducers[key][1])
            .forEach(fn => fn(action));

    return [state, dispatch];
};