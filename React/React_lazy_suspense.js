//////////////////////////////import()
// Кращий спосіб впровадити поділ коду в додаток - використовувати синтаксис динамічного імпорту: import ().
// До:
import { add } from './math'
console.log(add(16, 26))
// После:
import('./math').then((math) => {
  console.log(math.add(16, 26))
})


////////////////////React.lazy()
// Розбиття коду додатку може допомогти поступово завантажити тільки те, що
// необхідно користувачеві в цей момент. Це може значно покращити продуктивність
// додатку i уникнули завантаження коду, який може ніколи не знадобитись користувачеві
// та скоротили об’єм коду, що необхідний на початку завантаження додатку.
import React, { Suspense } from 'react';
// import OtherComponent from './OtherComponent';
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Завантаження...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

// 2.
// Наразі React.lazy підтримує тількі експорти за замовчуванням (default). Якщо модуль, який ви
// імпортуєте використовує іменовані експорти, можна створити проміжний модуль, який
// повторно експортуватиме його за замовчуванням. Це гарантує працездатність tree shaking
//механізма усунення невикористаного коду.
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;
// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";
// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js")); 





// 0.            Розбиття коду
// Замість того, щоб завантажувати всю програму, перш ніж користувачі зможуть її використовувати, 
// розбиття коду дозволяє розділити ваш код на невеликі фрагменти, які потім можна завантажити на вимогу.

// Це зробить moduleA.jsі всі його унікальні залежності як окремий шматок, 
// який завантажується лише після натискання користувачем кнопки "Завантажити".

// /moduleA.js
const moduleA = 'Hello';
export { moduleA };

// /App.js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;