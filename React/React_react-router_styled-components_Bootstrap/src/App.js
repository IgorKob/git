import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Navibar from './Components/Navibar.js';
import Footer from './Components/Footer.js';
import Home from './Home';
import About from './About.js';
// import img from '../assers/img/img1.png';
// import Carousel from 'react-bootstrap/Carousel';
// import styled from 'styled-components';
// import {Jumbotron, Container} from 'react-bootstrap'
// import { Button, Navbar, Nav, NavDropdown, Container, Modal, Form } from 'react-bootstrap';

// const Styled = styled.div`
//   .jumbo {
//     background: url(${img}) no-repeat fixed bottom;
//     background-size: cover;
//     color: #efefef;
//     height: 400px;
//     position: relative;
//     z-index: -2;
//   }
//   .overlay {
//     background-color: #000;
//     opacity: .6;
//     position: absolute;
//     top: 0;
//     left:0;
//     right: 0;
//     bottom: 0;
//     z-index: -1;
//   }
// `;

export default function App() {
  return (<> < Router > <Navibar/>
  <Switch>
    <Route exect path="/About" component={About} />
    <Route path="/"  component={Home} />
  </Switch> < /Router>


  <Footer />
    </>
  );
}
