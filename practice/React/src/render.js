import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from "./Redux/State";
import {newPostText} from "./Redux/State";
import {addMessage} from "./Redux/State";
import {newMessageChange} from "./Redux/State";
import {BrowserRouter as Router} from "react-router-dom";

export let renderKim = (state) => {
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <App state={state}
             addPost={addPost}
             newPostText={newPostText}
             addMessage={addMessage}
             newMessageChange={newMessageChange}

        />
      </React.StrictMode>
    </Router>,
      document.getElementById('root')
    );

}

// export renderKim;