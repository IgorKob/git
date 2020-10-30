import { Router } from '@material-ui/icons';
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
// import store from './Redux/redux_store';
// import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './myredux/mystore';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


