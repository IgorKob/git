import React from 'react';
import classes from './NavBar.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { CssBaseline, Slide, AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';

const NavBar = ({window}) => {

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <>
      <CssBaseline />
          <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Toolbar>
                  <NavLink to="/React_Weather_API" activeClassName={classes.active} className={classes.navLink}>Home</NavLink>
                  <NavLink to="/About" activeClassName={classes.active} className={classes.navLink}>About</NavLink>
                  <NavLink to="/React_Weather_API" className={`${classes.navLink} ${classes.logo}`}><img src={`https://openweathermap.org/img/wn/10d.png`} alt='img'/></NavLink>
                </Toolbar>
            </AppBar>
          </Slide>
      <Toolbar />
    </>
  )
}

NavBar.propTypes = {
    window: PropTypes.func,
};

export default NavBar;
