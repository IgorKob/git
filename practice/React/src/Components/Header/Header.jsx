import React from 'react';
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_logo}>
        <img className={classes.header_logo__img} src='https://source.unsplash.com/random'/>
      </div>
    </header>
  );
}

export default Header;