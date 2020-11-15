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


