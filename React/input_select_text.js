// https://reactgo.com/react-select-text-input-field/
// Щоб виділити весь текст у полі введення, ми можемо використати e.target.select() метод


// 1.  ./App.js
import React from "react";

export default function App() {
  const handleClick = (e) => {
    e.target.select();
  };

  return (
    <div className="App">
      <input type="text" onClick={handleClick} value="King" />
    </div>
  );
}


// 11.  Приклад для компонента класу:
import React,{Component} from "react";

class App extends Component {
  handleClick = (e) => {
    e.target.select();
  };

  render() {
    return (
      <div className="App">
        <input type="text" onClick={this.handleClick} value="King" />
      </div>
    );
  }
}

export default App;



// 2.   ./App.js
import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div className="App">
      <input ref={inputRef} onClick={handleClick} value="King" />
    </div>
  );
}


// 3.   ./App.js
import React from "react";

export default function App() {
  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="App">
      <input type="text" onFocus={handleFocus} value="King" />
    </div>
  );
}