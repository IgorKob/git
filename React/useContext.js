// I.
// 1. 
const TodoContext = createContext ( null ) ;
// 2.
<TodoContext.Provider value={dispatchTodos}>
    <Filter dispatch={dispatchFilter} />
    <TodoList dispatch={dispatchTodos} todos={filteredTodos} />
    <AddTodo dispatch={dispatchTodos} />
</TodoContext.Provider>
// 3.
const dispatch = useContext(TodoContext);
//33.
<TodoContext.Consumer>
        <p style={{ color }}>Hello World</p>
</TodoContext.Consumer>


// також можете передати функції у значення Постачальника, і ці функції будуть використані Споживачем для оновлення стану контексту:
<Provider value={{
  state: this.state,
  updateSomething: () => this.setState({something: 'ho!'})}}>
  {this.props.children}
</Provider>

/* ... */
<Consumer>
  {(context) => (
    <button onClick={context.updateSomething}>{context.state.something}</button>
  )}
</Consumer>




// II.
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}


