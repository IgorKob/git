import {NavLink, Route, Switch} from "react-router-dom";

5. SPA - маленькая полупустая HTML страница, в которую приходит много JS. Этот JS работает на клиенте и создаем динамически нужную страницу. Даже если мы переключаемся на другой раздел сайта - новый HTML не подгружается. JS ловит изменение url, отправляет AJAX запрос на сервер, возвращается JSON с данными и по ним JS рисует нужный HTML.  © Димыч.

14. import classes from './../css/nav.module.css';
import Profile from "./src/Components/Profile/Profile";
import Messages from "./src/Components/Messages/Messages";
import News from "./src/Components/News/News";
import Music from "./src/Components/Music/Music";
import Settingss from "./src/Components/Settings/Settingss";
import React from "react";
import state, {addPost} from "./src/Redux/State";
import ReactDOM from "react-dom";
import App from "./src/App";
<nav className={classes.nav}></nav>
<nav className={`${classes.nav} ${classes.active}`}></nav>

20. .active , exact - щоб адреза співпадала
<>
<Router>
  <nav className={classes.nav}>
    <NavLink to="profile" activeClassName={classes.active} className={classes.nav_link}>Profile</NavLink>
    <NavLink to="messages" activeClassName={classes.active} className={classes.nav_link} >Messages</NavLink>
  </nav>

  <Switch>
    <Route exact path="/profile">
      <Profile />
    </Route>
    <Route path="/messages">
      <Messages />
    </Route>
  </Switch>
</Router>
</>

28. <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/>

29. debugger;

31. ref
let newPostElement = React.createRef();
let addPost = () => {
  let text = newPostElement.current.value;
  alert(text);
}
<textarea ref={newPostElement} ></textarea>
<button onClick={addPost} >Add Post</button>


32. При експорті не по дефолту мусимо при імпорті вказувати точне імя у фігурних дужках
//State.js
export let addPost = (message) => {
let newPost = {id : 7, name: 'Admin', text : message, like : 0}
state.postPages.posts.push(newPost)
}
//index.js
import {addPost} from "./Redux/State";
addPost('asd asd asd')

33.
//render.js
export let renderKim = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

//state.js (BLL)
import {renderKim} from '../render.js'

const state = {
  postPages : {...}
};

export let addPost = (message) => {
  let newPost = {id : 7, name: 'Admin', text : message, like : 0};
  state.postPages.posts.push(newPost);
  renderKim(state);
}

export default state;

//index.js
import React from 'react';
import state from './Redux/State';
import {renderKim} from './render';

renderKim(state)

34. window.state = state;