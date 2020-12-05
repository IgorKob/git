// https://reactgo.com/react-error-boundaries/


// Ми використовуємо componentDidCatchметод життєвого циклу для оновлення errorстану та реєстрації errorInfoв консолі.
class ErrorBoundary extends Component {
  state = {
    error: false,
    errorInfo: null
  };
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ whiteSpace: "pre" }}>
          <h2>Something went wrong</h2>
          {this.state.error && this.state.error.toString()}
          <br />
          <p>Error occured {this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}


// Компонент ErrorBoundary відображає резервний інтерфейс, лише якщо сталася помилка, інакше ми відображаємо файл children.
// Давайте використаємо ErrorBoundaryкомпонент для виявлення помилок.
function Welcome(props) {
  return <h1>{props.name}</h1>;
}

function App(props) {
  return (
    <div>
      <ErrorBoundary>
        <Welcome />
      </ErrorBoundary>
      <br />
      <h2>Date Component is working</h2>
      <Date />
    </div>
  );
}