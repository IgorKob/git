class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Привіт</td>
        <td>Світe</td>
      </div>
    );
  }
}
//Результатом виводу <Table /> буде:
<table>
  <tr>
    <div>
      <td>Привіт</td>
      <td>Світe</td>
    </div>
  </tr>
</table>
////////////////////
//......................Фрагменти вирішують цю проблему.
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Привіт</td>
        <td>Світe</td>
      </React.Fragment>
    );
  }
}
//Результатом буде правильний вивід <Table />:
<table>
  <tr>
    <td>Привіт</td>
    <td>Світe</td>
  </tr>
</table>
//Скорочений запис
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Привіт</td>
        <td>Світe</td>
      </>
    );
  }
}
//Фрагменти, які оголошені за допомогою <React.Fragment> можуть мати ключі.
//Наприклад, їх можна використовувати при створенні списку визначень, перетворивши
//колекцію в масив фрагментів.
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Без атрибута `key`, React видасть попередження про його відсутність
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
