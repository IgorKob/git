import React from "react";
import {Container, CardDeck, Card} from 'react-bootstrap'

export default function Cardss() {
  return (
    <>
      <Container className='mt-5'>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/two-cheerful-colleagues-in-formal-wear-solving-problem-and-looking-at-picture-id1138587928" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/smiling-female-architect-talking-about-project-with-marker-in-hand-picture-id1128527822" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/young-asian-creative-businessman-standing-and-making-presentation-at-picture-id1006991590" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          </CardDeck>
      </Container>
    </>
  );
}
