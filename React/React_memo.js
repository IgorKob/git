//React.memo - може бути використаний для оптимізації поведінки візуалізації ваших компоненти функції
//Відображається лише новий елемент. Усі попередні елементи у списку залишаються незмінними
// і, таким чином, не відображаються повторно. Зараз відображаються лише ті компоненти, на
// які впливають зміни стану.
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

  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} />
    </div>
  );
};


const List = React.memo(({ list }) => {
  console.log('Render: List');
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});


const ListItem = ({ item }) => {
  console.log('Render: ListItem');
  return <li>{item.name}</li>;
};