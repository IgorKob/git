import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import state, {addMessage, newMessageChange, newPostText, renderKimState} from './Redux/State';
import store from './Redux/State';
// import {addPost} from "./Redux/State";
// import {renderKim} from './render';
import {BrowserRouter as Router} from "react-router-dom";
// addPost('asd asd asd')
// debugger
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// debugger
let renderKim = (state) => {
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             // newPostText={store.newPostText.bind(store)}
             // addMessage={store.addMessage.bind(store)}
             // newMessageChange={store.newMessageChange.bind(store)}

        />
      </React.StrictMode>
    </Router>,
    document.getElementById('root')
  );

}

renderKim(store.getState())

store.renderKimState(renderKim)
