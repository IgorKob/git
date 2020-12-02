// https://react-icons.github.io/react-icons/
// https://reactgo.com/using-react-icons/
// fontawesome, Material design, Ionicons, devicons
// npm install react-icons --save

// 1. FontAwesome
import { FaAccessibleIcon } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <p>
      Accessible icon <FaAccessibleIcon size="50px" color="red" />
      </p>
    </div>
  );
}

export default App;


// 2. Material Design
import { MdDns } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <p>
        Dns Icon <MdDns size="30px" color="green" />
      </p>
    </div>
  );
}

export default App;