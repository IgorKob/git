// useState - використовується для управління локальним станом у функціональних компонентах
function App() {
  const [list, setList] = React.useState(INITIAL_LIST);

  function onRemoveItem(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
          <button type="button" onClick={() => onRemoveItem(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}


2.
Якщо стейт є обєктом
const [mystate, setMystate] = React.useState({id:1, text: 'asd'})
<button onClick={() => {
  setMystate((prevMystate) => {
    return {
      ...prevMystate,
      text: 'asd2'
    }
  })
}}>Send</button>