// компонент вищого порядку - це функція, яка приймає компонент і повертає новий компонент.
// Якщо звичайний компонент перетворює пропси в UI, то компонент вищого порядку перетворює компонент в інший компонент.

// 0.
// Замість цього ...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))

// ... можете використати композиційну функцію
// compose(f, g, h) теж саме, що (...args) => f(g(h(...args)))
const enhance = compose(
  // Обидва параметра є КВП та приймають лише один аргумент
  withRouter,
  connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)



1.
const EnhancedComponent = higherOrderComponent(
  WrappedComponent
)

2.
const NavbarWithRouter = withRouter(Navbar)

3.
const ConnectedComment = connect(
  commentSelector,
  commentActions
)(CommentList)

4.
// Вызов функции connect возвращает другую функцию
const enhance = connect(
  commentListSelector,
  commentListActions
)
// Эта функция и есть HOC. Она возвращает компонент, подключённый к хранилищу Redux
const ConnectedComment = enhance(CommentList)




// II.
const withTodosNull = (Component) => (props) =>
  !props.todos
    ? null
    : <Component { ...props } />
 
function TodoList({ todos }) {
  ...
}
 
const TodoListWithNull = withTodosNull(TodoList);
 
function App(props) {
  return (
    <TodoListWithNull todos={props.todos} />
  );
}

// III.
const withTodosNull = (Component) => (props) =>
  ...
 
const withTodosEmpty = (Component) => (props) =>
  ...
 
const withLoadingIndicator = (Component) => ({ isLoadingTodos, ...others }) =>
  ...
 
function TodoList({ todos }) {
  ...
}
 
const TodoListOne = withTodosEmpty(TodoList);
const TodoListTwo = withTodosNull(TodoListOne);
const TodoListThree = withLoadingIndicator(TodoListTwo);
 
function App(props) {
  return (
    <TodoListThree
      todos={props.todos}
      isLoadingTodos={props.isLoadingTodos}
    />
  );
}

//IV.
import { compose } from 'recompose';
 
const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component { ...props } />
 
const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <Component { ...props } />
 
const EmptyMessage = () =>
  <div>
    <p>You have no Todos.</p>
  </div>
 
const LoadingIndicator = () =>
  <div>
    <p>Loading todos ...</p>
  </div>
 
const isLoadingConditionFn = (props) => props.isLoadingTodos;
const nullConditionFn = (props) => !props.todos;
const isEmptyConditionFn = (props) => !props.todos.length
 
const withConditionalRenderings = compose(
  withEither(isLoadingConditionFn, LoadingIndicator),
  withMaybe(nullConditionFn),
  withEither(isEmptyConditionFn, EmptyMessage)
);
 
const TodoListWithConditionalRendering = withConditionalRenderings(TodoList);
 
function App(props) {
  return (
    <TodoListWithConditionalRendering
      todos={props.todos}
      isLoadingTodos={props.isLoadingTodos}
    />
  );
}
 
function TodoList({ todos }) {
  return (
    <div>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}