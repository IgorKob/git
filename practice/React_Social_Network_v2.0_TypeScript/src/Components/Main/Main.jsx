import React, { Suspense } from 'react';
import {Route, Switch} from "react-router-dom";
import Music from "../Music/Music";
import Settingss from "../Settings/Settingss";
import MessagesContainer from "../Messages/MessagesContainer";
import FindUserContainer from "../FindUsers/FindUserContainer";
import MytestPagesContainer from "../MytestPages/MytestPagesContainer";
import Login from "../Login/Login";

const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));


const Main = (props) => {
  // debugger
  return (
    <main>

      <Switch>
        <Route exact path="/">
          <Suspense fallback={<div>Завантаження...</div>}>
            <ProfileContainer />
          </Suspense>
        </Route>
        {/*/:userId? - є не обовязковим*/}
        <Route path="/profile/:userId?">
          <Suspense fallback={<div>Завантаження...</div>}>
            <ProfileContainer />
          </Suspense>
        </Route>
        <Route exact path="/messages">
          <MessagesContainer />
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
        <Route path="/finduser">
          <FindUserContainer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

      </Switch>

    </main>
  ); 
}

export default Main;