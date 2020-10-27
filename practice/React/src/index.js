import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import state, {addMessage, newMessageChange, newPostText, subscribe} from './Redux/State';
import store from './Redux/redux_store';
// import {addPost} from "./Redux/State";
// import {renderKim} from './render';
import {BrowserRouter as Router} from "react-router-dom";
import StoreContext from "./StoreContext";
import {Provider} from "react-redux";
// addPost('asd asd asd')
// debugger
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// debugger
// let renderKim = (state) => {
// let renderKim = () => {
  // debugger
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        {/*<StoreContext.Provider value={store}>*/}
        <Provider store={store}>
          {/*<App state={state}*/}
          {/*     dispatch={store.dispatch.bind(store)}*/}
          {/*     // newPostText={store.newPostText.bind(store)}*/}
          {/*     // addMessage={store.addMessage.bind(store)}*/}
          {/*     // newMessageChange={store.newMessageChange.bind(store)}*/}

          {/*/>          */}
          <App />
        </Provider>
      </React.StrictMode>
    </Router>,
    document.getElementById('root')
  );

// }

// renderKim();
//
// // store.renderKimState(renderKim)
// store.subscribe(() => {
//   // let state = store.getState();
//   renderKim();
// });
