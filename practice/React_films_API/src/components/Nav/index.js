import React from 'react';
import {NavLink} from "react-router-dom";
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import MovieIcon from '@material-ui/icons/Movie';
import {useStyles} from './styles';
import styled from 'styled-components';

const MainWrap = styled.div`
  width: 90%;
  padding: 0;
  maargin: 0;
`;

const myLinkMenu = [
  <NavLink to="/characters" ><ListItem button><ListItemIcon><PeopleIcon /></ListItemIcon><ListItemText>Characters</ListItemText></ListItem></NavLink>,
  <NavLink to="/episodes" ><ListItem button><ListItemIcon><MovieIcon /></ListItemIcon><ListItemText>Episodes</ListItemText></ListItem></NavLink>,
  <NavLink to="/locations" ><ListItem button><ListItemIcon><LocationSearchingIcon /></ListItemIcon><ListItemText>Locations</ListItemText></ListItem></NavLink>,
  <NavLink to="/profile"><ListItem button><ListItemIcon><PersonIcon /></ListItemIcon><ListItemText>My watch list</ListItemText></ListItem></NavLink>,
]; 

const Nav = ({children}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                })}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Rick and Morty Tv series
          </Typography>

        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />

{/* menu */}
        <List>
           {myLinkMenu.map((el, i) => (
            <React.Fragment key={i.toString()}>
                {el}
            </React.Fragment>
          ))}
        </List>

      </Drawer>

{/* main */}
      <MainWrap className={classes.content}>
        <div className={classes.toolbar} />
          {children}
      </MainWrap>

    </div>
  );
}
export default Nav;