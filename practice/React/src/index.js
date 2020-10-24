import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './Redux/State';
import {addPost} from "./Redux/State";
import {renderKim} from './render';

// addPost('asd asd asd')
// debugger
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

renderKim(state)