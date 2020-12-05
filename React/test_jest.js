// https://www.robinwieruch.de/react-testing-jest
// npm install --save-dev jest
// Jest шукатиме тестові файли з будь-якою з наступних популярних конвенцій щодо імен:
// Файли з .jsсуфіксом у __tests__папках.
// Файли з .test.jsсуфіксом.
// Файли з .spec.jsсуфіксом.



// Ви можете замінити it()на, xit()щоб тимчасово виключити тест із виконання.
// Подібним чином, fit()ви можете зосередитись на конкретному тесті, не виконуючи жодних інших тестів.

// для гравічної звітності в консолі у вигляді таблиці
npm test -- --coverage

// 1.
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});


// 2.
// Цей тест монтує компонент і гарантує, що він не потрапив під час рендерингу. 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});





// II.   https://reactgo.com/react-testing-tutorial-jest/ 
// зробити знімок нашого компонента.
npm i -D react-test-renderer
// ./App.js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Show</button>
      </div>
    );
  }
}
export default App;


// ./App.test.js
import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer'

describe('My first snapshot test',()=>{
    test('testing app button', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})