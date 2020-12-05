// 2.
import React, { Component } from 'react';
 
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
 
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
 
  render() {
    const { hits } = this.state;
 
    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }
}
 
export default App;



// 3.
const { addLeadingSlash } = require("history/pathutils")

{
  "items": [
    { "id": 1, "name": "Яблоки", "price": "$2" },
    { "id": 2, "name": "Персики", "price": "$5" }
  ]
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch('https://api.example.com/items')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          })
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Загрузка...</div>
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      )
    }
  }
}



// 4.    ./App.js
// https://reactgo.com/post-request-react-hooks/
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { title, body };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  };

  return (
      <div className="App">
        <form>
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required />
          <button type="submit" onClick={handleSubmit}>
           Create Post
          </button>
        </form>
      </div>
  );
}

export default App;