// https://reactgo.com/react-trigger-button-click/
// Як викликати кнопку, клацніть на Enter у React 


// 1.  ./App.js
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("you have searched for - " + value);
    // or you can send data to backend
  };

  const handleKeypress = e => {
      //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="App">
      <form>
        <input
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}


// 2.  ./App.js
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("you have searched for - " + value);
    // or you can send data to backend
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      this.btn.click();
    }
  };

  return (
    <div className="App">
      <form>
        <input
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
        <button
          onClick={handleSubmit}
          ref={node => (this.btn = node)}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}