// Спливання подій через портали (коли є спливаюче вікно)
<html>
  <body>
    <div id="app-root"></div>
    <div id="modal-root"></div>
  </body>
</html>
///////

// Це два сусідніх контейнера в DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Елемент порталу додається в DOM-дерево після того, як
    // дочірні компоненти Modal будуть змонтовані, а це означає,
    // що дочірні компоненти будуть монтуватися на окремому DOM-вузлі.
    // Якщо дочірній компонент повинен бути приєднаний до DOM-дерева
    // відразу при підключенні, наприклад, для вимірювань DOM-вузла
    // або виклику в дочірньому елементі 'autoFocus', додайте в компонент Modal
    // стан і рендеріть дочірні елементи тільки тоді, коли
    // компонент Modal вже вставлений в DOM-дерево.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Ця функція буде викликана при натисканні на кнопку в компоненті Child
    // і оновить стан компонента Parent, незважаючи на те,
    // що кнопка не є прямим нащадком в DOM.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Кількість натискань: {this.state.clicks}</p>
        <p>
          Відкрийте DevTools браузера,
          щоб переконатися, що кнопка
          не є нащадком блоку div
          з обробником onClick.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // Подія натискання на цю кнопку буде спливати вгору до батьківського елемента,
  // тому що не визначено атрибут "onClick"
  return (
    <div className="modal">
      <button>Натисніть</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);
