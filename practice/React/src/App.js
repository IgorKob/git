import React from "react";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import './styles.css';
import HeaderContainer from "./Components/Header/HeaderContainer";

export default function App(props) {
  // debugger
  return (
    <section className='container'>

      <HeaderContainer />

      <Nav />

      <Main />

    </section>
  );
}
