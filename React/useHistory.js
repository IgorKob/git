// https://reactgo.com/react-router-programmatically-navigate/



// 1. 
// якщо ми натиснемо Go to home кнопку, користувач буде програмно переходити до /homeмаршруту
import React from 'react';
import { useHistory } from "react-router-dom";

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go to home
    </button>
  );
}


// 11. 
import React,{Component} from 'react';

class App extends Component{
  gotoHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <button onClick={this.gotoHome}>Home</button>
      </div>
    )
  }
}

export default App;


// kim розбиваємо url адрес
  useEffect(() => {
    // url адрес 
    const {search} = history.location
    // розбиваємо url адрес  (parsed.page, parsed.id, ...)
    const parsed = queryString.parse(search)
    // or
    const parsed = queryString.parse(history.location.search)
  }, [])