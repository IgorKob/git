import './App.css';
import MenuContainer from './Components/Menu/MenuContainer';
import HomeContainerConnect from './Components/Home/HomeContainer';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MenuContainer />
      <Switch>
        <Route exect path='/messages'>Messages</Route>
        <Route exect path='/friends'>Friends</Route>
        <Route path="/home"><Redirect to="/" /></Route>
        <Route exect path='/'><HomeContainerConnect /></Route>
      </Switch>
    </div>
  );
}

export default App;
