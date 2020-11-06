// ми можемо вказати щоб віртуал дом створувався тільки тоді коли були змінені пропси і стейт

// При загрузці стрінки може створується декілька віртуальних домів і порівнуватися між собою
// і так як пропси і стейт в цей період не мінявся то і віртуал дом теж є однаковим
// і не відбувається перемонтування справжнього дому на основі віртуал дому
// і ми можемо вказати щоб віртуал дом створувався тільки тоді коли були змінені пропси і стейт

// 1. це саме робить компонента PureComponent
import React from "react";

class Asd extends React.PureComponent {
  ...
}

// 2. shouldComponentUpdate - метод життєвого циклу який вирішує чи перемальовувати компоненту.
// Якщо вхідні пропси відрізняються то буде true, і компонента перемалюється
class Asd extends React.Component {
  shouldComponentUpdate(nextProps, naxtState) {
    return nextProps != this.props || nextState != this.state;
  }
  render() {
    return <Qwe />
  }
}

// 3. React.memo() - для функціональних компонент HOC (High Order Component)
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