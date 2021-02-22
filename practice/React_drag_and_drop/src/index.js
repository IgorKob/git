import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

const sizeWindow = window.innerWidth;
let max = 3;
const messOrigin = {vertical: 'bottom', horizontal: 'left'};
if (sizeWindow < 900) {
  max = 1;
  messOrigin.vertical = 'top';
  messOrigin.horizontal = 'left';  
}

ReactDOM.render(
  <SnackbarProvider maxSnack={max} dense 
    anchorOrigin={messOrigin}
  >
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path={`/`}>
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </SnackbarProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
