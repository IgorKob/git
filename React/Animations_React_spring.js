// https://reactgo.com/react-animations/
// npm i react-spring


// 1.   ./App.js
// Компонент Spring використовується для переміщення елементів з одного місця в інше, він приймає два реквізити from та to.
// from : звідки починається анімація.
// to : Де анімація повинна закінчитися.
import React from "react";
import { Spring } from "react-spring";
import "./styles.css";

function App() {
  return (
    <Spring
      from={{ opacity: 0.6, marginTop: -50 }}
      to={{ opacity: 1, marginTop: 50 }}
    >
      {props => (
        <div style={props} className="App">
          <article className="post">
            <h1>My first posts</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate rerum reprehenderit consectetur porro similique
              reiciendis ex consequuntur tempore! Similique, pariatur
              harum.Facilis, accusantium quam labore incidunt soluta
              suscipit ipsa omnis.
            </p>
          </article>
        </div>
      )}
    </Spring>
  );
}

export default App;



// 2.   
// Компонент Trail анімує перший елемент у списку елементів, решта елементів утворюють природний слід і слідують за попереднім братом.
// items : потрібен масив предметів, який нам потрібно анімувати.
// keys : нам потрібно передати унікальний опис ключа для кожного елемента масиву.
import React from "react";
import { Trail } from "react-spring";
import "./styles.css";

const posts = [
  { title: "My first post", id: 1 },
  { title: "My second post", id: 2 },
  { title: "My Third post", id: 3 },
  { title: "My Fourth post", id: 4 }
];

function AllPosts() {
  return (
    <Trail
      items={posts}
      keys={post => post.id}
      from={{ marginLeft: -20, opacity: 0 }}
      to={{ marginLeft: 20, opacity: 1 }}
    >
      {post => props => (
        <div style={props} className="post">
             {post.title}
        </div>
      )}
    </Trail>
  );
}

export default AllPosts;



// 3.   Приклад анімації панелі навігації
import React from "react";
import ReactDOM from "react-dom";
import {Spring,config} from "react-spring";
import "./styles.css";

function NavBar() {
  return (
    <Spring from={{ number: 0 }} to={{ number: 100 }} config={config.slow}>
      {props => (
        <div style={{ width: props.number + "%" }}>
          <nav className="nav-bar">
            <a href="#">Home</a>
            <a href="#"> Posts</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      )}
    </Spring>
  );
}

export default NavBar;