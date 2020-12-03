// https://reactgo.com/react-router-404-page/
// Сторінку 404 також називають не знайденою сторінкою, коли користувач відвідує неправильний шлях або шлях, 
// який на даний момент недоступний, нам потрібно показати їм сторінку 404 замість порожньої сторінки, 
// щоб вони могли знати, що сторінка недоступна.


// 1.   ./404.js
import React from 'react';

const NotFound = () => {
  return <h1>404- Page NotFound</h1>;
}

export default NotFound;


// 2.   ./Routes.js
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/404';

const Routes = ()=> {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home}>
          <Route path="/about" Component={About}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}