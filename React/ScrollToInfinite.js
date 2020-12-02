// https://reactgo.com/react-infinite-scroll/
// Нескінченна прокрутка допомагає нам безперервно завантажувати дані, коли користувач прокручує сторінку вниз.
// npm i react-infinite-scroll-component

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import "./styles.css";

class App extends React.Component {
  state = {
    breweries: [],
    pageNumber: 1,
    items: 15,
    hasMore: true
  };

  componentDidMount() {
      //initial request is sent
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?page=${
          this.state.pageNumber
        }&per_page=${this.state.items}`
      )
      .then(res =>
        this.setState({
          //updating data
          breweries: [...this.state.breweries, ...res.data],
          //updating page numbers
          pageNumber: this.state.pageNumber + 1
        })
      );
  };

  render() {
    return (
      <div className="App">
        <InfiniteScroll
          dataLength={this.state.breweries.length}   // dataLength : приймає поточну довжину даних.
          next={this.fetchData}    // next : Він приймає метод отримання даних і викликає цей метод, коли користувач потрапляє в нижню частину сторінки.
          hasMore={this.state.hasMore}  // hasMore : приймає логічне значення.
          loader={<h4>Loading...</h4>}   // loader : потрібен завантажувальний спінер, який відображається під час запиту API, який все ще обробляється.
        >
          {this.state.breweries.map(brewery => (
            <ul className="user" key={brewery.name}>
              <li>Name: {brewery.name}</li>
            </ul>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;