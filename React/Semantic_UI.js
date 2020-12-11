// https://semantic-ui.com/
// https://reactgo.com/semantic-ui-react/
// Семантичний інтерфейс - це розробка, яка допомагає нам створювати красиві, чуйні макети, використовуючи зручний для людини HTML.
npm install semantic-ui-react semantic-ui-css
yarn add semantic-ui-react semantic-ui-css
// ./index.js
import 'semantic-ui-css/semantic.min.css'


// I.                                       NavBar
// 1.  ./index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// 2.  ./App.js
import React from 'react';
import './App.css';
import NavigationBar from './navigation';

function App() {

  return (
    <div className="App">
      <NavigationBar />
    </div >
  );
}

export default App;


// 3.  ./navigation.js
import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

function NavigationBar() {

    return (
        <Menu pointing secondary>
            <Menu.Item icon="home" name='home' href="/somelink"/>
            <Menu.Item icon="box" name='posts' href="/somelink"/>
            <Menu.Item icon="address book" name='contact' href="/somelink"/>
        </Menu>
    )
}

export default NavigationBar;


// 4.  ./App.css
.App {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
}
  
.form, .posts {
  margin-top: 3rem;
}




// II.                                     Grid
// 1.  ./dummy-posts.js
const posts = [
    {
        title: "My first post",
        excerpt: "This is my first post with more content inside",
        image: "https://via.placeholder.com/410x220"
    },
    {
        title: "My second post",
        excerpt: "This is my second post with more content inside",
        image: "https://via.placeholder.com/410x220"
    },
    {
        title: "My sixth post",
        excerpt: "This is my sixth post with more content inside",
        image: "https://via.placeholder.com/410x210"
    }
]
export { posts }


// 2.  ./posts.js
import React from 'react';
import { Segment, Header, Grid, Image, Button } from 'semantic-ui-react'
import { posts } from './dummy-posts';

function Posts() {
    return (
        <div className="posts">
            <Grid centered columns={3} doubling>
                 {posts.map(post =>
                    <Grid.Column key={post.title}>
                        <Segment>
                            <Image src={post.image} />
                            <Header as="h1">{post.title}</Header>
                            <p>{post.excerpt}</p>
                            <Button primary basic as="a" href="/">
                            Learn more</Button>
                        </Segment>
                    </Grid.Column>)}
            </Grid>
        </div>
    )
}
export default Posts;


// 3.   ./App.js
import React from 'react';
import NavigationBar from './navigation';
import Posts from './posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Posts />
    </div >
  );
}

export default App;




// III.                                  Form
// 1.   ./contact.js
import React from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'

function ContactForm() {
    return (
        <div className="form">
            <Segment>
                <Header as="h2">Contact Form</Header>
            </Segment>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.TextArea label='About'
                placeholder='Tell us more about you...' />
                <Button type='submit' color="blue">Submit</Button>
            </Form>
        </div>
    )
}
export default ContactForm;