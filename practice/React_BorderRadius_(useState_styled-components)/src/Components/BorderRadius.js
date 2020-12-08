import React, { useState } from 'react';
import styled from 'styled-components';

const Figure = styled.div`
  width: 60%; 
  height: 300px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #ccc;
  border: 3px solid red;
  border-top-left-radius: ${props => `${props.topLeft1}% ${props.topLeft2}%`};
  border-top-right-radius: ${props => `${props.topRight1}% ${props.topRight2}%`};
  border-bottom-left-radius: ${props => `${props.bottomLeft1}% ${props.bottomLeft2}%`};
  border-bottom-right-radius: ${props => `${props.bottomRight1}% ${props.bottomRight2}%`};
`;

const BorderRadius = (props) => {

    const [topLeft1, setTopLeft1] = useState(50);
    const [topLeft2, setTopLeft2] = useState(50);

    const [topRight1, setTopRight1] = useState(50);
    const [topRight2, setTopRight2] = useState(50);

    const [bottomLeft1, setBottomLeft1] = useState(50);
    const [bottomLeft2, setBottomLeft2] = useState(50);

    const [bottomRight1, setBottomRight1] = useState(50);
    const [bottomRight2, setBottomRight2] = useState(50);

    return (
        <>
            <label htmlFor='topLeft1'>topLeft1</label>
            <input name='topLeft1' type='number' value={topLeft1} onChange={(e) => setTopLeft1(e.target.value)}/>
            <label htmlFor='topLeft2'>topLeft2</label>
            <input name='topLeft2' type='number' value={topLeft2} onChange={(e) => setTopLeft2(e.target.value)}/>
            <br></br>
        
            <label htmlFor='topRight1'>topRight1</label>
            <input name='topRight1' type='number' value={topRight1} onChange={(e) => setTopRight1(e.target.value)}/>
            <label htmlFor='topRight2'>topRight2</label>
            <input name='topRight2' type='number' value={topRight2} onChange={(e) => setTopRight2(e.target.value)}/>
            <br></br>
     
            <label htmlFor='bottomLeft1'>bottomLeft1</label>
            <input name='bottomLeft1' type='number' value={bottomLeft1} onChange={(e) => setBottomLeft1(e.target.value)}/>
            <label htmlFor='bottomLeft2'>bottomLeft2</label>
            <input name='bottomLeft2' type='number' value={bottomLeft2} onChange={(e) => setBottomLeft2(e.target.value)}/>
            <br></br>
       
            <label htmlFor='bottomRight1'>bottomRight1</label>
            <input name='bottomRight1' type='number' value={bottomRight1} onChange={(e) => setBottomRight1(e.target.value)}/>
            <label htmlFor='bottomRight2'>bottomRight2</label>
            <input name='bottomRight2' type='number' value={bottomRight2} onChange={(e) => setBottomRight2(e.target.value)}/>
         
            <Figure topLeft1={topLeft1}
                    topLeft2={topLeft2}
                    topRight1={topRight1}
                    topRight2={topRight2}
                    bottomLeft1={bottomLeft1}
                    bottomLeft2={bottomLeft2}
                    bottomRight1={bottomRight1}
                    bottomRight2={bottomRight2}
            />
        </>
    )
}

export default BorderRadius;
