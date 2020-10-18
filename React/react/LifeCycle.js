import React from 'react'
import ReactDOM from 'react-dom'

// lifecycle methods
export default class Asd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {class: 'off', label: 'Press'};

    this.press = this.press.bind(this);

    console.log('start: constructor');
  }

// викликається відразу після монтування компонента (вставки в DOM-дерево)
  componentDidMount() {
    console.log('start: componentDidMount()');
  }

// викликається перед рендерингом при отриманні нових пропсів і стану
  shouldComponentUpdate() {
    console.log('start: shouldComponentUpdate()');
    return true;
  }

// викликається відразу після оновлення. Цей метод не викликається під час першого рендеру.
  componentDidUpdate() {
    console.log('start: componentDidUpdate()');
  }

// викликається, коли компонент видаляється з DOM
  componentWillUnmount() {
    console.log('start: componentWillUnmount()');
  }

  press() {
    var className = (this.state.class === 'off') ? 'on' : 'off';
    this.setState({class: className});
  }

  render() {
    console.log("start: render()");
    return (
      <>
        <h1>asdsdasdsda</h1>
        <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
      </>
    )
  }
}

// ..................................Життєвий цикл компонента
// 1. Монтування
// Ці методи викликаються в наступному порядку, коли екземпляр компонента створюється
// і вставляється в DOM:
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

// 2. Оновлення
// Оновлення може бути спричиненим зміною пропсів чи стану. Ці методи викликаються в
// наступному порядку, коли компонент повторно рендериться:
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

// 3. Демонтування
// Цей метод викликається, коли компонент видаляється з DOM:
componentWillUnmount()

// 4. Обробка помилок
// Наступні методи викликаються, якщо виникла помилка під час рендерингу в методі
// житєвого циклу чи конструкторі будь-якого дочірнього компонента.
static getDerivedStateFromError()
componentDidCatch()



// ..............................Інші API
// Кожен компонент також надає деякі інші API:
setState()
forceUpdate()
// Властивості класу
defaultProps
displayName
// Властивості екземпляру
props
state
