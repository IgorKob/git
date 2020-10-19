import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assers/img/img1.png';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Styled = styled.div`
  a, li {
    color: green;
    background-color: green;
  }
`

export default function Carousels() {
  return (<Styled><Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color: 'black'}}>First slide label</h3>
      <p style={{color: 'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
          src={img}
      // src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color: 'black'}}>Second slide label</h3>
      <p style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
          src={img}
      // src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color: 'black'}}>Third slide label</h3>
      <p style={{color: 'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</Styled>
  );
}
