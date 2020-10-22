import React from 'react';
import Button from '@material-ui/core/Button';
import {AppBar, Container, Toolbar, IconButton, Typography,
Box, Paper, Grid, Card, CardMedia, CardContent, CardActions,
BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position:'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}));


const cards = [1,2,3,4,5,6,7,8,9];


export default function All() {
  const classes = useStyles();

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" variant='outlined' onClick={handleClickOpen}>Log In</Button>

          <Dialog open={open} onClose={handleClose} aria-labelledby='from-dialog-title'>
            <DialogTitle id='from-dialog-title'>Log In</DialogTitle>
            <DialogContent>
              <DialogContentText>Log in to ... </DialogContentText>
              <TextField
                autoFocus
                margin='dense'
                id='name'
                label='Email Adress'
                type='email'
                fullWidth
              />
              <TextField
                autoFocus
                margin='dense'
                id='pass'
                label='Password'
                type='password'
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>Cancel</Button>
              <Button onClick={handleClose} color='primary'>Log In</Button>

            </DialogActions>
          </Dialog>

          <Button color="inherit" variant='contained'>Sign Up</Button>
        </Toolbar>
        </Container>

        </AppBar>


        <main>
          <Paper
            className={classes.mainFeaturesPost}
            style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
          >
            <Container fixed>
            <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturesPostContent}>
                    <Typography
                      component='h1'
                      variant='h3'
                      color='inherit'
                      gutterBottom
                    >
                       Lorem
                    </Typography>
                    <Typography
                      variant='h5'
                      color='inherit'
                      paragraph
                    >
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Button variant='contained' color='secondary'>Learn more</Button>
                  </div>
                </Grid>
              </Grid>
            </Container>

          </Paper>


<div className={classes.mainContent}>
  <Container maxWidth='md'>
    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Lorem asd</Typography>
    <Typography variant='h5' align='center' color='textSecondary' paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </Typography>

    <div className={classes.mainButtons}>
      <Grid container spacing={5} justify='center'>
        <Grid item>
          <Button variant='contained' color='primary'>Start New</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' color='primary'>Learn more</Button>
        </Grid>
      </Grid>
    </div>

  </Container>
</div>

<Container className={classes.cardGrid} maxWidth='md'>
  <Grid container spacing={4}>
    {cards.map((card) => (
      <Grid item key={card} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image='https://source.unsplash.com/random'
            title='Image title'
          >
          </CardMedia>
            <CardContent className={classes.cardContent}>
              <Typography variant='h5' gutterBottom>
                Blog post
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>View</Button>
              <Button size='small' color='primary'>Edit</Button>
            </CardActions>

            <LayerIcon>
              <PlayCircleFilledIcon />
            </LayerIcon>

        </Card>
      </Grid>
    ))}
  </Grid>
</Container>


        </main>

<footer>
  <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
  <BottomNavigation
    value={value}
    onChange={handleChange}
    className={classes.root}
  >
    <BottomNavigationAction
      label='Recents'
      value='recents'
      icon={<RestoreIcon />}
    />
    <BottomNavigationAction
      label='Favorites'
      value='favorites'
      icon={<FavoriteIcon />}
    />
    <BottomNavigationAction
      label='Nearby'
      value='nearby'
      icon={<LocationOnIcon />}
    />
    <BottomNavigationAction
      label='Folder'
      value='folder'
      icon={<FolderIcon />}
    />
  </BottomNavigation>

  <Typography align='center' color='textSecondary' component='p' variant='subtitle'>
    React and Material Ui
  </Typography>

</footer>

    </>
  )
}
