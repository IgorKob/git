import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import './styles.css';
import {BrowserRouter as Router } from "react-router-dom";

export default function App(props) {
  // debugger
  return (
    // <Router>
    <section className='container'>

      <Header />

      {/*<div className={container_main}>*/}

        <Nav />

        <Main posts={props.state.postPages.posts}
              newPost={props.state.postPages.newPost}
              newPostText={props.newPostText}
              addPost={props.addPost}

              messages={props.state.messagesPages}
              addMessage={props.addMessage}
              newMessageChange={props.newMessageChange}

        />

      {/*</div>*/}

    </section>
   // </Router>
  ); 
}
