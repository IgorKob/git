// https://reactgo.com/react-default-props/
// Встановлення значення за замовчуванням для реквізиту в React


// 1.  ./App.js
import React from "React";
import Welcome from "./Welcome";

export default function App() {
  return (
    <div>
      <Welcome />
      <p>My first react app</p>
    </div>
  );
}


// 2.  ./Welcome.js
import React from "react";

export default function Welcome(props){
    return <h1>Welcome {props.name}</h1>
}

// setting default value to name prop
Welcome.defaultProps = {
    name: "Boss"
}



// 22.  ./Welcome.js
// У компонентах на основі класів ми можемо використовувати defaultPropsяк статичну властивість 
// для встановлення значень за замовчуванням.
import React, {Component} from "react";

class Welcome extends Component {
  static defaultProps = {
    name: "king",
  };

  render() {
    return <h1>Welcome {this.props.name}</h1>;
  }
}

export default Welcome;
