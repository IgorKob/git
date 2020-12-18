// https://material-ui.com/ru/getting-started/installation/
// https://reactgo.com/material-ui-react-tutorial/
// npm install @material-ui/core
// icon
// npm install @material-ui/icons

// online editor
https://mui.dev/editor?project=9fc5f67b1bd2fb651efdf21bb409470525d60673

// I.                                  NavBar
// 1.  ./public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
</html>


// 2.  ./App.js
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
           </TypoGraphy>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}
export default App;


// 3.  ./navbar.js
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox } from '@material-ui/icons'

function NavBar(props) {
    return (
        <List component="nav">
            <ListItem component="div" >
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Home  <Home />
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Posts <Book />
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Contact <AccountBox />
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
        </List>
    )
}
export default NavBar;








// II.                                   Grid
// 1.   ./dummy-post.js
const posts = [
    {
     title: "My first post",
     excerpt: "This is my first post with more content inside",
     image: "https://bit.ly/2WNi2Ml"
    },
    {
     title: "My second post",
     excerpt: "This is my second post with more content inside",
     image: "https://bit.ly/2WNi2Ml"
    },
    {
     title: "My sixth post",
     excerpt: "This is my sixth post with more content inside",
     image: "https://bit.ly/2WNi2Ml"
    }
   ]
   
   
// 2.   posts.js
import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { posts } from "./dummy-posts";

function Posts(props) {
    return (
    <div style={{ marginTop: 20, padding: 30 }}>
        <Grid container spacing={40} justify="center">
        {posts.map(post => (
            <Grid item key={post.title}>
            <Card>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={post.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                    </Typography>
                    <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
        </Grid>
    </div>
    );
}

export default Posts;






// III.                             Form
// 1.  ./contact.js
import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input id="email" multiline rows={10} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Contact;