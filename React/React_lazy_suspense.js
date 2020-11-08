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
