import React, { useEffect, useState } from 'react'

const Bin2Dec = (props) => {
    const [numberBin, setNumberBin] = useState('');
    const [numberDec, setNumberDec] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {

        setError(true);

        if (/^[0-1]+$/g.test(numberBin)) {
          setError(false);
          const num = numberBin.split('').reverse().reduce((sum, el, i) => el === '1' ? sum += Math.pow(2, i) : sum , 0);
          setNumberDec(num);
        }

        if (numberBin.length === 0) {
          setError(false);
          setNumberDec('');
        }
        
      }, [numberBin]);

    return (
        <>
           <input type='number' value={numberBin} onChange={(e) => setNumberBin(e.target.value)}/> 
           {error ? <p style={{color: 'red'}}>Error, not dec. number!</p> : <h1>{numberDec}</h1> }  
        </>
    )
}

export default Bin2Dec;