// kim - configureStore, createSlice, increment, decrement, thunk
 
// 1.  ./index.js
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  document.getElementById('root')
);

// 2.  ./App.js -> ./Mycomp.js
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decc, incc, myff, mystate, mythunk } from './myreducerSlice';

const Mycomp = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(mystate);
    const [data, setData] = useState(2);

    return (
    <div>
      <button onClick={() => dispatch(incc())}>+</button>
      <button onClick={() => dispatch(decc())}>-</button>
      <button onClick={() => dispatch(myff(Number(data)))}>++</button>
      <button onClick={() => dispatch(mythunk(Number(data)))}>+++</button>
      <input value={data} onChange={(e) => setData(e.target.value)}/>
      <h1>{state}</h1>
    </div>
    );
}

export default Mycomp;

// 3.  ./myreducerSlice.js
import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const myreducerSlice = createSlice({
    name: 'myreducer',
    initialState: {
        value: 2
    },
    reducers: {
        incc: state => { state.value += 1; },
        decc: state => { state.value -= 1; },
        myff: (state, action) => { state.value += action.payload; },
    }
});

export default myreducerSlice.reducer;

export const {incc, decc, myff } = myreducerSlice.actions;

export const mystate = state => state.myreducer.value;

export const mythunk = data => dispatch => {
    setTimeout(() => {
      dispatch(myff(data))
    }, 1000)
};


// 4.  ./app/store.js
import { configureStore } from '@reduxjs/toolkit';
import myreducerSlice from '../Mycomp/myreducerSlice';

export default configureStore({
  reducer: {
    myreducer: myreducerSlice,
  }
});
