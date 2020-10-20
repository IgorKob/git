import React, {Component} from 'react';
import {Container, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import img from '../assets/img/img1.jpg';

export default class Navv extends Component {
 render() {
    return (
      <>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={img}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                React Bootstrap
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Blog">Blog</Nav.Link>
                <Nav.Link href="/Contacts">Contacts</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
