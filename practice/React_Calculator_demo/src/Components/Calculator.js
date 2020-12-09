import React, { useEffect, useState } from 'react';
import './Calculator.css';

const Calculator = (props) => {
    debugger
    const [input, setInput] = useState('');
    const [rezult, setRezult] = useState('');
    const [oper, setOper] = useState('');
    const [num0, setNum0] = useState('');
    const [num1, setNum1] = useState('');

    useEffect(()=> {
        if (num0.length > 8) {
          alert('error: max 8 el');
          if (num0.length > 9) {
            setClear()
          }
        }

    }, [num0]);


    const Calc = (a) => {

      // a is number
      if (/^[0-9]+$/g.test(a)) {
          setInput((prev)=>`${prev}${a}`)

          setNum0((prev)=>`${prev}${a}`)
          
      }

      // a is not number
      if (/\D/g.test(a)) {

        if (/\D/.test(input[input.length-1])) {
          setInput( (prev) => `${prev.slice(0, prev.length-1)}${a}` );
        }

        if (/\d/.test(input[input.length-1])) {

          if (/\D/g.test(input)) {
            CalcKim(a);
          }

          if (!/\D/g.test(input)) {
            setInput((prev)=> `${prev}${a}`)
            
            if (String(num1).length < 1) {
              setNum1(num0);
              setNum0('');
            }

          }


        }

        setOper(a);

      }
    }


    const CalcKim = (a = false) => {

        if (String(num1).length > 0 && String(num0).length > 0) {
          let rez = {
            '+': Number(num1) + Number(num0),
            '-': Number(num1) - Number(num0),
            '*': Number(num1) * Number(num0),
            '/': Number(num0) ? Number(num1) / Number(num0) : 'Cannot divide by 0!'
        }[oper];
                    
        setRezult(rez);
        setInput(`${rez}`)
        setNum1(`${rez}`);
        setNum0('');

          if (a) {
            setInput(`${rez}${a}`)
          }
      
        }
    }

    const setClear = () => {
        setInput('')
        setRezult('')
        setOper('')
        setNum0('')
        setNum1('')
    };

    return (
        <section className='calc__wrapper'>

          <div>{rezult}</div>  

          <div className='display'>
            <div>{input}</div>   
          </div>

          <div className='keys__wrapper'>

            <button onClick={()=>setClear()}>AC</button>   
            <button onClick={()=>setInput((prev)=>-prev)}>+/-</button>   
            <button disabled>%</button>   
            <button disabled>{'<'}</button>   

            <button onClick={()=>Calc(7)}>7</button>  
            <button onClick={()=>Calc(8)}>8</button>  
            <button onClick={()=>Calc(9)}>9</button>   
            <button onClick={()=>Calc('/')}>/</button>   

            <button onClick={()=>Calc(4)}>4</button> 
            <button onClick={()=>Calc(5)}>5</button>  
            <button onClick={()=>Calc(6)}>6</button>   
            <button onClick={()=>Calc('*')}>*</button>

            <button onClick={()=>Calc(1)}>1</button>   
            <button onClick={()=>Calc(2)}>2</button>  
            <button onClick={()=>Calc(3)}>3</button>  
            <button onClick={()=>Calc('+')}>+</button> 

            <button onClick={()=>Calc(0)}>0</button>   
            <button onClick={()=>CalcKim()}>=</button>   
            <button disabled>.</button>  
            <button onClick={()=>Calc('-')}>-</button>   

          </div>
        </section>
    )
}

export default Calculator;
