// компонент вищого порядку - це функція, яка приймає компонент і повертає новий компонент.
// Якщо звичайний компонент перетворює пропси в UI, то компонент вищого порядку перетворює компонент в інший компонент.

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
