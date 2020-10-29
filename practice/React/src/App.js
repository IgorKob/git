import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import './styles.css';

export default function App(props) {
  // debugger
  return (
    <section className='container'>

      <Header />

      <Nav />

      <Main />

    </section>
  );
}
