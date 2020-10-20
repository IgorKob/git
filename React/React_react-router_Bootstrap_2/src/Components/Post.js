import React from "react";
import {Container, Row, Col, Media, Card, ListGroup, Button} from 'react-bootstrap'

let Mypost = ( <Media as="li">
      <img
        width={64}
        height={64}
        className="mr-3"
        src="https://media.istockphoto.com/photos/bottom-view-of-women-stacking-hands-before-exercising-in-gym-picture-id1133209404"
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>List-based media object</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
    </Media>
  );

export default function Postss() {
    return (
    <>
      <Container className='mt-3'>
        <Row>

          <Col md="9">
            <ul className="list-unstyled">
              {Mypost}
              {Mypost}
              {Mypost}
              {Mypost}
              {Mypost}
          </ul>
          </Col>

          <Col md="3">

            <Card style={{ }}>
              <Card.Header>Featured</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="text-center mt-3 mb-3">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

            {[
              'Primary',
              'Secondary',
              'Success',
              'Danger',
              'Warning',
              'Info',
              'Light',
              'Dark',
            ].map((variant, idx) => (
              <Card
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ }}
                className="mb-2"
              >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}

          </Col>

        </Row>
      </Container>
    </>
  );
}
