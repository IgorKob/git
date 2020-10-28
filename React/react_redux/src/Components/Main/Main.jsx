import React from 'react';
import classes from './main.module.css';
import {Route, Switch} from "react-router-dom";
import Music from "../Music/Music";
import Settingss from "../Settings/Settingss";
import ProfileContainer from "../Profile/ProfileContainer";
import MessagesContainer from "../Messages/MessagesContainer";
import NewsContainer from "../News/NewsContainer";
import FindUserContainer from "../FindUsers/FindUserContainer";
import MytestPagesContainer from "../MytestPages/MytestPagesContainer";

const Main = (props) => {
  // debugger
  return (
    <main className={classes.main}>

      <Switch>
        <Route exact path="/profile">
          <ProfileContainer />
        </Route>
        <Route exact path="/messages">
          <MessagesContainer />
        </Route>
        <Route exact path="/news">
          <NewsContainer />
        </Route>
        <Route exact path="/music">
          <Music />
        </Route>
        <Route exact path="/finduser">
          <FindUserContainer />
        </Route>
        <Route exact path="/mytest">
          <MytestPagesContainer />
        </Route>
        <Route exact path="/settings">
          <Settingss />
        </Route>
      </Switch>

    </main>
  ); 
}

export default Main;