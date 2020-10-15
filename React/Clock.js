class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

// Метод виконується після того, як вивід компонента був відрендерений у DOM.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
// спеціальні методи в класі компонента, які будуть викликані тоді, коли компонент демонтується:
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Привіт, світе!</h1>
        <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
