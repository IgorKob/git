import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navv from './Components/Navbar.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Blog from './Pages/Blog.js';
import Contacts from './Pages/Contacts.js';

export default function App() {
    return (
      <>
        <Router>

            <Navv />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Blog">
                <Blog />
              </Route>
              <Route exact path="/Contacts">
                <Contacts />
              </Route>
            </Switch>

        </Router>

    </>
  );

}
