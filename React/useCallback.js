// useCallback Hook використовується для запам'ятовування функцій. Це вже невеликий приріст продуктивності, 
// коли функції передаються іншим компонентам, не турбуючись про повторну ініціалізацію функції для кожного 
// повторного відтворення батьківського компонента. Однак, як ви вже бачили, ReaC's useCallback Hook починає 
// світитись, коли використовується разом із нагадувальним API React.

// Передайте вбудовану функцію зворотнього виклику і масив залежностей. useCallback поверне мемоізовану 
// версію функції зворотнього виклику, котра змінюється лише тоді, коли одна з її залежностей змінюється. 
// Це корисно при передачі фукцій зворотнього виклику до оптимізоваих дочірніх компонентів, що покладаються 
// на рівність посилань задля уникнення непотрібних рендерів (наприклад, shouldComponentUpdate).

// useCallback(fn, deps) є еквівалентом useMemo(() => fn, deps).

const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);


// 2.
// Ми можемо використовувати useCallback для запам'ятовування функції , а це означає, що ця функція 
// перевизначається лише в тому випадку, якщо будь-яка її залежність у масиві залежностей змінюється:
// Якщо usersстан змінюється шляхом додавання або вилучення елемента зі списку, функція обробника 
// перевизначається, а дочірні компоненти повинні рендерити.
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
 
const App = () => {
  const [users, setUsers] = React.useState([
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
  ]);
 
  const [text, setText] = React.useState('');
 
  const handleText = (event) => {
    setText(event.target.value);
  };
 
  const handleAddUser = ()  =>{
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };
 
  // const handleRemove = (id) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };
  const handleRemove = React.useCallback(
    (id) => setUsers(users.filter((user) => user.id !== id)),
    [users]
  );
 
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>
 
      <List list={users} onRemove={handleRemove} />
    </div>
  );
};
 
// const List = ({ list, onRemove }) => {
const List = React.memo(({ list, onRemove }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};
});
 
// const ListItem = ({ item, onRemove }) => {
const ListItem = React.memo(({ item, onRemove }) => {  
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
};
});
 
export default App;