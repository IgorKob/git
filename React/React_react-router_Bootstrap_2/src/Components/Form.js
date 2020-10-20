import React from "react";
import {Container, Form, Button} from 'react-bootstrap'

export default function Formss() {
    return (
      <>
        <Container style={{width: '300px', marginTop: '30px'}}>
          <h1 className='text-center'>Contact us</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
}
