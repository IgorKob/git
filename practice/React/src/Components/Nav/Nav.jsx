import React from 'react';
import classes from './nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className={classes.nav}>
        <NavLink to="/profile" activeClassName={classes.active} className={classes.nav_link}>Profile</NavLink>
        <NavLink to="/messages" activeClassName={classes.active} className={classes.nav_link} >Messages</NavLink>
        <NavLink to="/news" activeClassName={classes.active} className={classes.nav_link}>News</NavLink>
        <NavLink to="/music" activeClassName={classes.active} className={classes.nav_link}>Music</NavLink>
        <NavLink to="/finduser" activeClassName={classes.active} className={classes.nav_link}>Find user</NavLink>
        <NavLink to="/mytest" activeClassName={classes.active} className={classes.nav_link}>My test pages</NavLink>
        <NavLink to="/settings" activeClassName={classes.active} className={classes.nav_link}>Settings</NavLink>
      </nav>
    </>
  ); 
}

export default Nav;