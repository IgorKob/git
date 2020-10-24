import React from 'react';
import classes from './nav.module.css';
import {Switch, Route, Link, NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import Music from "../Music/Music";
import News from "../News/News";
import Settingss from "../Settings/Settingss";


const Nav = () => {
  return (
      <>
    <nav className={classes.nav}>
      <NavLink to="/profile" activeClassName={classes.active} className={classes.nav_link}>Profile</NavLink>
      <NavLink to="/messages" activeClassName={classes.active} className={classes.nav_link} >Messages</NavLink>
      <NavLink to="/news" activeClassName={classes.active} className={classes.nav_link}>News</NavLink>
      <NavLink to="/music" activeClassName={classes.active} className={classes.nav_link}>Music</NavLink>
      <NavLink to="/settings" activeClassName={classes.active} className={classes.nav_link}>Settings</NavLink>
    </nav>


          </>
  ); 
}

export default Nav;