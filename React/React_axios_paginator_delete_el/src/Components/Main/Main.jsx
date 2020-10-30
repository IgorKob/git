import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from '../About/About';
import HomeContainer from '../Home/HomeContainer';
import UsersContainer from '../Users/UsersContainer';

const Main = () => {
  return (
  <>
    <h1>main</h1>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <UsersContainer />
      </Route>
      <Route path="/">
        <HomeContainer />
      </Route>
    </Switch>
  </>
  )
}

export default Main;