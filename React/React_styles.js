// https://styled-components.com/docs/basics

import React from 'react';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    li: {
        display: 'flex',
        border: '1px solid red'
    }
}

export const Asdd = (props) =>{
    return (
        <ul style={styles.ul}>
            <li>1</li>
            <li>2</li>
            <li style={{justifyContent: 'center', margin: '.5rem'}}>3</li>
        </ul>
    )
}


// 2.                  styled-components
// npm install styled-components
import React, { Component } from 'react';
import styled from 'styled-components';
 
// const Input = styled.div`
const Input2 = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: ${props => props.hasRadius ? '3px' : '0px'};
`;
 
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'violet' : 'palevioletred')};
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  display: flex !important;
  flex-basis: calc(33.333% - 20px);
  padding: ${props => props.size};

  &:active,
  &:focus {
    text-align: left;
  }
 
  &:hover {
    color: white;
    background-color: ${props =>
      props.primary ? 'violet' : 'palevioletred'};
  }
`;

class App extends Component {
  ...
 
  render() {
    return (
      <div>
        <Input2
          value={this.state.value}
          onChange={this.onChange}
          hasRadius={true}
        />
        <Button>I am a Button</Button>
        <Button primary>I am a Primary Button</Button>
      </div>
    );
  }
}


//https://styled-components.com/docs/basics#adapting-based-on-props
// надайте якорю теж деякий стиль, тоді як вибраний 
const Anchor = styled.a`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  background-color: papayawhip;
 
  ${props =>
    props.selected
      ? css`
          border-bottom: 1px solid #000;
          font-weight: bold;
        `
      : null};
`;
 
class App extends Component {
  constructor(props) {
    ...
  }
 
  render() {
    return (
      <Anchor
        href={`#${thing.id}`}
        selected={thing.id === 'a'}
      >
        {thing.headline}
      </Anchor>


/////////////////////

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// успадеовує стилі Button і добавляє своїх 2 стилі
const TomatoButton = styled(Button)`
  color: blue;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Bton</TomatoButton>
  </div>




// as - для присвоєнню стилю з елементу "а"
<Button as="a" href="/">Link with Button styles</Button>






//                                         animations
// https://styled-components.com/docs/basics#animations
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  animation-fill-mode: none | forwards | backwards | both; //властивість елемента при закінченні анімації
`;

render(
  <Rotate>&lt; 💅🏾 &gt;</Rotate>
);




// 00                                   Розширення існуючого стилізованого компонента
// Якщо у вас є один компонент і ви хочете створити подібний, стилізований дещо інакше
const Button = styled.button`
  color: black;
  //...
`
const WhiteButton = Button.extend`
  color: white;
`
render(
  <div>
    <Button>A black button, like all buttons</Button>
    <WhiteButton>A white button</WhiteButton>
  </div>
)




//                                        приклад медіа-запиту:
const Button = styled.button`
  color: green;
  @media screen and (max-width: 800px) {
    color: black;
  }
`