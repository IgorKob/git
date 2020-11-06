import React from 'react';

const initialTodos = [...];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = React.useReducer(
    todoReducer,
    initialTodos
  );

  const handleChange = () => {};

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          ...
        </li>
      ))}
    </ul>
  );
};

export default App;

////////////


const App = () => {
  const [todos, dispatch] = React.useReducer(
    todoReducer,
    initialTodos
  );

  const handleChange = todo => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};


/////////////
import React from 'react';
import { useTheme } from 'styled-components';
import { useRouter } from 'react-router-dom';

function App() {
  const theme = useTheme();
  const history = useRouter();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Content theme={theme}>
      ...
    </Content>
  );
}

export default App;

/////////////////////

