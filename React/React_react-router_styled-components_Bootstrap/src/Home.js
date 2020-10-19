import React from 'react';
import Carousels from './Components/Carousel.js';
import Jumbo from './Components/Jumbotron.js';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img from './assers/img/img1.png';

const Home = () => (
  <>
    <h1>Home</h1>
    <Carousels />

    <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <Row>
        <Col style={{display: 'flex', justifyContent: 'space-around'}}>
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Jumbo />

    <Container style={{marginBottom: '30px'}}>
      <Row>
        <Col md={6}>
          <img src={img}  width={300} />
        </Col>
        <Col md={5}>
          <h2>Lorem 2</h2>
          <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
          </p>
        </Col>

      </Row>
    </Container>
 </>
  );

export default Home;
