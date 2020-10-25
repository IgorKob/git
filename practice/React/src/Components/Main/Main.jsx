import React from 'react';
import classes from './main.module.css';
import {Route, Switch} from "react-router-dom";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import News from "../News/News";
import Music from "../Music/Music";
import Settingss from "../Settings/Settingss";

const Main = (props) => {
  // debugger
  return (
    <main className={classes.main}>

      <Switch>
        <Route exact path="/profile">
          <Profile
                   // posts={props.posts}
                   // newPost={props.newPost}
                   // newPostText={props.newPostText}
                   // addPost={props.addPost}
                   state={props.state}
                   dispatch={props.dispatch}
          />
        </Route>
        <Route exact path="/messages">
          <Messages
                     // messages={props.messages}
                     // addMessage={props.addMessage}
                     // newMessageChange={props.newMessageChange}
                     state={props.state}
                     dispatch={props.dispatch}


          />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/music">
          <Music />
        </Route>
        <Route exact path="/settings">
          <Settingss />
        </Route>

      </Switch>

    </main>
  ); 
}

export default Main;