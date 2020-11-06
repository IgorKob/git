//useMemo - гак може бути використаний для оптимізації витрат при обчисленні компоненти функції .
// функція виконується лише коли зміна стану є у search. Він не запускається, якщо стан змінюється для text,
// оскільки це не залежність для цієї функції фільтра і, отже, не залежність у масиві залежностей для хука useMemo.
import React from 'react';

const users = [
  { id: 'a', name: 'Robin' },
  { id: 'b', name: 'Dennis' },
];

const App = () => {
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  // const filteredUsers = users.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = React.useMemo(() =>
      users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),[search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;