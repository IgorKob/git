import React from "react";
import {Jumbotron, Container} from 'react-bootstrap'
import img from '../assers/img/img1.png';
import styled from 'styled-components';

const Styled = styled.div`
  .jumbo {
    background: url(${img}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: .6;
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

const Jumbo = () => (
   <Styled>
      <Jumbotron fluid className='jumbo'>
      <div className='overlay'></div>
          <Container style={{color: 'green'}}>
            <h1>Fluid jumbotron</h1>
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
          </Container>
      </Jumbotron>
   </Styled>
  );

export default Jumbo;
