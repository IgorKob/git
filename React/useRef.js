// 1.
function TextInputWithFocusButton() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>
        Установить фокус на поле ввода
      </button>
    </>
  )
}


// 2.
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


// 3.
import React from 'react';
 
import 'road-dropdown';
 
const Dropdown = ({ label, option, options, onChange }) => {
  const ref = React.useRef();
 
  React.useLayoutEffect(() => {
    const handleChange = customEvent => onChange(customEvent.detail);
 
    const { current } = ref;
 
    current.addEventListener('onChange', handleChange);
 
    return () => current.removeEventListener('onChange', handleChange);
  }, [ref]);
 
  return (
    <road-dropdown
      ref={ref}
      label={label}
      option={option}
      options={JSON.stringify(options)}
    />
  );
};

// 4.                          forwardRef
// React.forwardRef створює React-компонент, що передає атрибут ref, який він отримав, 
// іншому компоненту, розташованому нижче у дереві. 
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// Тепер ви можете отримати реф беспосередньо на DOM button
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;




// 5.           range and ref
const [speed, setSpeed] = useState(1);
const rangevalue1 = useRef();

const handleChange = ({target}) => {
    setSpeed(target.value);
    rangevalue1.current.value = target.value;
};

return (
    <>
        <input type="range" min="0" max="5"  step=".1" value={speed} onChange={handleChange}/>
        <output ref={rangevalue1}></output>
    </>
)



// 6.
function SomeComponent() {
  let button
  return <button ref={el => (button = el)} />
}
// kim
function SomeComponent() {
  let button
  return <button ref={el => (color = el)} />
}