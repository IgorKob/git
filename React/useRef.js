import React from 'react';

function App() {
  const [value, setValue] = React.useState('initial');
  const renderCount = React.useRef(1);
  const inputRef = React.useRef(null);
  const inputValueRef = React.useRef('');


  React.useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value);
  });

  React.useEffect(() => {
    inputValueRef.current = value;
  }, [value]);

  return (
    <div>
       <h1>{renderCount.current}</h1>
       <input type='text' 
              onChange={e => setValue(e.target.value)} 
              value={value} 
              ref={inputRef}  
            />
   {/* при натисканні на кнопку, фокус переміститься в input */}
        <button onClick={() => inputRef.current.focus()}>Focus</button>

{/* при вводі в інпуті , інформація буде виводитися тут */}
      <div>{inputValueRef.current}</div>
      
    </div>
  );
}

export default App;