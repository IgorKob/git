import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: []
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({isLoaded: true, items: result.drinks});
      },
      (error) => {
        this.setState({isLoaded: true, error});
      }
    )
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <p>Error {error.message}</p>
      } else if (!isLoaded) {
        return <p>Loader...</p>
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.strDrink}
              <img src={item.strDrinkThumb} width='50' height='50' />
            </li>
          ))}
        </ul>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
