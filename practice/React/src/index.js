import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux_store';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
  <Router>
  {/*// <Router history={history}>*/}
  {/*// <Router basename={process.env.PUBLIC_URL}>*/}
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
