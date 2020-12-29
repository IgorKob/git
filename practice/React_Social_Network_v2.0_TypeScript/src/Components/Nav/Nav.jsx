import React from 'react';
import {NavLink} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Avatar, Button } from '@material-ui/core';
import Main from './../Main/Main';
import SettingsIcon from '@material-ui/icons/Settings';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const myLinkMenu = [
  <NavLink to="/profile"><ListItem button><ListItemIcon><PersonIcon /></ListItemIcon><ListItemText>Profile</ListItemText></ListItem></NavLink>,
  <NavLink to="/finduser" ><ListItem button><ListItemIcon><PeopleIcon /></ListItemIcon><ListItemText>Find user</ListItemText></ListItem></NavLink>,
  <NavLink to="/messages" ><ListItem button><ListItemIcon><MailIcon /></ListItemIcon><ListItemText>Messages</ListItemText></ListItem></NavLink>,
  <NavLink to="/music" ><ListItem button><ListItemIcon><MusicNoteIcon /></ListItemIcon><ListItemText>Music</ListItemText></ListItem></NavLink>,
  <NavLink to="/mytest" ><ListItem button><ListItemIcon><DeleteSweepIcon /></ListItemIcon><ListItemText>My test pages</ListItemText></ListItem></NavLink>,
  <NavLink to="/settings" ><ListItem button><ListItemIcon><SettingsIcon /></ListItemIcon><ListItemText>Settings</ListItemText></ListItem></NavLink>,
]; 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mylogo: {
    marginLeft: 'auto',
  },
}));



const Nav = (props) => {
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
            Social network!
          </Typography>

{/* login */}
          <Button className={classes.mylogo} color="inherit">
            {props.isAuth
              ? (<div><Button ><Avatar src="/broken-image.jpg" /><span>{` - ${props.login}`}</span></Button>  
              <Button onClick={props.logout} variant="contained" color="secondary">Log out</Button></div>)
              : (<Button variant="contained" color="secondary" ><NavLink to={'/login'} >Login</NavLink></Button>)}
          </Button>

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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main/>
      </main>

    </div>
  );
}

export default Nav;