import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'


const myLights = keyframes`
    0%,
    100% { box-shadow: none; }
    50% { box-shadow: 0 0 20px 5px #f1c40f; }
`;

const myLights2 = keyframes`
    0%, 
    100% { box-shadow: 0 0 20px 5px #f1c40f; }
    50% { box-shadow: none; }
`;

const Light = styled.span`
  padding: 30px;
  margin: 30px;
  border-radius: 50%;
  background-color: ${props => props.el.color};
  animation-duration: ${props => `${props.el.speed}s`};
  animation-iteration-count: infinite;
  animation-name: ${props => props.el.id%2==0 ? myLights : myLights2 };
  animation-fill-mode: both;

  &:hover {
    background-color: ${props => props.el.color ? 'violet' : 'palevioletred'};
  }
`;


const Christmas_Lights = (props) => {

    const [speed, setSpeed] = useState(1);
    const rangevalue1 = useRef();

    const handleChange = ({target}) => {
        setSpeed(target.value);
        rangevalue1.current.value = target.value;
    };

    const arr = [
        {id: 1, color: 'red', speed: speed},
        {id: 2, color: 'blue', speed: speed},
        {id: 3, color: 'yellow', speed: speed},
        {id: 4, color: 'orange', speed: speed},
        {id: 5, color: 'green', speed: speed},
        {id: 6, color: 'lightgreen', speed: speed},
        {id: 7, color: 'lightblue', speed: speed},
    ];

    return (
        <div style={{height: '100vh', backgroundColor: '#333', padding: '10px'}}>
            
            <input type="range" min="0" max="5"  step=".1" value={speed} onChange={handleChange}/>
            <output ref={rangevalue1}></output>

            {arr.map(el => (
                <Light key={el.id} el={el}></Light>
            ))}

        </div>
    )
}

export default Christmas_Lights;
